import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  

  constructor() { }

  authenticate(username : any, password : any)  {
    let user = sessionStorage.getItem('usersigninname')
    let user1 = sessionStorage.getItem('userpassword')
    if (username === user && password === user1) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  authenticateusername(username: any, password: any) {
    let user = sessionStorage.getItem('usersigninname')
    let user1 = sessionStorage.getItem('userpassword')
    if(username!==user && password ===user1){
      return true;
    } else{
      return false;
    }
    
  }

  authenticatepassword(username: any, password: any) {
    let user = sessionStorage.getItem('usersigninname')
    let user1 = sessionStorage.getItem('userpassword')
    if(username ===user && password !==user1){
      return true;
    } else{
      return false;
    }
    
  }
  authenticateboth(username: any, password: any) {
    let user = sessionStorage.getItem('usersigninname')
    let user1 = sessionStorage.getItem('userpassword')
    if(username !==user && password !==user1){
      return true;
    } else{
      return false;
    }
    
  }

  getSignIn(username1: any,pwd: any){
    
    sessionStorage.setItem('usersigninname',username1)
    sessionStorage.setItem('userpassword',pwd)

  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
  }
}