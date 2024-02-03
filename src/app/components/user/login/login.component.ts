import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {
  public username: string = '';
  public password: string = '';
  public message: string = '';

  constructor(private authService: AuthService,
    private router: Router){

  }

  login(){
    this.authService.login(this.username, this.password)
        .subscribe({
          next: (resp) => {
            this.message = resp.msg;
            this.router.navigate(['compositions','list'])
          },
          error: (err) => this.message = err.error.msg
        });
      }

}
