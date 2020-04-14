function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pages_statistiques_statistiques_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./pages/statistiques/statistiques.component */
    "./src/app/pages/statistiques/statistiques.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Statistique';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-statistiques");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        }
      },
      directives: [_pages_statistiques_statistiques_component__WEBPACK_IMPORTED_MODULE_1__["StatistiquesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _pages_statistiques_statistiques_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/statistiques/statistiques.component */
    "./src/app/pages/statistiques/statistiques.component.ts");
    /* harmony import */


    var _pages_common_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/common/category-card/category-card.component */
    "./src/app/pages/common/category-card/category-card.component.ts");
    /* harmony import */


    var _core_modules_mateiral_mateiral_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./core/modules/mateiral/mateiral.module */
    "./src/app/core/modules/mateiral/mateiral.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core_modules_mateiral_mateiral_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], //StatistiquesModule,
      _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_statistiques_statistiques_component__WEBPACK_IMPORTED_MODULE_5__["StatistiquesComponent"], _pages_common_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCardComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core_modules_mateiral_mateiral_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], //StatistiquesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _pages_statistiques_statistiques_component__WEBPACK_IMPORTED_MODULE_5__["StatistiquesComponent"], _pages_common_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_6__["CategoryCardComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _core_modules_mateiral_mateiral_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"], //StatistiquesModule,
          _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/models/view-model.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/models/view-model.ts ***!
    \*******************************************/

  /*! exports provided: Covid19Model */

  /***/
  function srcAppCoreModelsViewModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Covid19Model", function () {
      return Covid19Model;
    });

    var Covid19Model = function Covid19Model(city, province, country, lastUpdate, cases, active_cases, confirmed, deaths, recovered, serious_critical, new_cases, new_deaths) {
      _classCallCheck(this, Covid19Model);

      this.city = city;
      this.province = province, this.country = country;
      this.lastUpdate = lastUpdate;
      this.cases = cases;
      this.active_cases = active_cases;
      this.confirmed = confirmed;
      this.deaths = deaths;
      this.recovered = recovered;
      this.serious_critical = serious_critical;
      this.new_cases = new_cases;
      this.new_deaths = new_deaths;
    };
    /***/

  },

  /***/
  "./src/app/core/modules/mateiral/mateiral.module.ts":
  /*!**********************************************************!*\
    !*** ./src/app/core/modules/mateiral/mateiral.module.ts ***!
    \**********************************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppCoreModulesMateiralMateiralModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: MaterialModule
    });
    MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function MaterialModule_Factory(t) {
        return new (t || MaterialModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
        exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]],
          exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/http.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/services/http.service.ts ***!
    \***********************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppCoreServicesHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var HttpService = /*#__PURE__*/function () {
      function HttpService(http) {
        _classCallCheck(this, HttpService);

        this.http = http;
        this.endpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_url_old;
        this.hostOld = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_host_old;
        this.apikeyOld = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_api_key_old;
        this.worldStatsEndpoint = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].world_stats_url_old;
        this.news_url = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].news_url;
        this.country = "?country=France";
      }

      _createClass(HttpService, [{
        key: "getStatOld",
        value: function getStatOld() {
          var headers = this.getHeadersOld();
          return this.http.get(this.endpoint + this.country, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        }
      }, {
        key: "getHeadersOld",
        value: function getHeadersOld() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('x-rapidapi-host', this.hostOld);
          headers = headers.set('x-rapidapi-key', this.apikeyOld);
          return headers;
        }
      }, {
        key: "getStat",
        value: function getStat() {
          var headers = this.getHeaders();
          return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_url, {
            headers: headers
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["shareReplay"])(1));
        }
      }, {
        key: "getHeaders",
        value: function getHeaders() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers = headers.set('x-rapidapi-host', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_host);
          headers = headers.set('x-rapidapi-key', src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].data_api_key);
          return headers;
        }
      }]);

      return HttpService;
    }();

    HttpService.ɵfac = function HttpService_Factory(t) {
      return new (t || HttpService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    HttpService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HttpService,
      factory: HttpService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HttpService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/pages/common/category-card/category-card.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/common/category-card/category-card.component.ts ***!
    \***********************************************************************/

  /*! exports provided: CategoryCardComponent */

  /***/
  function srcAppPagesCommonCategoryCardCategoryCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryCardComponent", function () {
      return CategoryCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/view/", a1];
    };

    function CategoryCardComponent_section_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "article", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Last Update");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "article", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Deaths");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "article", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Recovered");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-icon", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\xA0Share Info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " \xA0More Details");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.data == null ? null : ctx_r5.data.lastUpdate, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.data == null ? null : ctx_r5.data.deaths, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.data == null ? null : ctx_r5.data.recovered, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r5.data == null ? null : ctx_r5.data.country));
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "invert": a0
      };
    };

    var CategoryCardComponent = /*#__PURE__*/function () {
      function CategoryCardComponent() {
        _classCallCheck(this, CategoryCardComponent);

        this.expanded = false;
      }

      _createClass(CategoryCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleBody",
        value: function toggleBody() {
          return this.expanded = !this.expanded;
        }
      }]);

      return CategoryCardComponent;
    }();

    CategoryCardComponent.ɵfac = function CategoryCardComponent_Factory(t) {
      return new (t || CategoryCardComponent)();
    };

    CategoryCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CategoryCardComponent,
      selectors: [["app-category-card"]],
      inputs: {
        data: "data"
      },
      decls: 27,
      vars: 8,
      consts: [[1, "category-card"], ["fxLayoutAlign", "space-between center", 1, "category-card__body", 3, "click"], ["fxLayout", "row nowrap", 1, "info-cards"], [1, "info-cards__item"], ["fxLayout", "column", 1, "info-cards__item-content"], [1, "info-cards__value"], [1, "info-cards__label"], ["fxLayoutAlign", "start center", "fxLayoutGap", "16px", 1, "category__action"], ["mat-icon-button", "", "role", "button", "aria-label", "More Details"], ["svgIcon", "arrow_down", 1, "category__action-toggle", 3, "ngClass"], ["class", "category-card__body", 4, "ngIf"], [1, "category-card__body"], ["fxFlex", "33.33", 1, "info-cards__item"], ["fxLayout", "row", "fxLayoutGap", "16px", "fxLayoutAlign", "center center", 1, "actions"], ["mat-button", ""], ["svgIcon", "share", 1, "category__action-icon"], ["mat-button", "", "routerLinkActive", "router-link-active", 3, "routerLink"], ["svgIcon", "share_new_tab", 1, "category__action-icon"]],
      template: function CategoryCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "article", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryCardComponent_Template_section_click_1_listener() {
            return ctx.toggleBody();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New cases");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "article", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "New deaths");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-icon", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CategoryCardComponent_section_26_Template, 29, 6, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data == null ? null : ctx.data.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.cases, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.new_cases, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data == null ? null : ctx.data.new_deaths, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.expanded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expanded);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutGapDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultFlexDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]],
      styles: [".category-card[_ngcontent-%COMP%] {\n  padding: 16px 24px;\n  margin: 8px 0;\n  border: 1px solid var(--text-light);\n  background-color: var(--background-light);\n}\n.category-card[_ngcontent-%COMP%]   .category__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  color: var(--text-primary);\n}\n.category-card[_ngcontent-%COMP%]   .category__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-light);\n}\n.category-card[_ngcontent-%COMP%]   .category__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--text-light);\n}\n.category-card[_ngcontent-%COMP%]   .category__action-toggle[_ngcontent-%COMP%] {\n  color: var(--text-primary);\n  transition: all 0.2s ease-in;\n}\n.category-card[_ngcontent-%COMP%]   .category__action-toggle.invert[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--accent);\n}\n.category-card[_ngcontent-%COMP%]:hover   .category__heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--accent);\n  font-weight: 600;\n}\n.category-card__body[_ngcontent-%COMP%] {\n  padding: 16px 0 0;\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__item[_ngcontent-%COMP%] {\n  padding: 8px;\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__item-content[_ngcontent-%COMP%] {\n  padding: 8px;\n  color: #fff;\n  background-color: var(--accent);\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__item[_ngcontent-%COMP%]:nth-child(1) {\n  padding-left: 0 !important;\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__item[_ngcontent-%COMP%]:nth-last-child(1) {\n  padding-right: 0 !important;\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__value[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.category-card__body[_ngcontent-%COMP%]   .info-cards__label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 300;\n  letter-spacing: 1px;\n}\n.category-card__body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  width: 100%;\n}\n.category-card__body[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  color: var(--text-light);\n  font-weight: 300;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29tbW9uL2NhdGVnb3J5LWNhcmQvRTpcXEZvcm1hdGlvblxcQ292aWQtMTlcXFN0YXRpc3RpcXVlL3NyY1xcYXBwXFxwYWdlc1xcY29tbW9uXFxjYXRlZ29yeS1jYXJkXFxjYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb21tb24vY2F0ZWdvcnktY2FyZC9jYXRlZ29yeS1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFDQSx5Q0FBQTtBQ0NKO0FERVk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0FDQWhCO0FERVk7RUFDSSxlQUFBO0VBQ0Esd0JBQUE7QUNBaEI7QURDZ0I7RUFDSSx3QkFBQTtBQ0NwQjtBRElZO0VBQ0ksMEJBQUE7RUFDQSw0QkFBQTtBQ0ZoQjtBREdnQjtFQUNJLHlCQUFBO0FDRHBCO0FETUk7RUFFSSwrQkFBQTtBQ0xSO0FEUWdCO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtBQ05wQjtBRFdJO0VBQ0ksaUJBQUE7QUNUUjtBRFdZO0VBQ0ksWUFBQTtBQ1RoQjtBRFVnQjtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUNScEI7QURVZ0I7RUFDSSwwQkFBQTtBQ1JwQjtBRFVnQjtFQUNJLDJCQUFBO0FDUnBCO0FEV1k7RUFDSSxnQkFBQTtBQ1RoQjtBRFdZO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNUaEI7QURZUTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ1ZaO0FEV1k7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0FDVGhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29tbW9uL2NhdGVnb3J5LWNhcmQvY2F0ZWdvcnktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeS1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDE2cHggMjRweDtcclxuICAgIG1hcmdpbjogOHB4IDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG4gICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAmX19oZWFkaW5nIHtcclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1saWdodCk7XHJcbiAgICAgICAgICAgICAgICBzdHJvbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmX19hY3Rpb24ge1xyXG4gICAgICAgICAgICAmLXRvZ2dsZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XHJcbiAgICAgICAgICAgICAgICAmLmludmVydCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIC8vIGJveC1zaGFkb3c6IDBweCA1cHggMTBweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4zODcpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWFjY2VudCk7XHJcbiAgICAgICAgLmNhdGVnb3J5IHtcclxuICAgICAgICAgICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9fYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAwIDA7XHJcbiAgICAgICAgLmluZm8tY2FyZHMge1xyXG4gICAgICAgICAgICAmX19pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgICAgICYtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9fdmFsdWUge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIi5jYXRlZ29yeS1jYXJkIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG4uY2F0ZWdvcnktY2FyZCAuY2F0ZWdvcnlfX2hlYWRpbmcgcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG59XG4uY2F0ZWdvcnktY2FyZCAuY2F0ZWdvcnlfX2hlYWRpbmcgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmNhdGVnb3J5LWNhcmQgLmNhdGVnb3J5X19oZWFkaW5nIHNwYW4gc3Ryb25nIHtcbiAgY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xufVxuLmNhdGVnb3J5LWNhcmQgLmNhdGVnb3J5X19hY3Rpb24tdG9nZ2xlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW47XG59XG4uY2F0ZWdvcnktY2FyZCAuY2F0ZWdvcnlfX2FjdGlvbi10b2dnbGUuaW52ZXJ0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cbi5jYXRlZ29yeS1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYWNjZW50KTtcbn1cbi5jYXRlZ29yeS1jYXJkOmhvdmVyIC5jYXRlZ29yeV9faGVhZGluZyBwIHtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2F0ZWdvcnktY2FyZF9fYm9keSB7XG4gIHBhZGRpbmc6IDE2cHggMCAwO1xufVxuLmNhdGVnb3J5LWNhcmRfX2JvZHkgLmluZm8tY2FyZHNfX2l0ZW0ge1xuICBwYWRkaW5nOiA4cHg7XG59XG4uY2F0ZWdvcnktY2FyZF9fYm9keSAuaW5mby1jYXJkc19faXRlbS1jb250ZW50IHtcbiAgcGFkZGluZzogOHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50KTtcbn1cbi5jYXRlZ29yeS1jYXJkX19ib2R5IC5pbmZvLWNhcmRzX19pdGVtOm50aC1jaGlsZCgxKSB7XG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xufVxuLmNhdGVnb3J5LWNhcmRfX2JvZHkgLmluZm8tY2FyZHNfX2l0ZW06bnRoLWxhc3QtY2hpbGQoMSkge1xuICBwYWRkaW5nLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XG59XG4uY2F0ZWdvcnktY2FyZF9fYm9keSAuaW5mby1jYXJkc19fdmFsdWUge1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhdGVnb3J5LWNhcmRfX2JvZHkgLmluZm8tY2FyZHNfX2xhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuLmNhdGVnb3J5LWNhcmRfX2JvZHkgLmFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXRlZ29yeS1jYXJkX19ib2R5IC5hY3Rpb25zIGJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-category-card',
          templateUrl: './category-card.component.html',
          styleUrls: ['./category-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        data: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/pages/statistiques/statistiques.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/pages/statistiques/statistiques.component.ts ***!
    \**************************************************************/

  /*! exports provided: StatistiquesComponent */

  /***/
  function srcAppPagesStatistiquesStatistiquesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatistiquesComponent", function () {
      return StatistiquesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! subsink */
    "./node_modules/subsink/dist/index.js");
    /* harmony import */


    var subsink__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(subsink__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_models_view_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/models/view-model */
    "./src/app/core/models/view-model.ts");
    /* harmony import */


    var src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/http.service */
    "./src/app/core/services/http.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _common_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../common/category-card/category-card.component */
    "./src/app/pages/common/category-card/category-card.component.ts");

    function StatistiquesComponent_ng_container_12_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-category-card", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r4 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", state_r4);
      }
    }

    function StatistiquesComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StatistiquesComponent_ng_container_12_div_1_Template, 2, 1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var districtData_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", districtData_r2);
      }
    }

    var StatistiquesComponent = /*#__PURE__*/function () {
      function StatistiquesComponent(httpService) {
        _classCallCheck(this, StatistiquesComponent);

        this.httpService = httpService;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_2__["SubSink"]();
      }

      _createClass(StatistiquesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.searchTerm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
          var data = this.httpService.getStat();
          this.districtData$ = data.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (states) {
            return states.countries_stat.map(function (item) {
              return new src_app_core_models_view_model__WEBPACK_IMPORTED_MODULE_4__["Covid19Model"](item.region, item.region, item.country_name, states.statistic_taken_at, item.cases, item.active_cases, 0, item.deaths, item.total_recovered, item.serious_critical, item.new_cases, item.new_deaths);
            });
          }));
          this.listenToSearchInputAndFilterData();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.unsubscribe();
        }
      }, {
        key: "listenToSearchInputAndFilterData",
        value: function listenToSearchInputAndFilterData() {
          var _this = this;

          this.subs.add(this.searchTerm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["debounceTime"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (data) {
            _this.districtData$ = _this.httpService.getStat().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (states) {
              return states.countries_stat.map(function (item) {
                return new src_app_core_models_view_model__WEBPACK_IMPORTED_MODULE_4__["Covid19Model"](item.region, item.region, item.country_name, states.statistic_taken_at, item.cases, item.active_cases, 0, item.deaths, item.total_recovered, item.serious_critical, item.new_cases, item.new_deaths);
              }).filter(function (item) {
                return item.country.toLowerCase().includes(data.toLowerCase());
              });
            }));
          })).subscribe());
        }
      }]);

      return StatistiquesComponent;
    }();

    StatistiquesComponent.ɵfac = function StatistiquesComponent_Factory(t) {
      return new (t || StatistiquesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]));
    };

    StatistiquesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatistiquesComponent,
      selectors: [["app-statistiques"]],
      decls: 14,
      vars: 4,
      consts: [[1, "state-info"], ["fxLayout", "row nowrap", "fxLayoutAlign", "space-between center", 1, "section__heading"], ["fxLayoutAlign", "start center", 1, "state-info__search"], ["fxFlex", "100", 1, "search__input"], ["svgIcon", "search", 1, "search__icon"], ["type", "text", "role", "searchbox", "aria-label", "Search", "placeholder", "Search state", "id", "search", 3, "formControl"], ["search", ""], [4, "ngIf"], ["class", "state-info__items", 4, "ngFor", "ngForOf"], [1, "state-info__items"], [3, "data"]],
      template: function StatistiquesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "State Wise");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mat-icon", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 5, 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, StatistiquesComponent_ng_container_12_Template, 2, 1, "ng-container", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx.searchTerm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 2, ctx.districtData$));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _common_category_card_category_card_component__WEBPACK_IMPORTED_MODULE_9__["CategoryCardComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]],
      styles: [".section__heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  padding: 0 8px;\n  margin: 0;\n  color: var(--text-primary);\n  margin-bottom: 8px;\n  position: relative;\n  flex: 0 0 25%;\n}\n.section__heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  height: 1px;\n  width: 90%;\n  margin-right: 8px;\n  background-color: var(--text-light);\n}\n.quick-stats[_ngcontent-%COMP%] {\n  padding: 0 16px;\n  margin: 16px 0;\n}\n.quick-stats__item[_ngcontent-%COMP%] {\n  flex: 50%;\n}\n.contact-section[_ngcontent-%COMP%] {\n  margin: 24px;\n}\n.contact-section[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.state-info[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  padding: 0 16px;\n}\n.state-info__items[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.state-info__search[_ngcontent-%COMP%] {\n  padding: 12px 0 0;\n}\n.state-info__search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.state-info__search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background-color: var(--background-light);\n  width: 100%;\n  border: 2px solid var(--accent);\n  box-sizing: border-box;\n  height: 50px;\n  color: var(--text-primary);\n  padding: 0 16px 0 40px;\n  line-height: 50px;\n}\n.state-info__search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border: 2px solid var(--accent);\n}\n.state-info__search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%]   .search__icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 8px;\n  height: 50px;\n  color: var(--accent);\n}\n.state-info__search[_ngcontent-%COMP%]   .search__input[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 50px;\n  position: absolute;\n  right: 0px;\n  bottom: 0;\n}\n.state-info__search[_ngcontent-%COMP%]   .search__button[_ngcontent-%COMP%] {\n  border-radius: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RhdGlzdGlxdWVzL0U6XFxGb3JtYXRpb25cXENvdmlkLTE5XFxTdGF0aXN0aXF1ZS9zcmNcXGFwcFxccGFnZXNcXHN0YXRpc3RpcXVlc1xcc3RhdGlzdGlxdWVzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zdGF0aXN0aXF1ZXMvc3RhdGlzdGlxdWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksY0FBQTtFQUNBLFNBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FDQVI7QURFSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQ0FSO0FESUE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0RKO0FERUk7RUFDSSxTQUFBO0FDQVI7QURJQTtFQUNJLFlBQUE7QUNESjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDREo7QURFSTtFQUNJLGdCQUFBO0FDQVI7QURFSTtFQUNJLGlCQUFBO0FDQVI7QURFWTtFQUNJLGtCQUFBO0FDQWhCO0FEQ2dCO0VBQ0kseUNBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUNDcEI7QURBb0I7RUFDSSxhQUFBO0VBQ0EsK0JBQUE7QUNFeEI7QURDZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNDcEI7QURDZ0I7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ0NwQjtBREVZO0VBQ0ksMkJBQUE7QUNBaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdGF0aXN0aXF1ZXMvc3RhdGlzdGlxdWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY3Rpb25fX2hlYWRpbmcge1xyXG4gICAgaDMge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZsZXg6IDAgMCAyNSU7XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtbGlnaHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucXVpY2stc3RhdHMge1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgICAmX19pdGVtIHtcclxuICAgICAgICBmbGV4OiA1MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5jb250YWN0LXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luOiAyNHB4O1xyXG4gICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgIH1cclxufVxyXG5cclxuLnN0YXRlLWluZm8ge1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIHBhZGRpbmc6IDAgMTZweDtcclxuICAgICZfX2l0ZW1zIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJl9fc2VhcmNoIHtcclxuICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcclxuICAgICAgICAuc2VhcmNoIHtcclxuICAgICAgICAgICAgJl9faW5wdXQge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNnB4IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc2VhcmNoX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLnNlY3Rpb25fX2hlYWRpbmcgaDMge1xuICBwYWRkaW5nOiAwIDhweDtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDAgMCAyNSU7XG59XG4uc2VjdGlvbl9faGVhZGluZyBzcGFuIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWxpZ2h0KTtcbn1cblxuLnF1aWNrLXN0YXRzIHtcbiAgcGFkZGluZzogMCAxNnB4O1xuICBtYXJnaW46IDE2cHggMDtcbn1cbi5xdWljay1zdGF0c19faXRlbSB7XG4gIGZsZXg6IDUwJTtcbn1cblxuLmNvbnRhY3Qtc2VjdGlvbiB7XG4gIG1hcmdpbjogMjRweDtcbn1cbi5jb250YWN0LXNlY3Rpb24gLmNvbnRhY3QtaW5mbyB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG5cbi5zdGF0ZS1pbmZvIHtcbiAgbWFyZ2luLXRvcDogNDBweDtcbiAgcGFkZGluZzogMCAxNnB4O1xufVxuLnN0YXRlLWluZm9fX2l0ZW1zIHtcbiAgbWFyZ2luLXRvcDogMjRweDtcbn1cbi5zdGF0ZS1pbmZvX19zZWFyY2gge1xuICBwYWRkaW5nOiAxMnB4IDAgMDtcbn1cbi5zdGF0ZS1pbmZvX19zZWFyY2ggLnNlYXJjaF9faW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3RhdGUtaW5mb19fc2VhcmNoIC5zZWFyY2hfX2lucHV0IGlucHV0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xuICBwYWRkaW5nOiAwIDE2cHggMCA0MHB4O1xuICBsaW5lLWhlaWdodDogNTBweDtcbn1cbi5zdGF0ZS1pbmZvX19zZWFyY2ggLnNlYXJjaF9faW5wdXQgaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQpO1xufVxuLnN0YXRlLWluZm9fX3NlYXJjaCAuc2VhcmNoX19pbnB1dCAuc2VhcmNoX19pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA4cHg7XG4gIGhlaWdodDogNTBweDtcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XG59XG4uc3RhdGUtaW5mb19fc2VhcmNoIC5zZWFyY2hfX2lucHV0IGJ1dHRvbiB7XG4gIGhlaWdodDogNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMHB4O1xuICBib3R0b206IDA7XG59XG4uc3RhdGUtaW5mb19fc2VhcmNoIC5zZWFyY2hfX2J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatistiquesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statistiques',
          templateUrl: './statistiques.component.html',
          styleUrls: ['./statistiques.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      data_url_old: 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats',
      data_host_old: 'covid-19-coronavirus-statistics.p.rapidapi.com',
      data_api_key_old: '17e8efc68cmsh25cb37a6dd0ad33p188d8bjsn153da8654eb7',
      world_stats_url_old: 'https://corona.lmao.ninja/all',
      news_url: 'https://newsapi.org/v2/everything?q=COVID&from=2020-03-16&sortBy=publishedAt&apiKey=7f3341405a794a92a026e79902e89593&pageSize=100&language=en',
      data_url: 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php',
      data_host: 'coronavirus-monitor.p.rapidapi.com',
      data_api_key: '17e8efc68cmsh25cb37a6dd0ad33p188d8bjsn153da8654eb7',
      world_stats_url: 'https://corona.lmao.ninja/all'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Formation\Covid-19\Statistique\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map