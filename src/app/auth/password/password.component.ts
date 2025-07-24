import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {

  user_id!: string | null;
  userForm!: FormGroup;
  userSelected!: User;

  constructor(private activatedRouter: ActivatedRoute,
    private userService: UserService, private formeBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.user_id = this.activatedRouter.snapshot.paramMap.get('id');

    //Users Initialiser form
    this.userForm = this.formeBuilder.group({
      password: this.formeBuilder.control('', [Validators.required, Validators.minLength(8)]),
      password_verify: this.formeBuilder.control('', [Validators.required, Validators.minLength(8)])
    });

    if (this.user_id) {
      this.preLoadUser(this.user_id);
    }
  }

  preLoadUser(user_id: string | null) {

    this.userService.get_Id_User(user_id).subscribe((resultat: any) => {
      // console.log('Resultat ', resultat);
      var result = resultat.data;
      this.userSelected = result;
    });
  }

  enregistrer() {
    // console.log('Register ', this.userForm.value);

    if (this.userForm.valid) {
      this.userService.putModifypassword(this.userSelected.id, this.userForm.value).subscribe((result: any) => {
        // console.log(result);
        this.userForm.reset();
      });
    } else {
      this.userForm.markAllAsTouched();
    }
  }
}
