import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import{IUser} from '../models/user';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  SERVER:string="http://localhost:3000/login";
  
  constructor(private httpClient:HttpClient) { }

  login(data){
    return this.httpClient.post(this.SERVER,data);
  }
}
