import { Component } from '@angular/core';
import { UserServiceService } from '../../../services/user-service.service';
//import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private userService: UserServiceService){
    userService.token="";
  }
}
