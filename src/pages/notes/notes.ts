import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable'

import {NOTES_LIST} from '../../mocks/notes.mocks';
import {Notes} from '../../models/notes.interface';

/**
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notes',
  templateUrl: 'notes.html',
})
export class NotesPage {
  topicnum: number;
  notes: Notes;

  constructor(private view: ViewController, private navCtrl: NavController, 
    private navParams: NavParams) {
  }
  mockGetNotes(topicnum: number): Observable<Notes> {
    return Observable.of(NOTES_LIST.filter(note => note.TopicNum === topicnum )[0]);
  }

  ionViewWillLoad() {
    this.topicnum = this.navParams.get('topicnum');
    console.log('ionViewWillLoad NotesPage');
    console.log('topic num = ' + this.topicnum);
    this.mockGetNotes(this.topicnum).subscribe(data => this.notes = data);
  }
  closeModal() {
    this.view.dismiss();
  }
  

}
