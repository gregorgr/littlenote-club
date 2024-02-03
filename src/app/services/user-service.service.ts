import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ServerNameService } from './server-name.service';

@Injectable({
  providedIn: 'root'
})


export class UserServiceService {
    private _token: string = "";
    webserver:string = ""; 

    constructor(private http: HttpClient, 
      private serverName: ServerNameService) {
       this.webserver = serverName.getServerName();
      }

    set token(token: string) {
      this._token = token;
    }
  
    get token() {
      return this._token;
    }

    setToken(token: string): void {
      this._token = token;
    }
  
    getToken(): string {
      return this._token;
    }
  
  
    isLoggedIn() {
      return this.token != "";
    }

    postRequest(url: string, data: any): Observable<any> {
      const headers = { Authorization: `Bearer ${this._token}` };
      return this.http.post(this.webserver + 'xlogin/', data, { headers });
    }
}
