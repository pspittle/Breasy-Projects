import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ModalOptions } from 'ionic-angular';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1root: string = "TopicListPage";
  tab2root: string;
  tab3root: string;
  myModal: ModalController;
  myModalData = {
    name: "Peter Spittle",
    Occupation: "Developer"
  }

  constructor(private navCtrl:NavController, private modalCtl:ModalController) {
  }
  showInfo():void {
    const myModalOptions: ModalOptions = {
        enableBackdropDismiss : false
      };
    const modal = this.modalCtl.create('InfoPage');
    modal.present();
  }
  showContacts():void {
    const myModalOptions: ModalOptions = {
      enableBackdropDismiss : false,
      showBackdrop : true
    };
    const modal = this.modalCtl.create('ContactsPage',this.myModalData,myModalOptions);
    modal.present();
  }
  
  navBack():void {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
