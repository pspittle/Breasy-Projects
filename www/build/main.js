webpackJsonp([7],{

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contacts/contacts.module": [
		274,
		2
	],
	"../pages/info/info.module": [
		275,
		6
	],
	"../pages/intro/intro.module": [
		276,
		5
	],
	"../pages/notes/notes.module": [
		277,
		1
	],
	"../pages/splash/splash.module": [
		278,
		4
	],
	"../pages/tabs/tabs.module": [
		279,
		3
	],
	"../pages/topic-list/topic-list.module": [
		280,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopicServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mocks_topic_mocks__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mocks_choice_mocks__ = __webpack_require__(247);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { HttpClient } from '@angular/common/http';






/*
  Generated class for the TopicServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TopicServiceProvider = /** @class */ (function () {
    function TopicServiceProvider() {
        console.log('Hello TopicServiceProvider Provider');
    }
    /*
      Get the topics matching the passed topic number
    */
    TopicServiceProvider.prototype.mockGetTopicInfo = function (topicnum) {
        var _this = this;
        var result = __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_4__mocks_topic_mocks__["a" /* TOPIC_LIST */].filter(function (topic) { return topic.TopicNum === topicnum; })[0]);
        result.subscribe(function (data) { return _this.checktopic = data; });
        if (this.checktopic === undefined) {
            console.log("check topic returned undefined. Setting topic to 9999");
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_4__mocks_topic_mocks__["a" /* TOPIC_LIST */].filter(function (topic) { return topic.TopicNum === '9999'; })[0]);
        }
        else {
            console.log("found something" + this.checktopic.TopicNum);
            return result;
        }
        ;
    };
    TopicServiceProvider.prototype.mockGetChoices = function (topicnum) {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_5__mocks_choice_mocks__["a" /* CHOICE_LIST */].filter(function (topic) { return topic.TopicNum === topicnum; }));
    };
    TopicServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], TopicServiceProvider);
    return TopicServiceProvider;
}());

