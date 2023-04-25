import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  
  username1='';
  password ='';
  
  constructor(private router: Router,private loginservice: AuthenticationService){}
  
  toRegister(){
    var status= confirm("registered success");
    if(status==true){
      this.router.navigate(['login']);
    }
    else{
      this.router.navigate(['signin']);
    }
  }
  signIn(){
    this.loginservice.getSignIn(this.username1,this.password);
    this.toRegister();
  }

}
