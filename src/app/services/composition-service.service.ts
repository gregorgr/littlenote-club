import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Composition } from '../model/composition';
import { ServerNameService } from './server-name.service';
@Injectable({
  providedIn: 'root'
})
export class CompositionServiceService {

  webserver:string = ""; 

  public compositions!: Composition[];

  constructor(private http: HttpClient, private serverName: ServerNameService) { 
    this.webserver = serverName.getServerName();
  }

  //getStudents
  getCompostitions(): Observable<Composition[]>{
    //console.log(this.webserver  + 'api/add-composition');
    return this.http.get<Composition[]>( this.webserver  + "api/compositions")
  }

  //createStudent
  createCompostition(composition: Composition):Observable<any>{
    return this.http.post( this.webserver  + 'api/add-composition', composition);
  }

  /*toggleActive(idstev: number){
    let url = "/toggleActive/"+idstev;
    this.http.get(url)
  }*/

}