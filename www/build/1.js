webpackJsonp([1],{

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPageModule", function() { return NotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notes__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotesPageModule = /** @class */ (function () {
    function NotesPageModule() {
    }
    NotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notes__["a" /* NotesPage */]),
            ],
        })
    ], NotesPageModule);
    return NotesPageModule;
}());

//# sourceMappingURL=notes.module.js.map

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

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_notes_mocks__ = __webpack_require__(281);
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
 * Generated class for the NotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NotesPage = /** @class */ (function () {
    function NotesPage(view, navCtrl, navParams) {
        this.view = view;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NotesPage.prototype.mockGetNotes = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_5__mocks_notes_mocks__["a" /* NOTES_LIST */].filter(function (note) { return note.TopicNum === topicnum; })[0]);
    };
    NotesPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.topicnum = this.navParams.get('topicnum');
        console.log('ionViewWillLoad NotesPage');
        console.log('topic num = ' + this.topicnum);
        this.mockGetNotes(this.topicnum).subscribe(function (data) { return _this.notes = data; });
    };
    NotesPage.prototype.closeModal = function () {
        this.view.dismiss();
    };
    NotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-notes',template:/*ion-inline-start:"C:\WINDOWS\system32\ican\src\pages\notes\notes.html"*/'<!--\n  Generated template for the NotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Notes Page</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  {{notes.Note1}}<br>\n  {{notes.Note2}}<br>\n  {{notes.Note3}}<br>\n  {{notes.Note4}}\n  \n</ion-content>\n'/*ion-inline-end:"C:\WINDOWS\system32\ican\src\pages\notes\notes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], NotesPage);
    return NotesPage;
}());

//# sourceMappingURL=notes.js.map

/***/ })

});
//# sourceMappingURL=1.js.map