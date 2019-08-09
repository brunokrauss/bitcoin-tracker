import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bitcoin } from '../../models/bitcoin.model';

/*
  Generated class for the BitcoinProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BitcoinProvider {
  private ROOT_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";

  constructor(private http: HttpClient) {
    
  }

  getBitcoinPrice(){
    return this.http.get<Bitcoin>(this.ROOT_URL)
  }
}
