import { Component } from '@angular/core';

@Component ({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public username = '';
  public password = '';
  public checkUsername = true;

  public usernameCheck(): void{
    console.log('Логин:' + this.username);
    console.log('Пароль:' + this.password);
    if ((this.username.includes('@')) && (this.username.includes('.'))) {
      this.checkUsername = true;
    } else {
      this.checkUsername = false;
    }
  }
}
