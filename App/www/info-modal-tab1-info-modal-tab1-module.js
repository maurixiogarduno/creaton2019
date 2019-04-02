(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-modal-tab1-info-modal-tab1-module"],{

/***/ "./src/app/info-modal-tab1/info-modal-tab1.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/info-modal-tab1/info-modal-tab1.module.ts ***!
  \***********************************************************/
/*! exports provided: InfoModalTab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalTab1PageModule", function() { return InfoModalTab1PageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_modal_tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-modal-tab1.page */ "./src/app/info-modal-tab1/info-modal-tab1.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _info_modal_tab1_page__WEBPACK_IMPORTED_MODULE_5__["InfoModalTab1Page"]
    }
];
var InfoModalTab1PageModule = /** @class */ (function () {
    function InfoModalTab1PageModule() {
    }
    InfoModalTab1PageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_modal_tab1_page__WEBPACK_IMPORTED_MODULE_5__["InfoModalTab1Page"]]
        })
    ], InfoModalTab1PageModule);
    return InfoModalTab1PageModule;
}());



/***/ }),

/***/ "./src/app/info-modal-tab1/info-modal-tab1.page.html":
/*!***********************************************************!*\
  !*** ./src/app/info-modal-tab1/info-modal-tab1.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Regresar\" defaultHref=\"/app/user/tabs/tab2\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Formulario</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n    <ion-list lines=\"full\">\n        <ion-item *ngIf=\"parametros\">\n            <ion-input required type=\"text\" placeholder=\"Nombre\" [(ngModel)]=\"parametros.nombre\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"parametros\">\n            <ion-input required type=\"number\" placeholder=\"Nivel de violencia\" [(ngModel)]=\"parametros.nivelViolencia\"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" (click)=\"saveParam()\">Save</ion-button>\n\n    <ion-list>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Bromas hirientes</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Chantajear</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Mentir, engañar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Ignorar, ley de hielo</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Celar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Culpabilizar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Descalificar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Ridiculizar, ofender</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Humillar en público</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"warning\"></ion-checkbox>\n            <ion-label>Intimidar, amenazar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Controlar, prohibir</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Destruir artículos personales</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Manosear</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Caricias agresivas</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Golpear \"jugando\"</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Pellizcar, arañar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Empujar, jalonear</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Cachetear</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Patear</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"danger\"></ion-checkbox>\n            <ion-label>Encerrar, aislar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n            <ion-label>Amenazar con objetos o armas</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n            <ion-label>Amenazar de muerte</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n            <ion-label>Forzar a una relación sexual</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n            <ion-label>Violar</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-checkbox color=\"primary\"></ion-checkbox>\n            <ion-label>Mutilar</ion-label>\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/info-modal-tab1/info-modal-tab1.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/info-modal-tab1/info-modal-tab1.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tbW9kYWwtdGFiMS9pbmZvLW1vZGFsLXRhYjEucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/info-modal-tab1/info-modal-tab1.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/info-modal-tab1/info-modal-tab1.page.ts ***!
  \*********************************************************/
/*! exports provided: InfoModalTab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoModalTab1Page", function() { return InfoModalTab1Page; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/info.service */ "./src/app/services/info.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var InfoModalTab1Page = /** @class */ (function () {
    function InfoModalTab1Page(route, nav, infoService, loadingController) {
        this.route = route;
        this.nav = nav;
        this.infoService = infoService;
        this.loadingController = loadingController;
        this.parametros = {
            // task2: '',
            // priority: 0,
            // campo1P: '',
            //nuevos campos
            nombre: '',
            nivelViolencia: 0,
            materia: '',
        };
        this.parametroId = null;
    }
    InfoModalTab1Page.prototype.ngOnInit = function () {
        this.parametroId = this.route.snapshot.params['id'];
        if (this.parametroId) {
            this.loadParam();
        }
    };
    InfoModalTab1Page.prototype.loadParam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Loading....'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        this.infoService.getParam(this.parametroId).subscribe(function (parametro) {
                            loading.dismiss();
                            _this.parametros = parametro;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoModalTab1Page.prototype.saveParam = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            message: 'Saving....'
                        })];
                    case 1:
                        loading = _a.sent();
                        return [4 /*yield*/, loading.present()];
                    case 2:
                        _a.sent();
                        if (this.parametroId) {
                            this.infoService.updateParam(this.parametros, this.parametroId).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/app/user/tabs/tab2');
                            });
                        }
                        else {
                            this.infoService.addParam(this.parametros).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/app/user/tabs/tab2');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoModalTab1Page.prototype.onRemoveParam = function (idParam) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.infoService.removeParam(idParam);
                return [2 /*return*/];
            });
        });
    };
    InfoModalTab1Page = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-modal-tab1',
            template: __webpack_require__(/*! ./info-modal-tab1.page.html */ "./src/app/info-modal-tab1/info-modal-tab1.page.html"),
            styles: [__webpack_require__(/*! ./info-modal-tab1.page.scss */ "./src/app/info-modal-tab1/info-modal-tab1.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_info_service__WEBPACK_IMPORTED_MODULE_1__["InfoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], InfoModalTab1Page);
    return InfoModalTab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=info-modal-tab1-info-modal-tab1-module.js.map