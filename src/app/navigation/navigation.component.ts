import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

  constructor(private router: Router, private userService: UserServiceService) {}
  
  navigateSeznam(): void {
    const postData = { /* Your data for the POST request */ };

    // Send the POST request
    this.userService.postRequest('/compositions/list', postData).subscribe(
      (response) => {
        // Handle the response if needed

        // Navigate after the POST request is successful
        //this.router.navigate(['your-target-route']);
        this.router.navigate(['compositions','list'])
      },
      (error) => {
        // Handle the error if needed
        console.error('Error in POST request:', error);
      }
    );
  }
  
  navigateDodaj(){
    const postData = { /* Your data for the POST request */ };

    // Send the POST request
    this.userService.postRequest('/compositions/create', postData).subscribe(
      (response) => {
        // Handle the response if needed

        // Navigate after the POST request is successful
        this.router.navigate(['compositions','create'])
      },
      (error) => {
        // Handle the error if needed
        console.error('Error in POST request:', error);
      }
    );
  }

  navigateLogOut(){
    const postData = { /* Your data for the POST request */ };

    // Send the POST request
    this.userService.postRequest('/logout', postData).subscribe(
      (response) => {
        // Handle the response if needed

        // Navigate after the POST request is successful
        this.router.navigate(['logout'])
      },
      (error) => {
        // Handle the error if needed
        console.error('Error in POST request:', error);
      }
    );
  }

  navigateLogIn(){
    const postData = { /* Your data for the POST request */ };

    // Send the POST request
    this.userService.postRequest('/login', postData).subscribe(
      (response) => {
        // Handle the response if needed

        // Navigate after the POST request is successful
       // this.router.navigate(['your-target-route']);
        this.router.navigate(['login'])
      },
      (error) => {
        // Handle the error if needed
        console.error('Error in POST request:', error);
      }
    );
  }
}
