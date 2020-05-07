import { Component, OnInit } from '@angular/core';
import { Validators , FormBuilder  } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private _serviceAuth: AuthService
  ) { }

  loginForm = this.fb.group({
    email: ['' , [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });


  ngOnInit() {
  }

  onSubmitLogin(){
    console.warn(this.loginForm.value);
    this._serviceAuth.loginUser("corre@gmaill.com","password");
  }

}
