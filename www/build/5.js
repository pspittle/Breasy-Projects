webpackJsonp([5],{

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(98);
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
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.navToMain = function () {
        this.navCtrl.push('TabsPage');
    };
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"C:\WINDOWS\system32\ican\src\pages\intro\intro.html"*/'<ion-header>\n\n  <ion-navbar color=\'KPMG1\'>\n\n    <ion-title color=\'KPMG2\'>\n\n      iCan\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content >\n\n  <div id=\'iCanSubHeader\'>\n\n    Introduction\n\n  </div>\n\n    <div id=\'iCanBody\'>\n\n      Welcome to iCan.\n\n      <br><br>\n\n      iCan provides on-the-go information on the Firm’s Engagement Independence policies and guidance.\n\n      <br><br>\n\n      iCan will assist in:\n\n      <ul>\n\n        <li>deciding which non-audit services may be offered to KPMG audit clients; and\n\n        <li>identifying cases where restrictions may exist.\n\n      </ul>\n\n      iCan is intended to provide general guidance only and should be read in conjunction with the policies\n\n      and guidance on non-audit services detailed in the Quality and Risk Management Manual.\n\n      <br><br>\n\n      Refer to <i>Section 11 - Non-Assurance Services</i> (for PIE and non-PIE audit clients), and <i>Section 20.14 - Non-audit services for SEC audit clients</i>.\n\n      <p></p>\n\n      <button id=\'link\' ion-button detail-push no-lines block onclick="window.open(\'https://www.gqrmm-prod.kworld.kpmg.com/AU/15/\')">Quality and Risk Management Manual</button>\n\n      <p></p>\n\n            <!-- <button id=\'link\' ion-button block onclick="window.open(\'http://www.google.\'); return false;">Quality and Risk Management Manual</button></div> -->\n\n      iCan is not to be used for specific fact based decisions.\n\n      <br><br>\n\n      If uncertain, advice must be sought from the national or functional Risk Management partner, the national Ethics and Independence partner, or the Global \n\n      Independence Group (the final arbitrator if there is any difficulty). \n\n      <p>\n\n       <button id=\'link\' ion-button block onclick="window.open(\'https://intra.aspac.kpmg.com/sites/AU/businesssupport/riskmanagement/Pages/contacts.aspx\')">\n\n        Risk Management Contacts</button>\n\n      </p>\n\n       <button id=\'link\' ion-button block onclick="window.open(\'https://intra.ema.kpmg.com/sites/GQRM/depts/GI/Pages/default.aspx\')">Global Independence Group</button>\n\n       <p>\n\n         If you are unsure whether your audit client is SEC, IESBA PIE, IESBA non-PIE or EU PIE, check the <i>Sentinel Affiliate Tool</i>.\n\n        </p>\n\n        <button id=\'link\' ion-button block onclick="window.open(\'https://ngsclient.ema.kpmg.com/#%21/affiliate-tool/home\')">\n\n          Sentinel Affiliate Tool</button>\n\n        <p>\n\n          <button color=\'KPMG3\' ion-button block (click)="navToMain()">\n\n          Next</button>\n\n        </p>\n\n      </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\WINDOWS\system32\ican\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=5.js.map