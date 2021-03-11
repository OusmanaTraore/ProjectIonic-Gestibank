import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ConverterService } from '../services/converter.service';

@Component({
  selector: 'app-devise',
  templateUrl: './devise.page.html',
  styleUrls: ['./devise.page.scss'],
})
export class DevisePage implements OnInit {

  public myQuotes : number;
  public devise ;
  public montant: number = 0;
  public quotes; 
  public rate: number = 0;
  public resultat : number = 0;

  constructor(public http: HttpClient, private service : ConverterService) { }

  ngOnInit() {
  }

  codeSelected(){
    
      this.service.getQuotes(this.devise).subscribe((data) => {
      this.quotes = (data['quotes']);
      var keys = Object.keys(this.quotes);
      var key = keys[0];
     
      this.myQuotes = (<number>this.quotes[key]);
    });

  }

  convert(){

    this.resultat = this.myQuotes*this.montant ;
    console.log(this.quotes);
  }

}
