import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs'

@Injectable()
export class LoginHelperService{

    private serviceData: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    setData(data: any){
        this.serviceData.next(data);
    }

    getData():Observable<any>{
        return this.serviceData.asObservable();
    }
}