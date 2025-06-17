import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  loading = false;

  constructor(private formeBuilder: FormBuilder, private authService: AuthService, private router: Router) {

    this.islogin();
  }


  ngOnInit(): void {

    //Login Initialiser form
    this.loginForm = this.formeBuilder.group({
      email: this.formeBuilder.control('', [Validators.required]),
      password: this.formeBuilder.control('', [Validators.required]),
    });
  }

  islogin() {
    var login = this.authService.refreshToken()
    if (login) {
      this.router.navigateByUrl('/auth');
    }
    //  else {
    //   this.router.navigateByUrl('/login');
    // }
  }

  //Controller form
  public control(attribut: string) {
    var result: any;
    if (attribut == 'email') {
      return result = this.loginForm.get(attribut);
    } else if (attribut == 'password') {
      return result = this.loginForm.get(attribut);
    }
    return result;
  }


  valide() {
    this.loading = true;
    // console.log('login ', this.loginForm.value);

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
    } else {
      this.loginForm.markAllAsTouched();
      this.loading = false;
    }
  }
}
