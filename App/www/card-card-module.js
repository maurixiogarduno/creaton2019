(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["card-card-module"],{

/***/ "./src/app/card/card.module.ts":
/*!*************************************!*\
  !*** ./src/app/card/card.module.ts ***!
  \*************************************/
/*! exports provided: CardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPageModule", function() { return CardPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-card/ngx-card */ "./node_modules/ngx-card/ngx-card.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _card_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card.page */ "./src/app/card/card.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]
    }
];
var CardPageModule = /** @class */ (function () {
    function CardPageModule() {
    }
    CardPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                ngx_card_ngx_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_card_page__WEBPACK_IMPORTED_MODULE_6__["CardPage"]]
        })
    ], CardPageModule);
    return CardPageModule;
}());



/***/ }),

/***/ "./src/app/card/card.page.html":
/*!*************************************!*\
  !*** ./src/app/card/card.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-button [routerLink]=\"'/perfil/'\" routerDirection=\"back\">\n                <ion-icon name=\"arrow-back\" size=\"large\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>Pago</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <main>\n        <article class=\"slds-card\">\n            <div class=\"slds-card__body slds-card__body_inner\">\n                <div class=\"demo-container slds-border_top slds-border_bottom\">\n                    <div class=\"card-wrapper\"></div>\n                    <div class=\"form-container\">\n                        <form class=\"slds-form slds-form_compound\" card container=\".card-wrapper\" action=\"javascript:void(0);\" card-width=\"280\">\n                            <div class=\"slds-form-element__group\">\n                                <div class=\"slds-form-element__row\">\n                                    <div class=\"slds-form-element\">\n                                        <input type=\"text\" name=\"number\" placeholder=\"Numero de Tarjeta\" class=\"block\" card-number/>\n                                    </div>\n                                </div>\n                                <br>\n                                <div class=\"slds-form-element__row\">\n                                    <div class=\" slds-size_1-of-2\">\n                                        <div class=\"slds-form-element\">\n                                            <input type=\"text\" name=\"first-name\" placeholder=\"Nombre\" class=\"block\" card-name/>\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\" slds-size_1-of-2\">\n                                        <div class=\"slds-form-element\">\n                                            <input type=\"text\" name=\"last-name\" placeholder=\"Apellido\" class=\"block\" card-name/>\n                                        </div>\n                                    </div>\n                                    <br>\n                                </div>\n                                <div class=\"slds-form-element__row\">\n                                    <div class=\" slds-size_1-of-2\">\n                                        <div class=\"slds-form-element\">\n                                            <input type=\"text\" name=\"expiry\" placeholder=\"MM/YY\" class=\"block\" card-expiry/>\n                                        </div>\n                                    </div>\n                                    <br>\n                                    <div class=\" slds-size_1-of-2\">\n                                        <div class=\"slds-form-element\">\n                                            <input type=\"text\" name=\"cvc\" placeholder=\"CVC\" class=\"block\" card-cvc/>\n                                        </div>\n                                    </div>\n                                </div><br>\n                                <div text-center>\n                                    <ion-button [routerLink]=\"'/card/'\" routerDirection=\"back\" color=\"primary\" expand=\"full\">AGREGAR</ion-button>\n                                </div><br>\n                                <p text-center>\n                                    <a href=\"https://www.openpay.mx\" alt=\"NPM\" title=\"Install with NPM\">\n                                        <img align=\"center\" src=\"../../assets/img/openpay.png\" style=\"height:25px; background:transparent;\" />\n                                    </a>\n                                </p>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </article>\n    </main>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/card/card.page.scss":
/*!*************************************!*\
  !*** ./src/app/card/card.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".slds-card {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.block {\n  display: inline-block;\n  width: 100%;\n  font-size: 16px;\n  text-align: center;\n  padding: 3px;\n  border: 1px solid #3880ff;\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmlvOGEvRXNjcml0b3Jpby9DcmVhdG9uL2NyZWF0b24yMDE5L0FwcC9zcmMvYXBwL2NhcmQvY2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULFFBQVE7RUFDUix3Q0FBZ0M7VUFBaEMsZ0NBQWdDLEVBQUE7O0FBR2xDO0VBQ0kscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsZHMtY2FyZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5ibG9jayB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzODgwZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/card/card.page.ts":
/*!***********************************!*\
  !*** ./src/app/card/card.page.ts ***!
  \***********************************/
/*! exports provided: CardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardPage", function() { return CardPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardPage = /** @class */ (function () {
    function CardPage() {
        this.cardNumber = "1234";
    }
    CardPage.prototype.ngOnInit = function () {
    };
    CardPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.page.html */ "./src/app/card/card.page.html"),
            styles: [__webpack_require__(/*! ./card.page.scss */ "./src/app/card/card.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardPage);
    return CardPage;
}());



/***/ })

}]);
//# sourceMappingURL=card-card-module.js.map