//# sourceMappingURL=topic-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_topic_service_topic_service__ = __webpack_require__(197);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contacts/contacts.module#ContactsPageModule', name: 'ContactsPage', segment: 'contacts', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notes/notes.module#NotesPageModule', name: 'NotesPage', segment: 'notes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/splash/splash.module#SplashPageModule', name: 'SplashPage', segment: 'splash', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/topic-list/topic-list.module#TopicListPageModule', name: 'TopicListPage', segment: 'topic-list', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_topic_service_topic_service__["a" /* TopicServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TOPIC_LIST; });
var TopicList = [
    { TopicNum: '0', TopicTitle: 'Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '1', TopicTitle: 'Accounting Advice and Assistance', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2', TopicTitle: 'Advisory', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '3', TopicTitle: 'Tax and Legal', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '4', TopicTitle: 'Technology', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1', TopicTitle: 'Actuarial Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2', TopicTitle: 'Current State Analysis', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.3', TopicTitle: 'Debt Advisory Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4', TopicTitle: 'Demographic Advisory Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5', TopicTitle: 'Executive Search and Selection', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6', TopicTitle: 'Forensic', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7', TopicTitle: 'Future State Design and Implementation', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8', TopicTitle: 'Investment Consulting', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9', TopicTitle: 'Mergers and Acquisitions', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10', TopicTitle: 'Monitoring', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.11', TopicTitle: 'Project Management', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12', TopicTitle: 'Resource Skills Assessment', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13', TopicTitle: 'Restructuring Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14', TopicTitle: 'Training and Communications', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15', TopicTitle: 'Valuations', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.1', TopicTitle: 'Actuarial Advisory', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.2', TopicTitle: 'Actuarial Financial Statement Support Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.3', TopicTitle: 'Appointed Actuary', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.4', TopicTitle: 'External Peer Review Actuary', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.1', TopicTitle: 'Actuarial Advisory', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.1.1', TopicTitle: 'Actuarial Advisory - SEC', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an SEC audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.', TopicText2: 'Provided (per PS 100) our report will be addressed to the auditor, there is written acceptance on appointment that copies of the report in its entirety will be provided to the Board, management and the Primary Actuary, and there is written acknowledgement on appointment that a copy of the report may be provided to APRA.', TopicLink: '' },
    { TopicNum: '2.1.1.2', TopicTitle: 'Actuarial Advisory - IESBA PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA PIE audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that  the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.1.3', TopicTitle: 'Actuarial Advisory - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA non-PIE audit client, however we are prohibited from providing actuarially-oriented advisory services involving the determination of amounts recorded in the financial statements and related accounts for all audit client (e.g. pensions, other retirement benefits, medical liabilities and insurance reserves), unless it is reasonable to conclude that the results of the services will not be subject to audit procedures during an audit of the client’s financial statements.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.2', TopicTitle: 'Actuarial Financial Statement Support Services', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.2.1', TopicTitle: 'Actuarial Financial Statement Support Services - SEC', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.2.2', TopicTitle: 'Actuarial Financial Statement Support Services - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.2.3', TopicTitle: 'Actuarial Financial Statement Support Services - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.3', TopicTitle: 'Appointed Actuary', TopicType: 'Question', TopicText: '', TopicText2: 'assist clients to estimate and assess the liabilities in the balance sheet, as well as identify trends in areas of concern?', TopicLink: '' },
    { TopicNum: '2.1.3.1', TopicTitle: 'Appointed Actuary - SEC', TopicType: 'AnswerNo', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.3.2', TopicTitle: 'Appointed Actuary - IESBA PIE', TopicType: 'AnswerNo', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.3.3', TopicTitle: 'Appointed Actuary - IESBA Non-PIE', TopicType: 'AnswerNo', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.4', TopicTitle: 'External Peer Review Actuary', TopicType: 'Question', TopicText: '', TopicText2: 'review and provide a conclusion on the reasonableness of the primary Actuary’s Actuarial Advice?', TopicLink: '' },
    { TopicNum: '2.1.4.1', TopicTitle: 'External Peer Review Actuary - SEC', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.4.2', TopicTitle: 'External Peer Review Actuary - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.1.4.3', TopicTitle: 'External Peer Review Actuary - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.1', TopicTitle: 'Activity Prioritization/Sequencing', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.1.1', TopicTitle: 'Activity Prioritization/Sequencing - SEC', TopicType: 'AnswerNo', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.1.2', TopicTitle: 'Activity Prioritization/Sequencing - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.1.3', TopicTitle: 'Activity Prioritization/Sequencing - IESBA non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.2', TopicTitle: 'Advice on Leading Practices', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.2.1', TopicTitle: 'Advice on Leading Practices - SEC', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.2.2', TopicTitle: 'Advice on Leading Practices - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.2.3', TopicTitle: 'Advice on Leading Practices - IESBA non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.3', TopicTitle: 'Benchmarking', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.3.1', TopicTitle: 'Benchmarking - SEC', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.3.2', TopicTitle: 'Benchmarking - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.3.3', TopicTitle: 'Benchmarking - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.4', TopicTitle: 'Cost Analysis', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.4.1', TopicTitle: 'Cost Analysis - SEC', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.4.2', TopicTitle: 'Cost Analysis - IESBA PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.4.3', TopicTitle: 'Cost Analysis - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.5', TopicTitle: 'Document Current State', TopicType: 'Question', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.5.1', TopicTitle: 'Document Current State - SEC', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an SEC audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.5.2', TopicTitle: 'Document Current State - IESBA PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.5.3', TopicTitle: 'Document Current State - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA non-PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.6', TopicTitle: 'Facilitate Assessment Workshops', TopicType: 'Question', TopicText: 'Can I…', TopicText2: 'assist management in documenting the current state and/or changes it has made to processes, systems, organizational structure, policy, or internal control over financial reporting, after they have been implemented?', TopicLink: '' },
    { TopicNum: '2.2.6.1', TopicTitle: 'Facilitate Assessment Workshops - SEC', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an SEC audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.6.2', TopicTitle: 'Facilitate Assessment Workshops - IESBA PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.6.3', TopicTitle: 'Facilitate Assessment Workshops - IESBA Non-PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA non-PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.7', TopicTitle: 'Gap Analysis', TopicType: 'Question', TopicText: 'Can I…', TopicText2: 'perform a gap analysis of the current state of a process, system, organizational structure, policy, internal control over financial reporting, etc against leading practices or other sources (such as client defined future state, accounting or regulatory standard), and provide our advice and recommendations?', TopicLink: '' },
    { TopicNum: '2.2.7.1', TopicTitle: 'Gap Analysis - SEC', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an SEC audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.7.2', TopicTitle: 'Gap Analysis - IESBA PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.7.3', TopicTitle: 'Gap Analysis - IESBA non-PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA non-PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.8', TopicTitle: 'Gap Prioritization/Opportunity Matrix', TopicType: 'Question', TopicText: 'Can I…', TopicText2: 'as a continuation of the gap analysis, provide our comments regarding the general priority of any gaps/recommendations for action (i.e. high, medium, and low) in a deliverable (e.g. opportunity matrix)?', TopicLink: '' },
    { TopicNum: '2.2.8.1', TopicTitle: 'Gap Prioritization/Opportunity Matrix - SEC', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an SEC audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.8.2', TopicTitle: 'Gap Prioritization/Opportunity Matrix - IESBA PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.2.8.3', TopicTitle: 'Gap Prioritization/Opportunity Matrix - IESBA non-PIE', TopicType: 'AnswerYes', TopicText: 'You can provide this service to an IESBA non-PIE audit client.', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.3.1', TopicTitle: 'Debt Advisory Services', TopicType: 'Question', TopicText: 'Can I…', TopicText2: 'provide advice to clients on capital management and structuring, funding options and alternatives, refinancing strategy and procurement and credit rating evaluation?', TopicLink: '' },
    { TopicNum: '2.3.1.1', TopicTitle: 'Debt Advisory Services - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.3.1.2', TopicTitle: 'Debt Advisory Services - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.3.1.3', TopicTitle: 'Debt Advisory Services - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.1', TopicTitle: 'Prepare Market Research Studies', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.1.1', TopicTitle: 'Prepare Market Research Studies - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.1.2', TopicTitle: 'Prepare Market Research Studies - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.1.3', TopicTitle: 'Prepare Market Research Studies - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.2', TopicTitle: 'Provide Conclusions on Market Research Studies', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.2.1', TopicTitle: 'Provide Conclusions on Market Research Studies - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.2.2', TopicTitle: 'Provide Conclusions on Market Research Studies - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.4.2.3', TopicTitle: 'Provide Conclusions on Market Research Studies - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.1', TopicTitle: 'Identify Executives', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.1.1', TopicTitle: 'Identify Executives - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.1.2', TopicTitle: 'Identify Executives - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.1.3', TopicTitle: 'Identify Executives - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.2', TopicTitle: 'Review Applications/Interview Candidates', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.2.1', TopicTitle: 'Review Applications/Interview Candidates - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.2.2', TopicTitle: 'Review Applications/Interview Candidates - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.2.3', TopicTitle: 'Review Applications/Interview Candidates - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.3', TopicTitle: 'Executive Remuneration', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.3.1', TopicTitle: 'Executive Remuneration - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.3.2', TopicTitle: 'Executive Remuneration - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.5.3.3', TopicTitle: 'Executive Remuneration - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.1', TopicTitle: 'Audit Support Services', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.1.1', TopicTitle: 'Audit Support Services - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.1.2', TopicTitle: 'Audit Support Services - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.1.3', TopicTitle: 'Audit Support Services - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.2', TopicTitle: 'Investigations', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.2.1', TopicTitle: 'Investigations - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.2.2', TopicTitle: 'Investigations - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.2.3', TopicTitle: 'Investigations - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.3', TopicTitle: 'Pre-Employment Screening', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.3.1', TopicTitle: 'Pre-Employment Screening - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.3.2', TopicTitle: 'Pre-Employment Screening - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.3.3', TopicTitle: 'Pre-Employment Screening - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.4', TopicTitle: 'Corporate Intelligence – for an audit client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.4.1', TopicTitle: 'Corporate Intelligence – for an audit client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.4.2', TopicTitle: 'Corporate Intelligence – for an audit client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.4.3', TopicTitle: 'Corporate Intelligence – for an audit client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.5', TopicTitle: 'Corporate Intelligence – subject of service is an audit client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.5.1', TopicTitle: 'Corporate Intelligence – subject of service is an audit client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.5.2', TopicTitle: 'Corporate Intelligence – subject of service is an audit client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.5.3', TopicTitle: 'Corporate Intelligence – subject of service is an audit client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.6', TopicTitle: 'Forensic Technology - Electronically Stored Information', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.6.1', TopicTitle: 'Forensic Technology - Electronically Stored Information - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.6.2', TopicTitle: 'Forensic Technology - Electronically Stored Information - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.6.3', TopicTitle: 'Forensic Technology - Electronically Stored Information - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.7', TopicTitle: 'Forensic Technology – Exercising Professional Judgment', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.7.1', TopicTitle: 'Forensic Technology – Exercising Professional Judgment - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.7.2', TopicTitle: 'Forensic Technology – Exercising Professional Judgment - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.7.3', TopicTitle: 'Forensic Technology – Exercising Professional Judgment - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.8', TopicTitle: 'Forensic Technology – Expert Support', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.8.1', TopicTitle: 'Forensic Technology – Expert Support - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.8.2', TopicTitle: 'Forensic Technology – Expert Support - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.8.3', TopicTitle: 'Forensic Technology – Expert Support - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.9', TopicTitle: 'Forensic Technology - Data Analysis', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.9.1', TopicTitle: 'Forensic Technology - Data Analysis - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.9.2', TopicTitle: 'Forensic Technology - Data Analysis - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.9.3', TopicTitle: 'Forensic Technology - Data Analysis - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.10', TopicTitle: 'Dispute Advisory Services - Consulting Expert', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.10.1', TopicTitle: 'Dispute Advisory Services - Consulting Expert - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.10.2', TopicTitle: 'Dispute Advisory Services - Consulting Expert - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.10.3', TopicTitle: 'Dispute Advisory Services - Consulting Expert - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.11', TopicTitle: 'Dispute Advisory Services – Agreement Advice', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.11.1', TopicTitle: 'Dispute Advisory Services – Agreement Advice - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.11.2', TopicTitle: 'Dispute Advisory Services – Agreement Advice - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.11.3', TopicTitle: 'Dispute Advisory Services – Agreement Advice - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.12', TopicTitle: 'Dispute Advisory Services - Expert Witness', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.12.1', TopicTitle: 'Dispute Advisory Services - Expert Witness - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.12.2', TopicTitle: 'Dispute Advisory Services - Expert Witness - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.12.3', TopicTitle: 'Dispute Advisory Services - Expert Witness - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.13', TopicTitle: 'Dispute Advisory Services - Arbitrator, Mediator or Independent Expert', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.13.1', TopicTitle: 'Dispute Advisory Services - Arbitrator, Mediator or Independent Expert - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.13.2', TopicTitle: 'Dispute Advisory Services - Arbitrator, Mediator or Independent Expert - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.6.13.3', TopicTitle: 'Dispute Advisory Services - Arbitrator, Mediator or Independent Expert - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.1', TopicTitle: 'Generic Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.1.1', TopicTitle: 'Generic Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.1.2', TopicTitle: 'Generic Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.1.3', TopicTitle: 'Generic Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.2', TopicTitle: 'Review Client Prepared Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.2.1', TopicTitle: 'Review Client Prepared Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.2.2', TopicTitle: 'Review Client Prepared Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.2.3', TopicTitle: 'Review Client Prepared Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.3', TopicTitle: 'Financial Related Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.3.1', TopicTitle: 'Financial Related Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.3.2', TopicTitle: 'Financial Related Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.3.3', TopicTitle: 'Financial Related Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.4', TopicTitle: 'Risk Mangement Related Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.4.1', TopicTitle: 'Risk Mangement Related Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.4.2', TopicTitle: 'Risk Mangement Related Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.4.3', TopicTitle: 'Risk Mangement Related Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.5', TopicTitle: 'Non-Financial and Non-Risk Management Related Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.5.1', TopicTitle: 'Non-Financial and Non-Risk Management Related Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.5.2', TopicTitle: 'Non-Financial and Non-Risk Management Related Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.5.3', TopicTitle: 'Non-Financial and Non-Risk Management Related Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.6', TopicTitle: 'Document Future State Design Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.6.1', TopicTitle: 'Document Future State Design Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.6.2', TopicTitle: 'Document Future State Design Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.6.3', TopicTitle: 'Document Future State Design Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.7', TopicTitle: 'Implement Third Party Designed Financial System', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.7.1', TopicTitle: 'Implement Third Party Designed Financial System - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.7.2', TopicTitle: 'Implement Third Party Designed Financial System - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.7.3', TopicTitle: 'Implement Third Party Designed Financial System - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.8', TopicTitle: 'Technical Practice Aids', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.8.1', TopicTitle: 'Technical Practice Aids - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.8.2', TopicTitle: 'Technical Practice Aids - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.8.3', TopicTitle: 'Technical Practice Aids - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.9', TopicTitle: 'Prospective Financial Information', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.9.1', TopicTitle: 'Prospective Financial Information - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.9.2', TopicTitle: 'Prospective Financial Information - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.9.3', TopicTitle: 'Prospective Financial Information - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.10', TopicTitle: 'Facilitate Design/Implementation workshops', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.10.1', TopicTitle: 'Facilitate Design/Implementation workshops - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.10.2', TopicTitle: 'Facilitate Design/Implementation workshops - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.10.3', TopicTitle: 'Facilitate Design/Implementation workshops - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.11', TopicTitle: 'Attend Design/Implementation Workshops', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.11.1', TopicTitle: 'Attend Design/Implementation Workshops - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.11.2', TopicTitle: 'Attend Design/Implementation Workshops - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.7.11.3', TopicTitle: 'Attend Design/Implementation Workshops - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.1', TopicTitle: 'Dispute Advisory', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.1.1', TopicTitle: 'Dispute Advisory - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.1.2', TopicTitle: 'Dispute Advisory - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.1.3', TopicTitle: 'Dispute Advisory - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.2', TopicTitle: 'Investment Strategies', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.2.1', TopicTitle: 'Investment Strategies - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.2.2', TopicTitle: 'Investment Strategies - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.8.2.3', TopicTitle: 'Investment Strategies - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.1', TopicTitle: 'Acquisition  Advisory', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.1.1', TopicTitle: 'Acquisition  Advisory - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.1.2', TopicTitle: 'Acquisition  Advisory - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.1.3', TopicTitle: 'Acquisition  Advisory - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.2', TopicTitle: 'Capital Markets', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.2.1', TopicTitle: 'Capital Markets - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.2.2', TopicTitle: 'Capital Markets - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.2.3', TopicTitle: 'Capital Markets - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.3', TopicTitle: 'Divestment Advisory', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.3.1', TopicTitle: 'Divestment Advisory - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.3.2', TopicTitle: 'Divestment Advisory - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.9.3.3', TopicTitle: 'Divestment Advisory - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.1', TopicTitle: 'Facilitate Lessons Learned Workshops', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.1.1', TopicTitle: 'Facilitate Lessons Learned Workshops - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.1.2', TopicTitle: 'Facilitate Lessons Learned Workshops - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.1.3', TopicTitle: 'Facilitate Lessons Learned Workshops - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.2', TopicTitle: 'Ongoing monitoring', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.2.1', TopicTitle: 'Ongoing monitoring - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.2.2', TopicTitle: 'Ongoing monitoring - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.2.3', TopicTitle: 'Ongoing monitoring - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.3', TopicTitle: 'Post Design/Implementation Review', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.3.1', TopicTitle: 'Post Design/Implementation Review - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.3.2', TopicTitle: 'Post Design/Implementation Review - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.3.3', TopicTitle: 'Post Design/Implementation Review - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.4', TopicTitle: 'Review Planned Monitoring Process', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.4.1', TopicTitle: 'Review Planned Monitoring Process - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.4.2', TopicTitle: 'Review Planned Monitoring Process - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.10.4.3', TopicTitle: 'Review Planned Monitoring Process - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.11.1', TopicTitle: 'Project Management', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.11.1.1', TopicTitle: 'Project Management - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.11.1.2', TopicTitle: 'Project Management - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.11.1.3', TopicTitle: 'Project Management - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.1', TopicTitle: 'Advice on Leading Practices', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.1.1', TopicTitle: 'Advice on Leading Practices - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.1.2', TopicTitle: 'Advice on Leading Practices - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.1.3', TopicTitle: 'Advice on Leading Practices - IESBA non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.2', TopicTitle: 'General Advice', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.2.1', TopicTitle: 'General Advice - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.2.2', TopicTitle: 'General Advice - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.12.2.3', TopicTitle: 'General Advice - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.1', TopicTitle: 'Insolvency – creditor is an audit client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.1.1', TopicTitle: 'Insolvency – creditor is an audit client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.1.2', TopicTitle: 'Insolvency – creditor is an audit client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.1.3', TopicTitle: 'Insolvency – creditor is an audit client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.2', TopicTitle: 'Insolvency – insolvent entity is an audit client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.2.1', TopicTitle: 'Insolvency – insolvent entity is an audit client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.2.2', TopicTitle: 'Insolvency – insolvent entity is an audit client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.2.3', TopicTitle: 'Insolvency – insolvent entity is an audit client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.3', TopicTitle: 'Members Voluntary Liquidation (MVL)', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.3.1', TopicTitle: 'Members Voluntary Liquidation (MVL) - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.3.2', TopicTitle: 'Members Voluntary Liquidation (MVL) - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.13.3.3', TopicTitle: 'Members Voluntary Liquidation (MVL) - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.1', TopicTitle: 'Communications Plans Design/ Implementation', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.1.1', TopicTitle: 'Communications Plans Design/ Implementation - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.1.2', TopicTitle: 'Communications Plans Design/ Implementation - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.1.3', TopicTitle: 'Communications Plans Design/ Implementation - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.2', TopicTitle: 'Conduct General/Industry training Sessions', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.2.1', TopicTitle: 'Conduct General/Industry training Sessions - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.2.2', TopicTitle: 'Conduct General/Industry training Sessions - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.2.3', TopicTitle: 'Conduct General/Industry training Sessions - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.3', TopicTitle: 'Observations and Recommendations on Communications Plans', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.3.1', TopicTitle: 'Observations and Recommendations on Communications Plans - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.3.2', TopicTitle: 'Observations and Recommendations on Communications Plans - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.3.3', TopicTitle: 'Observations and Recommendations on Communications Plans - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.4', TopicTitle: 'Participate in Client Led Communications', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.4.1', TopicTitle: 'Participate in Client Led Communications - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.4.2', TopicTitle: 'Participate in Client Led Communications - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.4.3', TopicTitle: 'Participate in Client Led Communications - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.5', TopicTitle: 'Present Communications on Behalf of Client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.5.1', TopicTitle: 'Present Communications on Behalf of Client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.5.2', TopicTitle: 'Present Communications on Behalf of Client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.5.3', TopicTitle: 'Present Communications on Behalf of Client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.6', TopicTitle: 'Provide Financial Related Tailored Training', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.6.1', TopicTitle: 'Provide Financial Related Tailored Training - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.6.2', TopicTitle: 'Provide Financial Related Tailored Training - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.6.3', TopicTitle: 'Provide Financial Related Tailored Training - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.7', TopicTitle: 'Provide General Training Materials', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.7.1', TopicTitle: 'Provide General Training Materials - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.7.2', TopicTitle: 'Provide General Training Materials - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.7.3', TopicTitle: 'Provide General Training Materials - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.8', TopicTitle: 'Provide Non-Financial and Non-Risk Management Related Tailored Training', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.8.1', TopicTitle: 'Provide Non-Financial and Non-Risk Management Related Tailored Training - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.8.2', TopicTitle: 'Provide Non-Financial and Non-Risk Management Related Tailored Training - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.8.3', TopicTitle: 'Provide Non-Financial and Non-Risk Management Related Tailored Training - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.9', TopicTitle: 'Provide Risk Management Related Tailored Training', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.9.1', TopicTitle: 'Provide Risk Management Related Tailored Training - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.9.2', TopicTitle: 'Provide Risk Management Related Tailored Training - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.9.3', TopicTitle: 'Provide Risk Management Related Tailored Training - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.10', TopicTitle: 'Review Client Developed Tailored Training', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.10.1', TopicTitle: 'Review Client Developed Tailored Training - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.10.2', TopicTitle: 'Review Client Developed Tailored Training - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.14.10.3', TopicTitle: 'Review Client Developed Tailored Training - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.1', TopicTitle: 'Audit support role', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.1.1', TopicTitle: 'Audit support role - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.1.2', TopicTitle: 'Audit support role - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.1.3', TopicTitle: 'Audit support role - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.2', TopicTitle: 'Independent Expert Report', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.2.1', TopicTitle: 'Independent Expert Report - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.2.2', TopicTitle: 'Independent Expert Report - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.2.3', TopicTitle: 'Independent Expert Report - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.3', TopicTitle: 'Private Environment', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.3.1', TopicTitle: 'Private Environment - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.3.2', TopicTitle: 'Private Environment - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.3.3', TopicTitle: 'Private Environment - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.4', TopicTitle: 'Relying on the work of an audit client', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.4.1', TopicTitle: 'Relying on the work of an audit client - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.4.2', TopicTitle: 'Relying on the work of an audit client - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.4.3', TopicTitle: 'Relying on the work of an audit client - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.5', TopicTitle: 'Valuation services for accounting purposes', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.5.1', TopicTitle: 'Valuation services for accounting purposes - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.5.2', TopicTitle: 'Valuation services for accounting purposes - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.5.3', TopicTitle: 'Valuation services for accounting purposes - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.6', TopicTitle: 'Valuations for tax purposes', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.6.1', TopicTitle: 'Valuations for tax purposes - SEC', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.6.2', TopicTitle: 'Valuations for tax purposes - IESBA PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    { TopicNum: '2.15.6.3', TopicTitle: 'Valuations for tax purposes - IESBA Non-PIE', TopicType: '', TopicText: '', TopicText2: '', TopicLink: '' },
    {
        TopicNum: "9999",
        TopicType: '',
        TopicText: 'That topic has not yet been entered into iCan. Please contact the system administrator.',
        TopicText2: '',
        TopicTitle: 'Error - Topic Not Found',
        TopicLink: ''
    }
];
var TOPIC_LIST = TopicList;
//# sourceMappingURL=topic.mocks.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHOICE_LIST; });
var ChoiceList = [
    { TopicNum: '0', ChoiceText: 'Accounting Advice and Assistance', NextTopic: '1' },
    { TopicNum: '0', ChoiceText: 'Advisory', NextTopic: '2' },
    { TopicNum: '0', ChoiceText: 'Tax and Legal', NextTopic: '3' },
    { TopicNum: '0', ChoiceText: 'Technology', NextTopic: '4' },
    { TopicNum: '2', ChoiceText: 'Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2', ChoiceText: 'Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2', ChoiceText: 'Debt Advisory Services', NextTopic: '2.3' },
    { TopicNum: '2', ChoiceText: 'Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2', ChoiceText: 'Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2', ChoiceText: 'Forensic', NextTopic: '2.6' },
    { TopicNum: '2', ChoiceText: 'Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2', ChoiceText: 'Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2', ChoiceText: 'Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2', ChoiceText: 'Monitoring', NextTopic: '2.10' },
    { TopicNum: '2', ChoiceText: 'Project Management', NextTopic: '2.11' },
    { TopicNum: '2', ChoiceText: 'Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2', ChoiceText: 'Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2', ChoiceText: 'Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2', ChoiceText: 'Valuations', NextTopic: '2.15' },
    { TopicNum: '2.1', ChoiceText: 'Appointed Actuary', NextTopic: '2.1.1' },
    { TopicNum: '2.1', ChoiceText: 'External Peer Review Actuary', NextTopic: '2.1.2' },
    { TopicNum: '2.1', ChoiceText: 'Actuarial Advisory', NextTopic: '2.1.3' },
    { TopicNum: '2.1', ChoiceText: 'Actuarial Financial Statement Support Services', NextTopic: '2.1.4' },
    { TopicNum: '2.2', ChoiceText: 'Activity Prioritization/Sequencing', NextTopic: '2.2.1' },
    { TopicNum: '2.2', ChoiceText: 'Advice on Leading Practices', NextTopic: '2.2.2' },
    { TopicNum: '2.2', ChoiceText: 'Benchmarking', NextTopic: '2.2.3' },
    { TopicNum: '2.2', ChoiceText: 'Cost Analysis', NextTopic: '2.2.4' },
    { TopicNum: '2.2', ChoiceText: 'Document Current State', NextTopic: '2.2.5' },
    { TopicNum: '2.2', ChoiceText: 'Facilitate Assessment Workshops', NextTopic: '2.2.6' },
    { TopicNum: '2.2', ChoiceText: 'Gap Analysis', NextTopic: '2.2.7' },
    { TopicNum: '2.2', ChoiceText: 'Gap Prioritization/Opportunity Matrix', NextTopic: '2.2.8' },
    { TopicNum: '2.4', ChoiceText: 'Prepare Market Research Studies', NextTopic: '2.4.1' },
    { TopicNum: '2.4', ChoiceText: 'Provide Conclusions on Market Research Studies', NextTopic: '2.4.2' },
    { TopicNum: '2.5', ChoiceText: 'Identify Executives', NextTopic: '2.5.1' },
    { TopicNum: '2.5', ChoiceText: 'Review Applications/Interview Candidates', NextTopic: '2.5.2' },
    { TopicNum: '2.5', ChoiceText: 'Executive Remuneration', NextTopic: '2.5.3' },
    { TopicNum: '2.6', ChoiceText: 'Audit Support Services', NextTopic: '2.6.1' },
    { TopicNum: '2.6', ChoiceText: 'Investigations', NextTopic: '2.6.2' },
    { TopicNum: '2.6', ChoiceText: 'Pre-Employment Screening', NextTopic: '2.6.3' },
    { TopicNum: '2.6', ChoiceText: 'Corporate Intelligence – for an audit client', NextTopic: '2.6.4' },
    { TopicNum: '2.6', ChoiceText: 'Corporate Intelligence – subject of service is an audit client', NextTopic: '2.6.5' },
    { TopicNum: '2.6', ChoiceText: 'Forensic Technology - Electronically Stored Information', NextTopic: '2.6.6' },
    { TopicNum: '2.6', ChoiceText: 'Forensic Technology – Exercising Professional Judgment', NextTopic: '2.6.7' },
    { TopicNum: '2.6', ChoiceText: 'Forensic Technology – Expert Support', NextTopic: '2.6.8' },
    { TopicNum: '2.6', ChoiceText: 'Forensic Technology - Data Analysis', NextTopic: '2.6.9' },
    { TopicNum: '2.6', ChoiceText: 'Dispute Advisory Services - Consulting Expert', NextTopic: '2.6.10' },
    { TopicNum: '2.6', ChoiceText: 'Dispute Advisory Services – Agreement Advice', NextTopic: '2.6.11' },
    { TopicNum: '2.6', ChoiceText: 'Dispute Advisory Services - Expert Witness', NextTopic: '2.6.12' },
    { TopicNum: '2.6', ChoiceText: 'Dispute Advisory Services - Arbitrator, Mediator or Independent Expert', NextTopic: '2.6.13' },
    { TopicNum: '2.7', ChoiceText: 'Attend Design/Implementation Workshops', NextTopic: '2.7.1' },
    { TopicNum: '2.7', ChoiceText: 'Document Future State Design Plans', NextTopic: '2.7.2' },
    { TopicNum: '2.7', ChoiceText: 'Facilitate Design/Implementation workshops', NextTopic: '2.7.3' },
    { TopicNum: '2.7', ChoiceText: 'Financial Related Design Plans', NextTopic: '2.7.4' },
    { TopicNum: '2.7', ChoiceText: 'Generic Design Plans', NextTopic: '2.7.5' },
    { TopicNum: '2.7', ChoiceText: 'Implement Third Party Designed Financial System', NextTopic: '2.7.6' },
    { TopicNum: '2.7', ChoiceText: 'Non-Financial and Non-Risk Management Related Design Plans', NextTopic: '2.7.7' },
    { TopicNum: '2.7', ChoiceText: 'Prospective Financial Information', NextTopic: '2.7.8' },
    { TopicNum: '2.7', ChoiceText: 'Review Client Prepared Design Plans', NextTopic: '2.7.9' },
    { TopicNum: '2.7', ChoiceText: 'Risk Mangement Related Design Plans', NextTopic: '2.7.10' },
    { TopicNum: '2.7', ChoiceText: 'Technical Practice Aids', NextTopic: '2.7.11' },
    { TopicNum: '2.8', ChoiceText: 'Investment Strategies', NextTopic: '2.8.1' },
    { TopicNum: '2.8', ChoiceText: 'Dispute Advisory', NextTopic: '2.8.2' },
    { TopicNum: '2.9', ChoiceText: 'Acquisition  Advisory', NextTopic: '2.9.1' },
    { TopicNum: '2.9', ChoiceText: 'Divestment Advisory', NextTopic: '2.9.2' },
    { TopicNum: '2.9', ChoiceText: 'Capital Markets', NextTopic: '2.9.3' },
    { TopicNum: '2.1', ChoiceText: 'Facilitate Lessons Learned Workshops', NextTopic: '2.10.1' },
    { TopicNum: '2.1', ChoiceText: 'Ongoing monitoring', NextTopic: '2.10.2' },
    { TopicNum: '2.1', ChoiceText: 'Post Design/Implementation Review', NextTopic: '2.10.3' },
    { TopicNum: '2.1', ChoiceText: 'Review Planned Monitoring Process', NextTopic: '2.10.4' },
    { TopicNum: '2.12', ChoiceText: 'General Advice', NextTopic: '2.12.1' },
    { TopicNum: '2.12', ChoiceText: 'Advice on Leading Practices', NextTopic: '2.12.2' },
    { TopicNum: '2.13', ChoiceText: 'Insolvency – insolvent entity is an audit client', NextTopic: '2.13.1' },
    { TopicNum: '2.13', ChoiceText: 'Insolvency – creditor is an audit client', NextTopic: '2.13.2' },
    { TopicNum: '2.13', ChoiceText: 'Members Voluntary Liquidation (MVL)', NextTopic: '2.13.3' },
    { TopicNum: '2.14', ChoiceText: 'Conduct General/Industry training Sessions', NextTopic: '2.14.1' },
    { TopicNum: '2.14', ChoiceText: 'Provide General Training Materials', NextTopic: '2.14.2' },
    { TopicNum: '2.14', ChoiceText: 'Provide Financial Related Tailored Training', NextTopic: '2.14.3' },
    { TopicNum: '2.14', ChoiceText: 'Provide Risk Management Related Tailored Training', NextTopic: '2.14.4' },
    { TopicNum: '2.14', ChoiceText: 'Provide Non-Financial and Non-Risk Management Related Tailored Training', NextTopic: '2.14.5' },
    { TopicNum: '2.14', ChoiceText: 'Review Client Developed Tailored Training', NextTopic: '2.14.6' },
    { TopicNum: '2.14', ChoiceText: 'Communications Plans Design/ Implementation', NextTopic: '2.14.7' },
    { TopicNum: '2.14', ChoiceText: 'Observations and Recommendations on Communications Plans', NextTopic: '2.14.8' },
    { TopicNum: '2.14', ChoiceText: 'Present Communications on Behalf of Client', NextTopic: '2.14.9' },
    { TopicNum: '2.14', ChoiceText: 'Participate in Client Led Communications', NextTopic: '2.14.10' },
    { TopicNum: '2.15', ChoiceText: 'Private Environment', NextTopic: '2.15.1' },
    { TopicNum: '2.15', ChoiceText: 'Valuation services for accounting purposes', NextTopic: '2.15.2' },
    { TopicNum: '2.15', ChoiceText: 'Audit support role', NextTopic: '2.15.3' },
    { TopicNum: '2.15', ChoiceText: 'Valuations for tax purposes', NextTopic: '2.15.4' },
    { TopicNum: '2.15', ChoiceText: 'Independent Expert Report', NextTopic: '2.15.5' },
    { TopicNum: '2.15', ChoiceText: 'Relying on the work of an audit client', NextTopic: '2.15.6' },
    { TopicNum: '2.1.1', ChoiceText: 'SEC', NextTopic: '2.1.1.1' },
    { TopicNum: '2.1.1', ChoiceText: 'IESBA PIE', NextTopic: '2.1.1.2' },
    { TopicNum: '2.1.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.1.3' },
    { TopicNum: '2.1.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.1.2', ChoiceText: 'SEC', NextTopic: '2.1.2.1' },
    { TopicNum: '2.1.2', ChoiceText: 'IESBA PIE', NextTopic: '2.1.2.2' },
    { TopicNum: '2.1.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.2.3' },
    { TopicNum: '2.1.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.1.3', ChoiceText: 'SEC', NextTopic: '2.1.3.1' },
    { TopicNum: '2.1.3', ChoiceText: 'IESBA PIE', NextTopic: '2.1.3.2' },
    { TopicNum: '2.1.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.3.3' },
    { TopicNum: '2.1.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.1.4', ChoiceText: 'SEC', NextTopic: '2.1.4.1' },
    { TopicNum: '2.1.4', ChoiceText: 'IESBA PIE', NextTopic: '2.1.4.2' },
    { TopicNum: '2.1.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.1.4.3' },
    { TopicNum: '2.1.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.1', ChoiceText: 'SEC', NextTopic: '2.2.1.1' },
    { TopicNum: '2.2.1', ChoiceText: 'IESBA PIE', NextTopic: '2.2.1.2' },
    { TopicNum: '2.2.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.1.3' },
    { TopicNum: '2.2.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.2', ChoiceText: 'SEC', NextTopic: '2.2.2.1' },
    { TopicNum: '2.2.2', ChoiceText: 'IESBA PIE', NextTopic: '2.2.2.2' },
    { TopicNum: '2.2.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.2.3' },
    { TopicNum: '2.2.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.3', ChoiceText: 'SEC', NextTopic: '2.2.3.1' },
    { TopicNum: '2.2.3', ChoiceText: 'IESBA PIE', NextTopic: '2.2.3.2' },
    { TopicNum: '2.2.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.3.3' },
    { TopicNum: '2.2.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.4', ChoiceText: 'SEC', NextTopic: '2.2.4.1' },
    { TopicNum: '2.2.4', ChoiceText: 'IESBA PIE', NextTopic: '2.2.4.2' },
    { TopicNum: '2.2.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.4.3' },
    { TopicNum: '2.2.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.5', ChoiceText: 'SEC', NextTopic: '2.2.5.1' },
    { TopicNum: '2.2.5', ChoiceText: 'IESBA PIE', NextTopic: '2.2.5.2' },
    { TopicNum: '2.2.5', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.5.3' },
    { TopicNum: '2.2.5', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.6', ChoiceText: 'SEC', NextTopic: '2.2.6.1' },
    { TopicNum: '2.2.6', ChoiceText: 'IESBA PIE', NextTopic: '2.2.6.2' },
    { TopicNum: '2.2.6', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.6.3' },
    { TopicNum: '2.2.6', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.7', ChoiceText: 'SEC', NextTopic: '2.2.7.1' },
    { TopicNum: '2.2.7', ChoiceText: 'IESBA PIE', NextTopic: '2.2.7.2' },
    { TopicNum: '2.2.7', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.7.3' },
    { TopicNum: '2.2.7', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.2.8', ChoiceText: 'SEC', NextTopic: '2.2.8.1' },
    { TopicNum: '2.2.8', ChoiceText: 'IESBA PIE', NextTopic: '2.2.8.2' },
    { TopicNum: '2.2.8', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.2.8.3' },
    { TopicNum: '2.2.8', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.3.1', ChoiceText: 'SEC', NextTopic: '2.3.1.1' },
    { TopicNum: '2.3.1', ChoiceText: 'IESBA PIE', NextTopic: '2.3.1.2' },
    { TopicNum: '2.3.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.3.1.3' },
    { TopicNum: '2.3.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.4.1', ChoiceText: 'SEC', NextTopic: '2.4.1.1' },
    { TopicNum: '2.4.1', ChoiceText: 'IESBA PIE', NextTopic: '2.4.1.2' },
    { TopicNum: '2.4.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.4.1.3' },
    { TopicNum: '2.4.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.4.2', ChoiceText: 'SEC', NextTopic: '2.4.2.1' },
    { TopicNum: '2.4.2', ChoiceText: 'IESBA PIE', NextTopic: '2.4.2.2' },
    { TopicNum: '2.4.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.4.2.3' },
    { TopicNum: '2.4.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.5.1', ChoiceText: 'SEC', NextTopic: '2.5.1.1' },
    { TopicNum: '2.5.1', ChoiceText: 'IESBA PIE', NextTopic: '2.5.1.2' },
    { TopicNum: '2.5.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.5.1.3' },
    { TopicNum: '2.5.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.5.2', ChoiceText: 'SEC', NextTopic: '2.5.2.1' },
    { TopicNum: '2.5.2', ChoiceText: 'IESBA PIE', NextTopic: '2.5.2.2' },
    { TopicNum: '2.5.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.5.2.3' },
    { TopicNum: '2.5.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.5.3', ChoiceText: 'SEC', NextTopic: '2.5.3.1' },
    { TopicNum: '2.5.3', ChoiceText: 'IESBA PIE', NextTopic: '2.5.3.2' },
    { TopicNum: '2.5.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.5.3.3' },
    { TopicNum: '2.5.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.1', ChoiceText: 'SEC', NextTopic: '2.6.1.1' },
    { TopicNum: '2.6.1', ChoiceText: 'IESBA PIE', NextTopic: '2.6.1.2' },
    { TopicNum: '2.6.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.1.3' },
    { TopicNum: '2.6.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.2', ChoiceText: 'SEC', NextTopic: '2.6.2.1' },
    { TopicNum: '2.6.2', ChoiceText: 'IESBA PIE', NextTopic: '2.6.2.2' },
    { TopicNum: '2.6.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.2.3' },
    { TopicNum: '2.6.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.3', ChoiceText: 'SEC', NextTopic: '2.6.3.1' },
    { TopicNum: '2.6.3', ChoiceText: 'IESBA PIE', NextTopic: '2.6.3.2' },
    { TopicNum: '2.6.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.3.3' },
    { TopicNum: '2.6.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.4', ChoiceText: 'SEC', NextTopic: '2.6.4.1' },
    { TopicNum: '2.6.4', ChoiceText: 'IESBA PIE', NextTopic: '2.6.4.2' },
    { TopicNum: '2.6.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.4.3' },
    { TopicNum: '2.6.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.5', ChoiceText: 'SEC', NextTopic: '2.6.5.1' },
    { TopicNum: '2.6.5', ChoiceText: 'IESBA PIE', NextTopic: '2.6.5.2' },
    { TopicNum: '2.6.5', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.5.3' },
    { TopicNum: '2.6.5', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.6', ChoiceText: 'SEC', NextTopic: '2.6.6.1' },
    { TopicNum: '2.6.6', ChoiceText: 'IESBA PIE', NextTopic: '2.6.6.2' },
    { TopicNum: '2.6.6', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.6.3' },
    { TopicNum: '2.6.6', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.7', ChoiceText: 'SEC', NextTopic: '2.6.7.1' },
    { TopicNum: '2.6.7', ChoiceText: 'IESBA PIE', NextTopic: '2.6.7.2' },
    { TopicNum: '2.6.7', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.7.3' },
    { TopicNum: '2.6.7', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.8', ChoiceText: 'SEC', NextTopic: '2.6.8.1' },
    { TopicNum: '2.6.8', ChoiceText: 'IESBA PIE', NextTopic: '2.6.8.2' },
    { TopicNum: '2.6.8', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.8.3' },
    { TopicNum: '2.6.8', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.9', ChoiceText: 'SEC', NextTopic: '2.6.9.1' },
    { TopicNum: '2.6.9', ChoiceText: 'IESBA PIE', NextTopic: '2.6.9.2' },
    { TopicNum: '2.6.9', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.9.3' },
    { TopicNum: '2.6.9', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.10', ChoiceText: 'SEC', NextTopic: '2.6.10.1' },
    { TopicNum: '2.6.10', ChoiceText: 'IESBA PIE', NextTopic: '2.6.10.2' },
    { TopicNum: '2.6.10', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.10.3' },
    { TopicNum: '2.6.10', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.11', ChoiceText: 'SEC', NextTopic: '2.6.11.1' },
    { TopicNum: '2.6.11', ChoiceText: 'IESBA PIE', NextTopic: '2.6.11.2' },
    { TopicNum: '2.6.11', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.11.3' },
    { TopicNum: '2.6.11', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.12', ChoiceText: 'SEC', NextTopic: '2.6.12.1' },
    { TopicNum: '2.6.12', ChoiceText: 'IESBA PIE', NextTopic: '2.6.12.2' },
    { TopicNum: '2.6.12', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.12.3' },
    { TopicNum: '2.6.12', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.6.13', ChoiceText: 'SEC', NextTopic: '2.6.13.1' },
    { TopicNum: '2.6.13', ChoiceText: 'IESBA PIE', NextTopic: '2.6.13.2' },
    { TopicNum: '2.6.13', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.6.13.3' },
    { TopicNum: '2.6.13', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.1', ChoiceText: 'SEC', NextTopic: '2.7.1.1' },
    { TopicNum: '2.7.1', ChoiceText: 'IESBA PIE', NextTopic: '2.7.1.2' },
    { TopicNum: '2.7.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.1.3' },
    { TopicNum: '2.7.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.2', ChoiceText: 'SEC', NextTopic: '2.7.2.1' },
    { TopicNum: '2.7.2', ChoiceText: 'IESBA PIE', NextTopic: '2.7.2.2' },
    { TopicNum: '2.7.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.2.3' },
    { TopicNum: '2.7.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.3', ChoiceText: 'SEC', NextTopic: '2.7.3.1' },
    { TopicNum: '2.7.3', ChoiceText: 'IESBA PIE', NextTopic: '2.7.3.2' },
    { TopicNum: '2.7.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.3.3' },
    { TopicNum: '2.7.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.4', ChoiceText: 'SEC', NextTopic: '2.7.4.1' },
    { TopicNum: '2.7.4', ChoiceText: 'IESBA PIE', NextTopic: '2.7.4.2' },
    { TopicNum: '2.7.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.4.3' },
    { TopicNum: '2.7.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.5', ChoiceText: 'SEC', NextTopic: '2.7.5.1' },
    { TopicNum: '2.7.5', ChoiceText: 'IESBA PIE', NextTopic: '2.7.5.2' },
    { TopicNum: '2.7.5', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.5.3' },
    { TopicNum: '2.7.5', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.6', ChoiceText: 'SEC', NextTopic: '2.7.6.1' },
    { TopicNum: '2.7.6', ChoiceText: 'IESBA PIE', NextTopic: '2.7.6.2' },
    { TopicNum: '2.7.6', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.6.3' },
    { TopicNum: '2.7.6', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.7', ChoiceText: 'SEC', NextTopic: '2.7.7.1' },
    { TopicNum: '2.7.7', ChoiceText: 'IESBA PIE', NextTopic: '2.7.7.2' },
    { TopicNum: '2.7.7', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.7.3' },
    { TopicNum: '2.7.7', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.8', ChoiceText: 'SEC', NextTopic: '2.7.8.1' },
    { TopicNum: '2.7.8', ChoiceText: 'IESBA PIE', NextTopic: '2.7.8.2' },
    { TopicNum: '2.7.8', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.8.3' },
    { TopicNum: '2.7.8', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.9', ChoiceText: 'SEC', NextTopic: '2.7.9.1' },
    { TopicNum: '2.7.9', ChoiceText: 'IESBA PIE', NextTopic: '2.7.9.2' },
    { TopicNum: '2.7.9', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.9.3' },
    { TopicNum: '2.7.9', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.10', ChoiceText: 'SEC', NextTopic: '2.7.10.1' },
    { TopicNum: '2.7.10', ChoiceText: 'IESBA PIE', NextTopic: '2.7.10.2' },
    { TopicNum: '2.7.10', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.10.3' },
    { TopicNum: '2.7.10', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.7.11', ChoiceText: 'SEC', NextTopic: '2.7.11.1' },
    { TopicNum: '2.7.11', ChoiceText: 'IESBA PIE', NextTopic: '2.7.11.2' },
    { TopicNum: '2.7.11', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.7.11.3' },
    { TopicNum: '2.7.11', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.8.1', ChoiceText: 'SEC', NextTopic: '2.8.1.1' },
    { TopicNum: '2.8.1', ChoiceText: 'IESBA PIE', NextTopic: '2.8.1.2' },
    { TopicNum: '2.8.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.8.1.3' },
    { TopicNum: '2.8.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.8.2', ChoiceText: 'SEC', NextTopic: '2.8.2.1' },
    { TopicNum: '2.8.2', ChoiceText: 'IESBA PIE', NextTopic: '2.8.2.2' },
    { TopicNum: '2.8.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.8.2.3' },
    { TopicNum: '2.8.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.9.1', ChoiceText: 'SEC', NextTopic: '2.9.1.1' },
    { TopicNum: '2.9.1', ChoiceText: 'IESBA PIE', NextTopic: '2.9.1.2' },
    { TopicNum: '2.9.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.9.1.3' },
    { TopicNum: '2.9.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.9.2', ChoiceText: 'SEC', NextTopic: '2.9.2.1' },
    { TopicNum: '2.9.2', ChoiceText: 'IESBA PIE', NextTopic: '2.9.2.2' },
    { TopicNum: '2.9.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.9.2.3' },
    { TopicNum: '2.9.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.9.3', ChoiceText: 'SEC', NextTopic: '2.9.3.1' },
    { TopicNum: '2.9.3', ChoiceText: 'IESBA PIE', NextTopic: '2.9.3.2' },
    { TopicNum: '2.9.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.9.3.3' },
    { TopicNum: '2.9.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.10.1', ChoiceText: 'SEC', NextTopic: '2.10.1.1' },
    { TopicNum: '2.10.1', ChoiceText: 'IESBA PIE', NextTopic: '2.10.1.2' },
    { TopicNum: '2.10.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.10.1.3' },
    { TopicNum: '2.10.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.10.2', ChoiceText: 'SEC', NextTopic: '2.10.2.1' },
    { TopicNum: '2.10.2', ChoiceText: 'IESBA PIE', NextTopic: '2.10.2.2' },
    { TopicNum: '2.10.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.10.2.3' },
    { TopicNum: '2.10.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.10.3', ChoiceText: 'SEC', NextTopic: '2.10.3.1' },
    { TopicNum: '2.10.3', ChoiceText: 'IESBA PIE', NextTopic: '2.10.3.2' },
    { TopicNum: '2.10.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.10.3.3' },
    { TopicNum: '2.10.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.10.4', ChoiceText: 'SEC', NextTopic: '2.10.4.1' },
    { TopicNum: '2.10.4', ChoiceText: 'IESBA PIE', NextTopic: '2.10.4.2' },
    { TopicNum: '2.10.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.10.4.3' },
    { TopicNum: '2.10.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.11.1', ChoiceText: 'SEC', NextTopic: '2.11.1.1' },
    { TopicNum: '2.11.1', ChoiceText: 'IESBA PIE', NextTopic: '2.11.1.2' },
    { TopicNum: '2.11.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.11.1.3' },
    { TopicNum: '2.11.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.12.1', ChoiceText: 'SEC', NextTopic: '2.12.1.1' },
    { TopicNum: '2.12.1', ChoiceText: 'IESBA PIE', NextTopic: '2.12.1.2' },
    { TopicNum: '2.12.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.12.1.3' },
    { TopicNum: '2.12.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.12.2', ChoiceText: 'SEC', NextTopic: '2.12.2.1' },
    { TopicNum: '2.12.2', ChoiceText: 'IESBA PIE', NextTopic: '2.12.2.2' },
    { TopicNum: '2.12.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.12.2.3' },
    { TopicNum: '2.12.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.13.1', ChoiceText: 'SEC', NextTopic: '2.13.1.1' },
    { TopicNum: '2.13.1', ChoiceText: 'IESBA PIE', NextTopic: '2.13.1.2' },
    { TopicNum: '2.13.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.13.1.3' },
    { TopicNum: '2.13.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.13.2', ChoiceText: 'SEC', NextTopic: '2.13.2.1' },
    { TopicNum: '2.13.2', ChoiceText: 'IESBA PIE', NextTopic: '2.13.2.2' },
    { TopicNum: '2.13.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.13.2.3' },
    { TopicNum: '2.13.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.13.3', ChoiceText: 'SEC', NextTopic: '2.13.3.1' },
    { TopicNum: '2.13.3', ChoiceText: 'IESBA PIE', NextTopic: '2.13.3.2' },
    { TopicNum: '2.13.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.13.3.3' },
    { TopicNum: '2.13.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.1', ChoiceText: 'SEC', NextTopic: '2.14.1.1' },
    { TopicNum: '2.14.1', ChoiceText: 'IESBA PIE', NextTopic: '2.14.1.2' },
    { TopicNum: '2.14.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.1.3' },
    { TopicNum: '2.14.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.2', ChoiceText: 'SEC', NextTopic: '2.14.2.1' },
    { TopicNum: '2.14.2', ChoiceText: 'IESBA PIE', NextTopic: '2.14.2.2' },
    { TopicNum: '2.14.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.2.3' },
    { TopicNum: '2.14.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.3', ChoiceText: 'SEC', NextTopic: '2.14.3.1' },
    { TopicNum: '2.14.3', ChoiceText: 'IESBA PIE', NextTopic: '2.14.3.2' },
    { TopicNum: '2.14.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.3.3' },
    { TopicNum: '2.14.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.4', ChoiceText: 'SEC', NextTopic: '2.14.4.1' },
    { TopicNum: '2.14.4', ChoiceText: 'IESBA PIE', NextTopic: '2.14.4.2' },
    { TopicNum: '2.14.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.4.3' },
    { TopicNum: '2.14.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.5', ChoiceText: 'SEC', NextTopic: '2.14.5.1' },
    { TopicNum: '2.14.5', ChoiceText: 'IESBA PIE', NextTopic: '2.14.5.2' },
    { TopicNum: '2.14.5', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.5.3' },
    { TopicNum: '2.14.5', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.6', ChoiceText: 'SEC', NextTopic: '2.14.6.1' },
    { TopicNum: '2.14.6', ChoiceText: 'IESBA PIE', NextTopic: '2.14.6.2' },
    { TopicNum: '2.14.6', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.6.3' },
    { TopicNum: '2.14.6', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.7', ChoiceText: 'SEC', NextTopic: '2.14.7.1' },
    { TopicNum: '2.14.7', ChoiceText: 'IESBA PIE', NextTopic: '2.14.7.2' },
    { TopicNum: '2.14.7', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.7.3' },
    { TopicNum: '2.14.7', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.8', ChoiceText: 'SEC', NextTopic: '2.14.8.1' },
    { TopicNum: '2.14.8', ChoiceText: 'IESBA PIE', NextTopic: '2.14.8.2' },
    { TopicNum: '2.14.8', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.8.3' },
    { TopicNum: '2.14.8', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.9', ChoiceText: 'SEC', NextTopic: '2.14.9.1' },
    { TopicNum: '2.14.9', ChoiceText: 'IESBA PIE', NextTopic: '2.14.9.2' },
    { TopicNum: '2.14.9', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.9.3' },
    { TopicNum: '2.14.9', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.14.10', ChoiceText: 'SEC', NextTopic: '2.14.10.1' },
    { TopicNum: '2.14.10', ChoiceText: 'IESBA PIE', NextTopic: '2.14.10.2' },
    { TopicNum: '2.14.10', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.14.10.3' },
    { TopicNum: '2.14.10', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.1.1.1', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.1.2', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.1.3', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.2.1', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.2.2', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.2.3', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.3.1', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.3.2', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.3.3', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.4.1', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.4.2', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.1.4.3', ChoiceText: 'Return to Actuarial Services', NextTopic: '2.1' },
    { TopicNum: '2.2.1.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.1.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.1.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.2.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.2.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.2.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.3.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.3.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.3.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.4.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.4.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.4.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.5.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.5.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.5.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.5.4', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.6.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.6.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.6.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.6.4', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.7.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.7.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.7.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.7.4', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.8.1', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.8.2', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.8.3', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.2.8.4', ChoiceText: 'Return to Current State Analysis', NextTopic: '2.2' },
    { TopicNum: '2.3.1.1', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.3.1.2', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.3.1.3', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.4.1.1', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.4.1.2', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.4.1.3', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.4.2.1', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.4.2.2', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.4.2.3', ChoiceText: 'Return to Demographic Advisory Services', NextTopic: '2.4' },
    { TopicNum: '2.5.1.1', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.1.2', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.1.3', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.2.1', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.2.2', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.2.3', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.3.1', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.3.2', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.5.3.3', ChoiceText: 'Return to Executive Search and Selection', NextTopic: '2.5' },
    { TopicNum: '2.6.1.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.1.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.1.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.2.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.2.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.2.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.3.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.3.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.3.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.4.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.4.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.4.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.5.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.5.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.5.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.6.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.6.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.6.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.7.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.7.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.7.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.8.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.8.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.8.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.9.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.9.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.9.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.10.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.10.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.10.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.11.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.11.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.11.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.12.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.12.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.12.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.13.1', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.13.2', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.6.13.3', ChoiceText: 'Return to Forensic', NextTopic: '2.6' },
    { TopicNum: '2.7.1.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.1.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.1.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.2.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.2.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.2.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.3.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.3.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.3.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.4.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.4.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.4.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.5.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.5.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.5.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.6.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.6.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.6.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.7.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.7.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.7.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.8.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.8.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.8.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.9.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.9.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.9.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.10.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.10.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.10.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.11.1', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.11.2', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.7.11.3', ChoiceText: 'Return to Future State Design and Implementation', NextTopic: '2.7' },
    { TopicNum: '2.8.1.1', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.8.1.2', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.8.1.3', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.8.2.1', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.8.2.2', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.8.2.3', ChoiceText: 'Return to Investment Consulting', NextTopic: '2.8' },
    { TopicNum: '2.9.1.1', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.1.2', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.1.3', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.2.1', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.2.2', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.2.3', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.3.1', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.3.2', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.9.3.3', ChoiceText: 'Return to Mergers and Acquisitions', NextTopic: '2.9' },
    { TopicNum: '2.10.1.1', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.1.2', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.1.3', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.2.1', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.2.2', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.2.3', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.3.1', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.3.2', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.3.3', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.4.1', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.4.2', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.10.4.3', ChoiceText: 'Return to Monitoring', NextTopic: '2.1' },
    { TopicNum: '2.11.1.1', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.11.1.2', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.11.1.3', ChoiceText: 'Return to Advisory', NextTopic: '2' },
    { TopicNum: '2.12.1.1', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.12.1.2', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.12.1.3', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.12.2.1', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.12.2.2', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.12.2.3', ChoiceText: 'Return to Resource Skills Assessment', NextTopic: '2.12' },
    { TopicNum: '2.13.1.1', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.1.2', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.1.3', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.2.1', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.2.2', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.2.3', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.3.1', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.3.2', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.13.3.3', ChoiceText: 'Return to Restructuring Services', NextTopic: '2.13' },
    { TopicNum: '2.14.1.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.1.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.1.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.2.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.2.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.2.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.3.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.3.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.3.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.4.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.4.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.4.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.5.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.5.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.5.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.6.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.6.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.6.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.7.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.7.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.7.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.8.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.8.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.8.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.9.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.9.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.9.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.10.1', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.10.2', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.14.10.3', ChoiceText: 'Return to Training and Communications', NextTopic: '2.14' },
    { TopicNum: '2.15.1', ChoiceText: 'SEC', NextTopic: '2.15.1.1' },
    { TopicNum: '2.15.1', ChoiceText: 'IESBA PIE', NextTopic: '2.15.1.2' },
    { TopicNum: '2.15.1', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.1.3' },
    { TopicNum: '2.15.1', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.2', ChoiceText: 'SEC', NextTopic: '2.15.2.1' },
    { TopicNum: '2.15.2', ChoiceText: 'IESBA PIE', NextTopic: '2.15.2.2' },
    { TopicNum: '2.15.2', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.2.3' },
    { TopicNum: '2.15.2', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.3', ChoiceText: 'SEC', NextTopic: '2.15.3.1' },
    { TopicNum: '2.15.3', ChoiceText: 'IESBA PIE', NextTopic: '2.15.3.2' },
    { TopicNum: '2.15.3', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.3.3' },
    { TopicNum: '2.15.3', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.4', ChoiceText: 'SEC', NextTopic: '2.15.4.1' },
    { TopicNum: '2.15.4', ChoiceText: 'IESBA PIE', NextTopic: '2.15.4.2' },
    { TopicNum: '2.15.4', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.4.3' },
    { TopicNum: '2.15.4', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.5', ChoiceText: 'SEC', NextTopic: '2.15.5.1' },
    { TopicNum: '2.15.5', ChoiceText: 'IESBA PIE', NextTopic: '2.15.5.2' },
    { TopicNum: '2.15.5', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.5.3' },
    { TopicNum: '2.15.5', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.6', ChoiceText: 'SEC', NextTopic: '2.15.6.1' },
    { TopicNum: '2.15.6', ChoiceText: 'IESBA PIE', NextTopic: '2.15.6.2' },
    { TopicNum: '2.15.6', ChoiceText: 'IESBA Non-PIE', NextTopic: '2.15.6.3' },
    { TopicNum: '2.15.6', ChoiceText: 'EU PIE', NextTopic: '99' },
    { TopicNum: '2.15.1.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.1.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.1.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.2.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.2.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.2.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.3.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.3.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.3.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.4.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.4.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.4.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.5.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.5.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.5.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.6.1', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.6.2', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
    { TopicNum: '2.15.6.3', ChoiceText: 'Return to Valuations', NextTopic: '2.15' },
];
var CHOICE_LIST = ChoiceList;
//# sourceMappingURL=choice.mocks.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = 'SplashPage';
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\WINDOWS\system32\ican\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\WINDOWS\system32\ican\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[198]);
//# sourceMappingURL=main.js.map