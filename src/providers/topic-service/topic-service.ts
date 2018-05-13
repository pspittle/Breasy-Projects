// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable'


import { Topic } from '../../models/topic.interface';
import { TOPIC_LIST } from '../../mocks/topic.mocks';
import { Choice } from '../../models/choice.interface';
import { CHOICE_LIST} from '../../mocks/choice.mocks'
import { Notes } from '../../models/notes.interface';
import { NOTES_LIST} from '../../mocks/notes.mocks'
import { noUndefined } from '@angular/compiler/src/util';
/*
  Generated class for the TopicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TopicServiceProvider {
  checktopic: Topic;
  constructor( ) {
    console.log('Hello TopicServiceProvider Provider');

  }

  /*
    Get the topics matching the passed topic number 
  */

  mockGetTopicInfo(topicnum: string): Observable<Topic> {
    const result = Observable.of(TOPIC_LIST.filter(topic => topic.TopicNum === topicnum )[0]);
    result.subscribe(data => this.checktopic = data);
    
    if (this.checktopic === undefined) { 
      console.log("check topic returned undefined. Setting topic to 9999")
      return Observable.of(TOPIC_LIST.filter(topic => topic.TopicNum === '9999' )[0])
          } 
    else { 
      console.log("found something" + this.checktopic.TopicNum);
      return result; 
    };
  }
  mockGetChoices(topicnum: string): Observable<Choice[]> {
    return Observable.of(CHOICE_LIST.filter(topic => topic.TopicNum === topicnum ));
  }
}
