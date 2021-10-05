import { Component } from '@angular/core';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public loginForm: any = {
    login: '',
    password: '',
  };

  public printForm(): void {
    console.log(this.loginForm);
  }
}
