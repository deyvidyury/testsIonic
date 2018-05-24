import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {
  quoteGroup: {
    category: string,
    quotes: Quote[],
    icon: string
  }

  constructor(public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddToFavorite(selectedQuote: Quote) {
    const alert = this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure?',
      message: 'Are you sure you want to add the quote to your favorities?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log('OK')
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('NO')
          }
        }
      ]
    });

    alert.present();
  }

  /*
  ionViewDidLoad() {
    this.quoteGroup = this.navParams.data;
    Added elvis operator |?| in template to use this approach
  }
  */

}
