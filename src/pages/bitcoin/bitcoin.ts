import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Bitcoin } from "../../models/bitcoin.model"
import { Observable } from 'rxjs/Observable';
import { BitcoinProvider } from '../../providers/bitcoin/bitcoin';

/**
 * Generated class for the BitcoinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bitcoin',
  templateUrl: 'bitcoin.html',
})
export class BitcoinPage {
  currency: string = "EUR";
  bitcoin$: Observable<Bitcoin>

  constructor(private bitcoinProvider: BitcoinProvider) {
  }

  ionViewWillLoad() {
    this.getBitcoinPrice();
    console.log(this.bitcoin$)
  }

  getBitcoinPrice() {
    this.bitcoin$ = this.bitcoinProvider.getBitcoinPrice();
  }
}
