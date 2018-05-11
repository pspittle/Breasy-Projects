import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, ModalController, ModalOptions  } from 'ionic-angular';
import { TopicServiceProvider } from '../../providers/topic-service/topic-service';
import { Topic } from '../../models/topic.interface';
import { Choice } from '../../models/choice.interface';
import { Notes} from '../../models/notes.interface';
import { isNumber } from 'ionic-angular/util/util';

/**
 * Generated class for the TopicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topic-list',
  templateUrl: 'topic-list.html',
})
export class TopicListPage {
  topic: Topic;
  notes: Notes;
  choices: Choice[];
  topicnum: number;
  topiclink: string;
  @ViewChild(Slides) slides: Slides;

  constructor(private navCtrl: NavController, private navParams: NavParams, 
    private topicSvc: TopicServiceProvider, private modalCtl: ModalController) {
  }

  getTopicList(): void {
    this.topicSvc.mockGetTopicInfo(this.topicnum).subscribe(data => console.log(data));
    this.topicSvc.mockGetTopicInfo(this.topicnum).subscribe(data => this.topic = data);
    this.topicSvc.mockGetChoices(this.topicnum).subscribe(data => console.log(data));
    this.topicSvc.mockGetChoices(this.topicnum).subscribe(data => this.choices = data);
    console.log('The topic retrieved was: ' + this.topic);
  }

  ionViewWillLoad() {
    this.topicnum = this.navParams.get('topicnum');
    if (this.topicnum) {
      console.log('Topic passed to page: ' + this.topicnum)
    } else {
      console.log('No topic passed to page. Topic set to zero by default.');
      this.topicnum = 0
    }
    this.getTopicList();
    this.topiclink = this.topic.TopicLink;
    console.log(this.topiclink);
  }

  ionViewDidEnter() {
    this.slides.autoplay="4000";
    this.slides.startAutoplay();
    console.log('ionViewDidEnter TopicListPage');
  }
  showNext(nexttopic: number) {
    console.log("Parameter passed: " + nexttopic);
    if (isNumber (nexttopic)) {
      console.log("The next topic to navigate to is " + nexttopic);
      this.navCtrl.push('TopicListPage', {topicnum: nexttopic}) };
  }
  showNotes(topicnum):void {
    const myModalOptions: ModalOptions = {
        enableBackdropDismiss : false
      };
    const modal = this.modalCtl.create('NotesPage',{topicnum: topicnum});
    modal.present();
  }

}
