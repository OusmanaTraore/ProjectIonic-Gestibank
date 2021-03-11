import { Injectable } from '@angular/core';
import {User } from '../models/models';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private dataBase = "http://127.0.0.1:86/Users/";

  //Users/add

  constructor(private httpClient: HttpClient) { }

  getAllUsers(){
    return this.httpClient.get(this.dataBase + 'list');
  }

  getValidatedUsers(){
    return this.httpClient.get(this.dataBase + 'waiting/list');
  }

  getWaitingUsers(){
    return this.httpClient.get(this.dataBase + 'validated/list');
  }

  postUser(User: User){
    return this.httpClient.post(this.dataBase + "add", User);
  }

  putUser(User){
    return this.httpClient.post(this.dataBase + 'update/' + ['email'], User);
  }

  deleteUser(email: String){
    return this.httpClient.post(this.dataBase + 'update/' + ['email'], email);
  }

}
