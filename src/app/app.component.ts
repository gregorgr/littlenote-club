import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { of, map,filter, reduce, from, Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
/*
  template: '<app-some-other-component />',
  imports: [SomeOtherComponent]
*/
export class AppComponent {
  title = 'littlenote-club';
  
  name = 'Max';

  imgUrl = 'https://fastly.picsum.photos/id/1/200/300.jpg?hmac=jH5bDkLr6Tgy3oAg5khKCHeunZMHq0ehBZr6vGifPLY';

  currentDate = new Date();
  //public musicList!: Array

  constructor(private authService: AuthService){
    authService.doLogin();
  }

  logImage(event: string){
 //   console.log(event)
  }
}
