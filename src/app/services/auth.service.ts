import { Injectable } from '@angular/core';
import { Login } from '../model/login';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

import { ServerNameService } from './server-name.service';
import { UserServiceService } from './user-service.service';



@Injectable({
  providedIn: 'root'
})


export class AuthService {

  webserver:string = ""; 

  public authToken: string = "";

  //public login: Login;
 // , 
  constructor(private http: HttpClient,
    private userService: UserServiceService,
    private serverName: ServerNameService) { 
    // server has no sql  
    // this.login = new Login("xgregor","saDF2ha45skjU&$das!$","");
  }

  login(username: string, password: string): Observable<any>{
    return this.http.post(this.serverName.getServerName()   + 'xlogin/',{
      username: username,
      password: password
    }).pipe(map((response:any) =>{
      console.log("AuthService pipe token2: " + response.token);
      this.userService.token = response.token;
      return response;
    }))
  }
  
    
  doLogin(){
    this.http.post<Login>( this.serverName.getServerName()   + 'xlogin/', this.login)
      .subscribe({
        next: (serverLogin) => {
          this.authToken = serverLogin.token ?? "";
          console.log("token: " + this.authToken);
        },
        error: (error) => console.log(error)
      });
  }
}