(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
    }
];
var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"tutorial-page\">\n    <div padding text-end>\n        <ion-button fill=\"clear\" [routerLink]=\"'/login/'\" routerDirection=\"forward\">Saltar\n            <ion-icon name=\"arrow-forward\"></ion-icon>\n        </ion-button>\n    </div>\n\n    <ion-slides pager=\"true\">\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style=\"display: flex; justify-content: center;\">\n                        <div style=\"width: 250px; height: 250px;\">\n                            <img src=\"../../assets/slides/one.svg\" alt=\"\">\n                        </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <h2>¡No te calles!</h2>\n                        <p> \n                        Denuncia anónimamente comportamiento inadecuado dentro de tu institución sin importar tu sexo o género.\n                        </p>\n                        <br>\n                        <br>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-grid>\n                <ion-row>\n                    <ion-col style=\"display: flex; justify-content: center;\">\n                            <div style=\"width: 250px; height: 250px;\">\n                                    <img src=\"../../assets/slides/two.svg\" alt=\"\">\n                            </div>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <h2>Por un Mejor Ambiente Escolar</h2>\n                        <p>Denuncia dentro de tu escuela a profesores y alumnos que no respeten\n                          el código ético profesor-alumno. El director podrá ver las denuncias pero\n                          nunca verán tu nombre.\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-grid>\n                    <ion-col style=\"display: flex; justify-content: center;\">\n                            <div style=\"width: 250px; height: 250px;\">\n                                    <img src=\"../../assets/slides/three.svg\" alt=\"\">\n                            </div>\n                    </ion-col>\n                <ion-row>\n                    <ion-col>\n                        <h2>Por un Mejor Ambiente Laboral</h2>\n                        <p>Denuncia dentro de tu institución a directivos o compañeros que no respeten \n                            el código ético de la empresa. Los directivos administradores podrán ver las denuncias pero \n                            nunca verán tu nombre.</p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-grid>\n                    <ion-col style=\"display: flex; justify-content: center;\">\n                            <div style=\"width: 250px; height: 250px;\">\n                                    <img src=\"../../assets/slides/four.svg\" alt=\"\">\n                            </div>\n                    </ion-col>\n                <ion-row>\n                    <ion-col>\n                        <h2>Ayuda a Denunciar</h2>\n                        <p>Con un formulario acude a los centros de ayuda más cercanos a ti para encontrar ayuda legal, \n                          médica y psicológica sin tener que relatar los hechos ni una sola vez.\n                        </p>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n\n        <ion-slide>\n            <ion-grid>\n                    <ion-col style=\"display: flex; justify-content: center;\">\n                            <div style=\"width: 250px; height: 250px;\">\n                                    <img src=\"../../assets/slides/five.svg\" alt=\"\">\n                            </div>\n                    </ion-col>\n                <ion-row>\n                    <ion-col>\n                        <h2>¿Comenzamos?</h2>\n                        <ion-button fill=\"clear\" expand=\"block\" color=\"primary\" [routerLink]=\"'/login/'\" routerDirection=\"forward\">Continuar</ion-button>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-slide>\n    </ion-slides>\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tutorial-page .toolbar-background {\n  background: #fff;\n  border-color: transparent; }\n\n.tutorial-page .slide-zoom {\n  height: 100%; }\n\n.tutorial-page .slide-title {\n  margin-top: 2.8rem; }\n\n.tutorial-page .slide-image {\n  max-height: 50%;\n  max-width: 60%;\n  margin: 18px 0; }\n\n.tutorial-page b {\n  font-weight: 500; }\n\n.tutorial-page p {\n  padding: 0 40px;\n  font-size: 14px;\n  line-height: 1.5;\n  color: #60646B; }\n\n.tutorial-page p b {\n    color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL21hcmlvOGEvRXNjcml0b3Jpby9DcmVhdG9uL2NyZWF0b24yMDE5L0FwcC9zcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFHTSxnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7O0FBSi9CO0VBUU0sWUFBWSxFQUFBOztBQVJsQjtFQVlNLGtCQUFrQixFQUFBOztBQVp4QjtFQWdCTSxlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWMsRUFBQTs7QUFsQnBCO0VBc0JNLGdCQUFnQixFQUFBOztBQXRCdEI7RUEwQk0sZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQTdCcEI7SUFnQ1EsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50dXRvcmlhbC1wYWdlIHtcblxuICAgIC50b29sYmFyLWJhY2tncm91bmQge1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICBcbiAgICAuc2xpZGUtem9vbSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICBcbiAgICAuc2xpZGUtdGl0bGUge1xuICAgICAgbWFyZ2luLXRvcDogMi44cmVtO1xuICAgIH1cbiAgXG4gICAgLnNsaWRlLWltYWdlIHtcbiAgICAgIG1heC1oZWlnaHQ6IDUwJTtcbiAgICAgIG1heC13aWR0aDogNjAlO1xuICAgICAgbWFyZ2luOiAxOHB4IDA7XG4gICAgfVxuICBcbiAgICBiIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICBcbiAgICBwIHtcbiAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBjb2xvcjogIzYwNjQ2QjtcbiAgXG4gICAgICBiIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICB9XG4gICAgfVxuICBcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
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

var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map