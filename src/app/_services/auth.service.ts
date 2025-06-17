import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subject } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loading = false;
  helper = new JwtHelperService();
  public isAuthentify: boolean = false;
  public user: any;
  subjectUser = new Subject();

  constructor(private router: Router, private userService: UserService) { }

  //L'authentification
  login(username: string, password: string) {
    this.loading = true;
    let formLogin = { email: username, password: password };

    this.userService.postLogin(formLogin).subscribe((response: any) => {

      if (response) {
        const token = response.data.token;

        localStorage.setItem("loading...adata", token);

        this.router.navigateByUrl('/auth');

        this.refreshToken();

      } else {
        // console.log(response);
        alert(response.message);
      }

    }, (err) => {
      this.isAuthentify = false;
      console.log('err ', err);
    });
  }


  getUserDoc(userId: number) {
    this.userService.get_Id_User(userId).subscribe((element: any) => {
      this.user = element.data;

      this.subjectUser.next(this.user);
      this.subjectUser.complete();

      // this.userLayoutService.pageOfUser(element.User);
    });
  }

  refreshToken() {
    //Existance du token
    const token = localStorage.getItem("loading...adata");
    if (token) {
      //Verify date d'expiration
      const isExpired = this.helper.isTokenExpired(token);

      if (isExpired) {
        alert("Votre session est terminer");
        this.isAuthentify = false;
        this.logout();
        return this.isAuthentify;
      } else {
        const decodedToken = this.helper.decodeToken(token);
        this.isAuthentify = true;

        //Subjet for Data of User 
        this.getUserDoc(decodedToken.user_id);

        return this.isAuthentify;
      }
    } else {
      this.router.navigateByUrl('/login');
      return false;
    }
  }

  islogged(): boolean {
    var token = this.refreshToken();
    console.log('token ', token);
    return !!token
  }

  logout() {
    localStorage.removeItem("loading...adata");
    this.isAuthentify = false;
    this.router.navigateByUrl('/');
  }
}
