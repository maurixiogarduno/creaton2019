(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_0__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_5__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-buttons slot=\"end\">\n            <ion-button [routerLink]=\"'/perfil/'\" routerDirection=\"forward\">\n                <ion-icon name=\"contact\" size=\"large\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-title>\n            Formulario\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <ion-list>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Nombre</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Apellido</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\" placeholder=\"Preparatoria\">Escolaridad</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\" placeholder=\"Preparatoria\">Estado Civil</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Direccion</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Edad actual</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label position=\"stacked\">Edad cuando ocurrio en suceso</ion-label>\n            <ion-input></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"stacked\">Descripcion</ion-label>\n            <ion-textarea placeholder=\"Enter more information here...\"></ion-textarea>\n        </ion-item>\n        <br>\n        <ion-item>\n            <ion-label position=\"stacked\">Consecuencias físicas de la violencia</ion-label>\n            <ion-input placeholder=\"Moretones, rasguños..\"></ion-input>\n        </ion-item>\n\n\n\n    </ion-list>\n\n    <!-- <h1>Formulario</h1>\n\n    <ion-list>\n        <ng-container *ngIf=\"!todos || todos.length == 0\">\n            <div *ngFor=\"let n of [0,1,2]\" padding>\n                <ion-skeleton-text></ion-skeleton-text>\n                <p>\n                    <ion-skeleton-text class=\"text-skeleton\"></ion-skeleton-text>\n                </p>\n            </div>\n        </ng-container>\n        <ion-item-sliding *ngFor=\"let todo of todos\">\n            <ion-item lines=\"inset\" button [routerLink]=\"['/details', todo.id]\">\n                <ion-label>\n                    {{ todo.task }}\n                </ion-label>\n                <ion-note slot=\"end\" color=\"primary\">{{ todo.priority }}</ion-note>\n            </ion-item>\n\n            <ion-item-options side=\"end\">\n                <ion-item-option (click)=\"remove(item)\" color=\"secondary\">\n                    Check\n                    <ion-icon name=\"checkmark\" slot=\"end\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n    </ion-list>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button routerLink=\"/details\" routerDirection=\"forward\">\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/info.service */ "./src/app/services/info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tab3Page = /** @class */ (function () {
    function Tab3Page(infoService) {
        this.infoService = infoService;
    }
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.infoService.getTodos().subscribe(function (res) { return _this.todos = res; });
    };
    Tab3Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        __metadata("design:paramtypes", [_services_info_service__WEBPACK_IMPORTED_MODULE_1__["InfoService"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map