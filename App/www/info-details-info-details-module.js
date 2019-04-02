(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["info-details-info-details-module"],{

/***/ "./src/app/info-details/info-details.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/info-details/info-details.module.ts ***!
  \*****************************************************/
/*! exports provided: InfoDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetailsPageModule", function() { return InfoDetailsPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_details_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-details.page */ "./src/app/info-details/info-details.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        component: _info_details_page__WEBPACK_IMPORTED_MODULE_5__["InfoDetailsPage"]
    }
];
var InfoDetailsPageModule = /** @class */ (function () {
    function InfoDetailsPageModule() {
    }
    InfoDetailsPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_info_details_page__WEBPACK_IMPORTED_MODULE_5__["InfoDetailsPage"]]
        })
    ], InfoDetailsPageModule);
    return InfoDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/info-details/info-details.page.html":
/*!*****************************************************!*\
  !*** ./src/app/info-details/info-details.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button text=\"Regresar\" defaultHref=\"/app/user/tabs/tab3\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Formulario</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n    <h1>Crud 1</h1>\n\n    <ion-list lines=\"full\">\n        <ion-item *ngIf=\"todo\">\n            <ion-input required type=\"text\" placeholder=\"Task\" [(ngModel)]=\"todo.task\"></ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"todo\">\n            <ion-input required type=\"number\" placeholder=\"Priority\" [(ngModel)]=\"todo.priority\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type=\"text\" placeholder=\"Nuevo campo\" [(ngModel)]=\"todo.campo1\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type=\"text\" placeholder=\"Nuevo campo 2\" [(ngModel)]=\"todo.campo2\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input type=\"text\" placeholder=\"Nuevo campo 3\" [(ngModel)]=\"todo.campo3\"></ion-input>\n        </ion-item>\n    </ion-list>\n    <ion-button expand=\"full\" (click)=\"saveTodo()\">Save</ion-button>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" color=\"danger\">\n        <ion-fab-button color=\"danger\" (click)=\"onRemoveTodo(todoId)\" routerLink=\"/app/user/tabs/tab3\" routerDirection=\"forward\">\n            <ion-icon name=\"trash\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/info-details/info-details.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/info-details/info-details.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZm8tZGV0YWlscy9pbmZvLWRldGFpbHMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/info-details/info-details.page.ts":
/*!***************************************************!*\
  !*** ./src/app/info-details/info-details.page.ts ***!
  \***************************************************/
/*! exports provided: InfoDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDetailsPage", function() { return InfoDetailsPage; });
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




var InfoDetailsPage = /** @class */ (function () {
    function InfoDetailsPage(route, nav, infoService, loadingController) {
        this.route = route;
        this.nav = nav;
        this.infoService = infoService;
        this.loadingController = loadingController;
        this.todo = {
            task: '',
            priority: 0,
            //Nombres de los campos segun la interface
            campo1: '',
            campo2: '',
            campo3: ''
        };
        this.todoId = null;
    }
    InfoDetailsPage.prototype.ngOnInit = function () {
        this.todoId = this.route.snapshot.params['id'];
        if (this.todoId) {
            this.loadTodo();
        }
    };
    InfoDetailsPage.prototype.loadTodo = function () {
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
                        this.infoService.getTodo(this.todoId).subscribe(function (todo) {
                            loading.dismiss();
                            _this.todo = todo;
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoDetailsPage.prototype.saveTodo = function () {
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
                        if (this.todoId) {
                            this.infoService.updateTodo(this.todo, this.todoId).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/app/user/tabs/tab3');
                            });
                        }
                        else {
                            this.infoService.addTodo(this.todo).then(function () {
                                loading.dismiss();
                                _this.nav.navigateForward('/app/user/tabs/tab3');
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    InfoDetailsPage.prototype.onRemoveTodo = function (idTodo) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.infoService.removeTodo(idTodo);
                return [2 /*return*/];
            });
        });
    };
    InfoDetailsPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-info-details',
            template: __webpack_require__(/*! ./info-details.page.html */ "./src/app/info-details/info-details.page.html"),
            styles: [__webpack_require__(/*! ./info-details.page.scss */ "./src/app/info-details/info-details.page.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _services_info_service__WEBPACK_IMPORTED_MODULE_1__["InfoService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"]])
    ], InfoDetailsPage);
    return InfoDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=info-details-info-details-module.js.map