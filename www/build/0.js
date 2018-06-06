webpackJsonp([0],{

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicListPageModule", function() { return TopicListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topic_list__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TopicListPageModule = /** @class */ (function () {
    function TopicListPageModule() {
    }
    TopicListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__topic_list__["a" /* TopicListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__topic_list__["a" /* TopicListPage */]),
            ],
        })
    ], TopicListPageModule);
    return TopicListPageModule;
}());

//# sourceMappingURL=topic-list.module.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTES_LIST; });
var NotesList = [
    { TopicNum: '2.1.1', NoteText: 'These services cannot extend to the determination of amounts to be recorded in the financial statements.' },
    { TopicNum: '2.1.3', NoteText: 'Additionally, the Financial Condition Report acts as a high level health check on the entity.' },
    { TopicNum: '2.1.4', NoteText: 'Provided (per PS 100) our report will be addressed to the auditor, there is written acceptance on appointment that copies of the report in its entirety will be provided to the Board, management and the Primary Actuary, and there is written acknowledgement on appointment that a copy of the report may be provided to APRA.' },
    { TopicNum: '2.2.1.3', NoteText: 'Depending on the degree of reliance that will be placed on the particular IT systems as part of the audit, a determination shall be made as to whether to provide such non-assurance services only with personnel who are not members of the audit team and who have different reporting lines within the member firm.' },
    { TopicNum: '2.2.4', NoteText: 'For example, providing estimated costs in cost optimization projects to source processes to another location.' },
    { TopicNum: '2.2.4', NoteText: 'The source of the information must be communicated to management and the information should not be provided to third parties.' },
    { TopicNum: '2.2.5', NoteText: 'We may only provide these services provided the client is actively involved, makes all decisions and does not delegate its responsibilities to a KPMG engagement team member.' },
    { TopicNum: '2.2.5', NoteText: 'The documentation of a process does not include refining policies that may not be clearly developed by management.' },
    { TopicNum: '2.2.5', NoteText: 'In instances where management’s policies are not clear or require refinement, we can provide recommendations to the client.' },
];
var NOTES_LIST = NotesList;
//# sourceMappingURL=notes.mocks.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_topic_service_topic_service__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mocks_bullets_mocks__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mocks_body_mocks__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mocks_notes_mocks__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__mocks_links_mocks__ = __webpack_require__(292);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










