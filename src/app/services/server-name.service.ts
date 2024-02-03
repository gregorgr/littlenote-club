import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class ServerNameService {

    webserver : string = "http://rnsuv.xdevelopment.org/"

    getServerName():string{
        return this.webserver;
    }
}
