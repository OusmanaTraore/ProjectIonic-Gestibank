import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor(private httpClient: HttpClient) { }

  getQuotes(v){ 
    var dataBase = "http://api.currencylayer.com/live?access_key=0ecd4fcd615115c1c0122b2be24dfd85&currencies="+v+"&format=1/";
    return this.httpClient.get(dataBase);
  }
}
