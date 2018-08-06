import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';


@Component({
    selector: 'app-system',
    templateUrl: './system.component.html',
    styleUrls: ['./system.component.css']
})

export class SystemComponent implements OnInit{

    user: User;

    constructor(private authService: AuthService,
                private router:Router){}
     
    ngOnInit(){
        this.user = JSON.parse(window.localStorage.getItem('user'));
        if(window.localStorage.getItem('user') !== null){
            let user = window.localStorage.getItem('user');
        }
    }

    onLogout(){
        this.authService.logout();
        this.router.navigate(['/login']);

    }
}