import { LoginHelperService } from './login-helper.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    private isAuthenticated = false;
    clearLocalstorage = true;

    constructor(private loginHelper: LoginHelperService){}

    login(){
        this.isAuthenticated = true;
    }

    logout(){
         this.isAuthenticated = false;
          window.localStorage.clear();
    }

    isLoggedIn(): boolean{
        // At this point in a real application, 
        // we need to make a request to the server for verification
        return this.isAuthenticated;
    }

}