/**
 * Generated class for the TopicListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TopicListPage = /** @class */ (function () {
    function TopicListPage(navCtrl, navParams, topicSvc, modalCtl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.topicSvc = topicSvc;
        this.modalCtl = modalCtl;
    }
    TopicListPage.prototype.getTopicList = function () {
        var _this = this;
        this.topicSvc.mockGetTopicInfo(this.topicnum).subscribe(function (data) { return console.log(data); });
        this.topicSvc.mockGetTopicInfo(this.topicnum).subscribe(function (data) { return _this.topic = data; });
        this.topicSvc.mockGetChoices(this.topicnum).subscribe(function (data) { return console.log(data); });
        this.topicSvc.mockGetChoices(this.topicnum).subscribe(function (data) { return _this.choices = data; });
        this.mockGetBullets(this.topicnum).subscribe(function (data) { return _this.bullets = data; });
        this.mockGetNotes(this.topicnum).subscribe(function (data) { return _this.notes = data; });
        this.mockGetBody(this.topicnum).subscribe(function (data) { return _this.body = data; });
        this.mockGetLinks(this.topicnum).subscribe(function (data) { return _this.links = data; });
        console.log('The topic retrieved was: ' + this.topic);
        console.log('The bullets retrieved was: ' + this.bullets);
    };
    TopicListPage.prototype.ionViewWillLoad = function () {
        this.topicnum = this.navParams.get('topicnum');
        if (this.topicnum) {
            console.log('Topic passed to page: ' + this.topicnum);
        }
        else {
            console.log('No topic passed to page. Topic set to zero by default.');
            this.topicnum = "0";
        }
        this.getTopicList();
        this.topiclink = this.topic.TopicLink;
        console.log(this.topiclink);
    };
    TopicListPage.prototype.ionViewDidEnter = function () {
        this.slides.autoplay = "4000";
        this.slides.startAutoplay();
        console.log('ionViewDidEnter TopicListPage');
    };
    TopicListPage.prototype.showNext = function (nexttopic) {
        console.log("Parameter passed: " + nexttopic);
        if (nexttopic != "") {
            console.log("The next topic to navigate to is " + nexttopic);
            this.navCtrl.push('TopicListPage', { topicnum: nexttopic });
        }
        ;
    };
    TopicListPage.prototype.showNotes = function (topicnum) {
        var myModalOptions = {
            enableBackdropDismiss: false
        };
        var modal = this.modalCtl.create('NotesPage', { topicnum: topicnum });
        modal.present();
    };
    TopicListPage.prototype.mockGetBullets = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_6__mocks_bullets_mocks__["a" /* BULLETS_LIST */].filter(function (bullet) { return bullet.TopicNum === topicnum; }));
    };
    TopicListPage.prototype.mockGetNotes = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_8__mocks_notes_mocks__["a" /* NOTES_LIST */].filter(function (note) { return note.TopicNum === topicnum; }));
    };
    TopicListPage.prototype.mockGetBody = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_7__mocks_body_mocks__["a" /* BODY_LIST */].filter(function (body) { return body.TopicNum === topicnum; }));
    };
    TopicListPage.prototype.mockGetLinks = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_9__mocks_links_mocks__["a" /* LINKS_LIST */].filter(function (links) { return links.TopicNum === topicnum; }));
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Slides */])
    ], TopicListPage.prototype, "slides", void 0);
    TopicListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-topic-list',template:/*ion-inline-start:"C:\WINDOWS\system32\ican\src\pages\topic-list\topic-list.html"*/'<ion-header>\n\n    <ion-navbar color=\'KPMG1\'>\n\n      <ion-title>\n\n          iCan\n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content >\n\n        <div id=\'iCanSubHeader\'>\n\n            {{topic.TopicTitle}} \n\n        </div>\n\n        <div id=\'iCanQAN\' *ngIf="topic.TopicType === \'Question\'">\n\n            Question\n\n        </div>\n\n        <div id=\'iCanQAN\' *ngIf="topic.TopicType === \'AnswerYes\' || topic.TopicType === \'AnswerNo\'">\n\n            Answer\n\n        </div>\n\n<!--         <div id=\'iCanBody\' *ngIf="topic.TopicText">\n\n            {{topic.TopicText}} \n\n        </div>\n\n        <div id=\'iCanBody\' *ngIf="topic.TopicText2">\n\n            {{topic.TopicText2}}\n\n        </div>\n\n --><!-- <!-- <!-- // This section places any body text onto the page that it found for this TopicNum from the BODY_LIST table -->\n\n        <div id=\'iCanBody\' *ngIf="body[0]">\n\n            <div *ngFor="let bod of body;let i = index">\n\n                {{bod.BodyText}} <br><br>\n\n            </div>\n\n        </div>\n\n        <div id=\'iCanBullet\' *ngIf="bullets[0]">\n\n            <ul>\n\n            <div *ngFor="let bullet of bullets;let i = index">\n\n                    <li>{{bullet.BulletText}}</li>\n\n            </div></ul>\n\n        </div>\n\n        <div id=\'iCanQAN\' *ngIf="notes[0]">\n\n                Note\n\n        </div>\n\n        <div id=\'iCanNote\' *ngIf="notes[0]">\n\n            <div *ngFor="let note of notes;let i = index">\n\n                    {{note.NoteText}}<br><br>\n\n            </div>\n\n        </div>\n\n       \n\n        <div *ngIf="links[0]">\n\n            <div *ngFor="let lnk of links;let i = index">\n\n                <ion-item text-wrap id=\'link\' href=\'lnk.LinkURL\'  \n\n                    onclick="window.open(lnk.LinkURL, \'_system\', \'location=yes\'); return false;">{{lnk.LinkLabel}}</ion-item>\n\n            </div>\n\n    \n\n        </div>\n\n        <div *ngIf="topic.TopicType === \'\' || topic.TopicType === \'Question\'; else istype">\n\n\n\n            <div *ngFor="let choice of choices;let i = index">\n\n                <button ion-item text-wrap detail-push color=\'KPMG4\' (click)="showNext(choice.NextTopic)">{{choice.ChoiceText}}\n\n                </button>\n\n            </div>\n\n        </div>\n\n\n\n<!-- // This section is for when there is a type eg. Notes, AnswerYes or AnswerNo in which case we don\'t want to  -->\n\n<!-- // present choices.  -->\n\n    <ng-template #istype>\n\n        <div id=\'icons\' *ngIf="topic.TopicType === \'AnswerYes\'">\n\n            \n\n            <ion-icon id=\'icons\' name="checkmark-circle" color=\'secondary\' active=\'true\'></ion-icon>\n\n            <br>\n\n        </div>\n\n        <div id=\'icons\' *ngIf="topic.TopicType === \'AnswerNo\'">\n\n            \n\n            <ion-icon id=\'icons\' name="close-circle" color=\'danger\' active=\'true\'></ion-icon>\n\n            <br>\n\n        </div>\n\n        <div padding>\n\n                <button ion-item text-wrap id=\'answer\' no-lines detail-push (click)=\'showNext(choices[0].NextTopic)\'>{{choices[0].ChoiceText}}</button>\n\n        </div>\n\n<!--         <ion-fab bottom center>\n\n            <button ion-fab>Options</button>\n\n            <ion-fab-list side="left">\n\n                <button ion-fab colour=\'primary\' (click)=\'showNext("0")\'>Top</button>\n\n                <button ion-fab colour=\'primary\' (click)=\'showNext(choices[0].NextTopic)\'>{{choices[0].ChoiceText}}</button>\n\n            </ion-fab-list>\n\n        </ion-fab>\n\n -->    </ng-template>\n\n    \n\n        <div id=\'withoutslider\' *ngIf="topic.TopicNum === \'0\'; else noslider">\n\n            <ion-slides>\n\n                <ion-slide></ion-slide>\n\n            </ion-slides>\n\n       </div>\n\n  <!--       <ion-slides pager=true autoplay="5000" loop="true" speed="500" (ionSlideAutoplay)=true autoplayDisableOnInteraction = "false">\n\n        <ion-slide >\n\n            <img src=\'../../assets/imgs/KPMG_RGB_cr.png\'>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <h1>Slider 2</h1>\n\n        </ion-slide>\n\n        <ion-slide>\n\n            <h1>Slider 3</h1>\n\n        </ion-slide>\n\n      </ion-slides>\n\n    </div>\n\n -->    <ng-template #noslider>\n\n            <div id=\'withoutslider\'>\n\n                <ion-slides>\n\n                    <ion-slide></ion-slide>\n\n                </ion-slides>\n\n            </div>\n\n        </ng-template>\n\n    </ion-content>\n\n  '/*ion-inline-end:"C:\WINDOWS\system32\ican\src\pages\topic-list\topic-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_topic_service_topic_service__["a" /* TopicServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]])
    ], TopicListPage);
    return TopicListPage;
}());

//# sourceMappingURL=topic-list.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BULLETS_LIST; });
var BulletsList = [
    { TopicNum: '2.1.4.2', BulletText: 'form a significant part of the internal control over financial reporting, or' },
    { TopicNum: '2.1.4.2', BulletText: 'generate information that is significant to the client’s accounting records or financial statements on which any KPMG member firm will express an opinion' },
    { TopicNum: '2.1.4.3', BulletText: 'the client acknowledges its responsibility for establishing and monitoring system of internal controls' },
    { TopicNum: '2.1.4.3', BulletText: 'the client assigns the responsibility to make all management decisions with respect to the design and implementation of  the hardware or software system to a competent employee, preferably within senior management' },
    { TopicNum: '2.1.4.3', BulletText: 'the client makes all management decisions with respect to the design and implementation process' },
    { TopicNum: '2.1.4.3', BulletText: 'the client evaluates the adequacy and results of the design and implementation of the system, and' },
    { TopicNum: '2.1.4.3', BulletText: 'the client is responsible for operating the system (hardware or software) and for the data it uses or generates' }
];
var BULLETS_LIST = BulletsList;
//# sourceMappingURL=bullets.mocks.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BODY_LIST; });
var BodyList = [
    { TopicNum: '2.1.1', BodyText: 'Can I…' },
    { TopicNum: '2.1.1', BodyText: 'assist management in understanding actuarial methods, models, assumptions, and other inputs used in computing financial statement amounts?' },
    { TopicNum: '2.1.1.1', BodyText: 'You can provide this service to an SEC audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.' },
    { TopicNum: '2.1.1.1', BodyText: 'There is a rebuttable presumption that such actuarial services are subject to audit procedures.' },
    { TopicNum: '2.1.1.2', BodyText: 'You can provide this service to an IESBA PIE audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that  the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.' },
    { TopicNum: '2.1.1.2', BodyText: 'There is a rebuttable presumption that such actuarial services are subject to audit procedures.' },
    { TopicNum: '2.1.1.3', BodyText: 'You can provide this service to an IESBA non-PIE audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.' },
    { TopicNum: '2.1.1.3', BodyText: 'There is a rebuttable presumption that such actuarial services are subject to audit procedures.' },
    { TopicNum: '2.1.2', BodyText: 'Can I…' },
    { TopicNum: '2.1.2.1', BodyText: 'You can provide this service to an SEC audit client.' },
    { TopicNum: '2.1.2.2', BodyText: 'You can provide this service to an IESBA PIE audit client.' },
    { TopicNum: '2.1.2.3', BodyText: 'You can provide this service to an IESBA non-PIE audit client.' },
    { TopicNum: '2.1.3', BodyText: 'Can I…' },
    { TopicNum: '2.1.3', BodyText: 'assist clients to estimate and assess the liabilities in the balance sheet, as well as identify trends in areas of concern?' },
    { TopicNum: '2.1.3.1', BodyText: 'You cannot provide this service to an SEC audit client.' },
    { TopicNum: '2.1.3.2', BodyText: 'You cannot provide this service to an IESBA PIE audit client.' },
    { TopicNum: '2.1.3.3', BodyText: 'You cannot provide this service to an IESBA non-PIE audit client.' },
    { TopicNum: '2.1.4', BodyText: 'Can I…' },
    { TopicNum: '2.1.4', BodyText: 'review and provide a conclusion on the reasonableness of the primary Actuary’s Actuarial Advice?' },
    { TopicNum: '2.1.4.1', BodyText: 'You can provide this service to an SEC audit client.' },
    { TopicNum: '2.1.4.2', BodyText: 'You can provide this service to an IESBA PIE audit client.' },
    { TopicNum: '2.1.4.3', BodyText: 'You can provide this service to an IESBA non-PIE audit client.' },
    { TopicNum: '2.2.1', BodyText: 'assist management to prioritize and sequence its selected solution into client actions (i.e. step 1, step 2, step 3)?' },
    { TopicNum: '2.2.1.1', BodyText: 'You cannot provide this service to an SEC audit client.' },
    { TopicNum: '2.2.1.2', BodyText: 'You can provide these services to an IESBA PIE audit client, however you cannot provide services involving the design or implementation of IT systems that:' },
    { TopicNum: '2.2.1.3', BodyText: 'You can provide these services to an IESBA non-PIE audit client, however you cannot provide these services unless:' },
    { TopicNum: '2.2.2', BodyText: 'Can I…' },
    { TopicNum: '2.2.2', BodyText: 'identify leading practices and provide KPMG’s interpretation of such practice, including market standard examples (e.g. accounting research, IFRS and industry leading practices)?' },
    { TopicNum: '2.2.2.1', BodyText: 'You can provide this service to an SEC audit client.' },
    { TopicNum: '2.2.2.2', BodyText: 'You can provide this service to an IESBA PIE audit client.' },
    { TopicNum: '2.2.2.3', BodyText: 'You can provide this service to an IESBA non-PIE audit client.' },
    { TopicNum: '2.2.3', BodyText: 'Can I…' },
    { TopicNum: '2.2.3', BodyText: 'benchmark data collected from third party sources and/or KPMG library of data to measure against current organization performance?' },
    { TopicNum: '2.2.3.1', BodyText: 'You can provide these services to an SEC audit client, as long as we do not make representations as to projected cost savings or benefits.' },
    { TopicNum: '2.2.3.1', BodyText: 'Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.3.1', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.3.1', BodyText: 'Services related to estimated potential cost or savings information may be prohibited for SEC audit clients and their affiliates when an audit team believes that it is likely that it will identify a going concern uncertainty as a significant audit risk and the potential cost or savings information comprises a significant part of the processes, systems, or controls that underlie the financial statements.' },
    { TopicNum: '2.2.3.1', BodyText: 'If these circumstances exist, consult with Risk Management.  Furthermore, cost estimates should not be delivered to third parties.' },
    { TopicNum: '2.2.3.2', BodyText: 'You can provide these services to an IESBA PIE audit client, as long as we do not make representations as to projected cost savings or benefits. Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.3.2', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.3.3', BodyText: 'You can provide these services to an IESBA non-PIE audit client, as long as we do not make representations as to projected cost savings or benefits.' },
    { TopicNum: '2.2.3.3', BodyText: 'Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.3.3', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.4', BodyText: 'Can I…' },
    { TopicNum: '2.2.4', BodyText: 'provide a cost analysis of various options under consideration by management based on knowledge of leading practice, third party data and the KPMG library of benchmarking information?' },
    { TopicNum: '2.2.4.1', BodyText: 'You can provide these services to an SEC audit client, as long as we do not make representations as to projected cost savings or benefits.' },
    { TopicNum: '2.2.4.1', BodyText: 'Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.4.1', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.4.1', BodyText: 'Services related to estimated potential cost or savings information may be prohibited for SEC audit clients and their affiliates when an audit team believes that it is likely that it will identify a going concern uncertainty as a significant audit risk and the potential cost or savings information comprises a significant part of the processes, systems, or controls that underlie the financial statements.' },
    { TopicNum: '2.2.4.1', BodyText: 'If these circumstances exist, consult with Risk Management. Furthermore, cost estimates should not be delivered to third parties.' },
    { TopicNum: '2.2.4.2', BodyText: 'You can provide these services to an IESBA PIE audit client, as long as we do not make representations as to projected cost savings or benefits.' },
    { TopicNum: '2.2.4.2', BodyText: 'Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.4.2', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.4.3', BodyText: 'You can provide these services to an IESBA non-PIE audit client, as long as we do not make representations as to projected cost savings or benefits.' },
    { TopicNum: '2.2.4.3', BodyText: 'Results should generally be described as “potential” cost savings or benefits and should be in the form of a range.' },
    { TopicNum: '2.2.4.3', BodyText: 'Cost data should only be provided on the understanding that KPMG does not guarantee that any impact will be realized and can be subject to change.' },
    { TopicNum: '2.2.5', BodyText: 'Can I…' },
    { TopicNum: '2.2.5', BodyText: 'assist management in documenting the current state and/or changes it has made to processes, systems, organizational structure, policy, or internal control over financial reporting, after they have been implemented?' },
];
var BODY_LIST = BodyList;
//# sourceMappingURL=body.mocks.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LINKS_LIST; });
var LinksList = [
    { TopicNum: '0', LinkLabel: 'QRM Manual - Audit Team Definition', LinkURL: 'www.google.com.au' },
    { TopicNum: '2.2.1.3', LinkLabel: 'QRM Manual - Audit Team Definition', LinkURL: 'www.google.com.au' },
    { TopicNum: '2.2.3.1', LinkLabel: 'Risk Management Contacts', LinkURL: 'www.google.com.au' },
    { TopicNum: '2.2.4.1', LinkLabel: 'Risk Management Contacts', LinkURL: 'www.google.com.au' },
];
var LINKS_LIST = LinksList;
//# sourceMappingURL=links.mocks.js.map

/***/ })

});
//# sourceMappingURL=0.js.map