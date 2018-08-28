import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Login} from "../../models/Login";
import {Observable} from "rxjs";

/*
  Generated class for the GetProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GetProvider {

  loginUrl: string = 'http://localhost:8080/SpringApp/login/';

  constructor(public http: HttpClient) {
    console.log('Hello GetProvider Provider');
  }

  login(user: Login): Observable<any>{
    return this.http.get<any>(this.loginUrl + user.email + '/' + user.password);
  }

}
