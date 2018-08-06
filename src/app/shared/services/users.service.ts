import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE, PUT',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding"
    })
  };

@Injectable()
export class UsersService{

    constructor(private http: HttpClient){}

    login(formData): Observable<any>{
        
        const body = {
            "email": formData.email,
            "password": formData.password
        };
        
        return this.http.post(`https://globalbit.co.il/front-end-assignment/login.php`, body, httpOptions)
         .pipe(
             map(data => {
                 return data;
             }),
             catchError(error => {
                return error;
             })
            )
    }

    sendRequestToInstructions(formData){
       
        const body = {
            "email": formData.email
        }

        return this.http.post(`https://globalbit.co.il/front-end-assignment/forgot-password.php`, body, httpOptions)
        .pipe(
            map(data => {
                return data;
            }),
            catchError(error => {
                return error;
            })
        )
    }
}