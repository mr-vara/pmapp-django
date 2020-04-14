(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/components/project-list/project-list.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/add-project/add-project.component */ "./src/app/components/add-project/add-project.component.ts");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-edit/project-edit.component */ "./src/app/components/project-edit/project-edit.component.ts");
/* harmony import */ var _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/task-details/task-details.component */ "./src/app/components/task-details/task-details.component.ts");
/* harmony import */ var _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/task-edit/task-edit.component */ "./src/app/components/task-edit/task-edit.component.ts");
/* harmony import */ var _components_sub_task_details_sub_task_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/sub-task-details/sub-task-details.component */ "./src/app/components/sub-task-details/sub-task-details.component.ts");
/* harmony import */ var _components_sub_task_edit_sub_task_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/sub-task-edit/sub-task-edit.component */ "./src/app/components/sub-task-edit/sub-task-edit.component.ts");
/* harmony import */ var _components_add_sub_task_add_sub_task_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add-sub-task/add-sub-task.component */ "./src/app/components/add-sub-task/add-sub-task.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: '', redirectTo: 'projects', pathMatch: 'full' },
    { path: 'projects', component: _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_2__["ProjectListComponent"] },
    { path: 'project/add', component: _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_4__["AddProjectComponent"] },
    { path: 'project/:id', component: _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_3__["ProjectDetailsComponent"] },
    { path: 'project/:id/edit', component: _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEditComponent"] },
    { path: 'project/:id/task/add', component: _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_11__["AddTaskComponent"] },
    { path: 'project/:id/task/:taskId', component: _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_6__["TaskDetailsComponent"] },
    { path: 'project/:id/task/:taskId/edit', component: _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_7__["TaskEditComponent"] },
    { path: 'project/:id/task/:taskId/sub-task/add', component: _components_add_sub_task_add_sub_task_component__WEBPACK_IMPORTED_MODULE_10__["AddSubTaskComponent"] },
    { path: 'project/:id/task/:taskId/sub-task/:subTaskId', component: _components_sub_task_details_sub_task_details_component__WEBPACK_IMPORTED_MODULE_8__["SubTaskDetailsComponent"] },
    { path: 'project/:id/task/:taskId/sub-task/:subTaskId/edit', component: _components_sub_task_edit_sub_task_edit_component__WEBPACK_IMPORTED_MODULE_9__["SubTaskEditComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n    max-width: 45%;\n    margin: 30px auto;\n    background-color: #f9f9f9;\n}\n\nmat-toolbar a {\n    color: #FFF;\n    text-decoration: none;\n}\n\n@media screen and (max-width: 620px) {\n    .container {\n        max-width: 90%;\n        margin: 10px auto;\n        background-color: #f9f9f9;\n    }\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <mat-toolbar-row>\n    <a routerLink=\"projects\" class=\"nav-link\"><span>PM APP</span></a>\n    <span class=\"spacer\"></span>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pmapp';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/add-project/add-project.component */ "./src/app/components/add-project/add-project.component.ts");
/* harmony import */ var _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/project-details/project-details.component */ "./src/app/components/project-details/project-details.component.ts");
/* harmony import */ var _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/project-list/project-list.component */ "./src/app/components/project-list/project-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _observe_files_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./observe-files.directive */ "./src/app/observe-files.directive.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/project-edit/project-edit.component */ "./src/app/components/project-edit/project-edit.component.ts");
/* harmony import */ var _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/task-details/task-details.component */ "./src/app/components/task-details/task-details.component.ts");
/* harmony import */ var _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/task-edit/task-edit.component */ "./src/app/components/task-edit/task-edit.component.ts");
/* harmony import */ var _components_sub_task_details_sub_task_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/sub-task-details/sub-task-details.component */ "./src/app/components/sub-task-details/sub-task-details.component.ts");
/* harmony import */ var _components_sub_task_edit_sub_task_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/sub-task-edit/sub-task-edit.component */ "./src/app/components/sub-task-edit/sub-task-edit.component.ts");
/* harmony import */ var _components_add_sub_task_add_sub_task_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/add-sub-task/add-sub-task.component */ "./src/app/components/add-sub-task/add-sub-task.component.ts");
/* harmony import */ var _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/add-task/add-task.component */ "./src/app/components/add-task/add-task.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_add_project_add_project_component__WEBPACK_IMPORTED_MODULE_3__["AddProjectComponent"],
                _components_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailsComponent"],
                _components_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_5__["ProjectListComponent"],
                _observe_files_directive__WEBPACK_IMPORTED_MODULE_9__["FileInputValueAccessor"],
                _components_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_13__["ProjectEditComponent"],
                _components_task_details_task_details_component__WEBPACK_IMPORTED_MODULE_14__["TaskDetailsComponent"],
                _components_task_edit_task_edit_component__WEBPACK_IMPORTED_MODULE_15__["TaskEditComponent"],
                _components_sub_task_details_sub_task_details_component__WEBPACK_IMPORTED_MODULE_16__["SubTaskDetailsComponent"],
                _components_sub_task_edit_sub_task_edit_component__WEBPACK_IMPORTED_MODULE_17__["SubTaskEditComponent"],
                _components_add_sub_task_add_sub_task_component__WEBPACK_IMPORTED_MODULE_18__["AddSubTaskComponent"],
                _components_add_task_add_task_component__WEBPACK_IMPORTED_MODULE_19__["AddTaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_12__["DemoMaterialModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add-project/add-project.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/add-project/add-project.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-project/add-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-project/add-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <span>Add Project</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/projects\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"!submitted\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"project.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"project.description\" name=\"description\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>Duration</mat-label>\n      <input matInput placeholder=\"\" value=\"\" type=\"number\" required placeholder=\"\" [(ngModel)]=\"project.duration\" name=\"duration\">\n    </mat-form-field>\n\n    <input\n      type=\"file\"\n      class=\"form-control\"\n      id=\"avatar\"\n      required\n      (change)=\"onFileSelect($event)\"\n      name=\"avatar\"\n    /> <br>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"saveProject()\"\n    >\n    Submit\n    \n    </button>\n</div>\n<div *ngIf=\"submitted\" class=\"sub-container\">\n  <h4>You submitted successfully!</h4>\n  <button \n  mat-raised-button\n  aria-label=\"Button that displays a tooltip when focused or hovered over\"\n  (click)=\"newProject()\"\n  > Add </button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-project/add-project.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/add-project/add-project.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(formBuilder, projectService) {
        this.formBuilder = formBuilder;
        this.projectService = projectService;
        this.project = {
            name: '',
            description: '',
            duration: 0,
        };
        this.submitted = false;
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.avatarForm = this.formBuilder.group({
            image: ['']
        });
    };
    AddProjectComponent.prototype.onFileSelect = function (event) {
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.avatarForm.get('image').setValue(file);
        }
    };
    AddProjectComponent.prototype.saveProject = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('name', this.project.name);
        formData.append('description', this.project.description);
        formData.append('duration', this.project.duration.toString());
        formData.append('avatar', this.avatarForm.get('image').value);
        this.projectService.create(formData)
            .subscribe(function (response) {
            console.log(response);
            _this.submitted = true;
        }, function (error) {
            console.log(error);
        });
    };
    AddProjectComponent.prototype.newProject = function () {
        this.submitted = false;
        this.project = {
            name: '',
            description: '',
            duration: 0
        };
    };
    AddProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/components/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/components/add-project/add-project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/components/add-sub-task/add-sub-task.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/add-sub-task/add-sub-task.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-sub-task/add-sub-task.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/add-sub-task/add-sub-task.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <span>Add Sub Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ project }}/task/{{ subTask.task }}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"!submitted\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"subTask.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"subTask.description\" name=\"description\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>Start Date</mat-label>\n      <input matInput required [matDatepicker]=\"picker\" [(ngModel)]=\"subTask.start_date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>End Date</mat-label>\n      <input matInput required [matDatepicker]=\"picker2\" [(ngModel)]=\"subTask.end_date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"saveSubTask()\"\n    >\n    Submit\n    \n    </button>\n</div>\n<div *ngIf=\"submitted\" class=\"sub-container\">\n  <h4>You submitted successfully!</h4>\n  <button \n  mat-raised-button\n  aria-label=\"Button that displays a tooltip when focused or hovered over\"\n  (click)=\"newSubTask()\"\n  > Add </button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-sub-task/add-sub-task.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/add-sub-task/add-sub-task.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddSubTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubTaskComponent", function() { return AddSubTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/sub-task.service */ "./src/app/services/sub-task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddSubTaskComponent = /** @class */ (function () {
    function AddSubTaskComponent(subTaskService, router, util) {
        this.subTaskService = subTaskService;
        this.router = router;
        this.util = util;
        this.subTask = {
            task: '',
            name: '',
            description: '',
            start_date: '',
            end_date: ''
        };
        this.submitted = false;
        this.project = 0;
    }
    AddSubTaskComponent.prototype.ngOnInit = function () {
        this.subTask.task = this.router.snapshot.params["taskId"];
        this.project = this.router.snapshot.params["id"];
    };
    AddSubTaskComponent.prototype.saveSubTask = function () {
        var _this = this;
        var subTaskData = {
            task: this.subTask.task,
            name: this.subTask.name,
            description: this.subTask.description,
            start_date: this.util.formatDate(this.subTask.start_date),
            end_date: this.util.formatDate(this.subTask.end_date)
        };
        this.subTaskService.create(subTaskData)
            .subscribe(function (response) {
            console.log(response);
            _this.submitted = true;
        }, function (error) {
            console.log(error);
        });
    };
    AddSubTaskComponent.prototype.newSubTask = function () {
        this.submitted = false;
        this.subTask = {
            task: '',
            name: '',
            description: '',
            start_date: '',
            end_date: ''
        };
    };
    AddSubTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-sub-task',
            template: __webpack_require__(/*! ./add-sub-task.component.html */ "./src/app/components/add-sub-task/add-sub-task.component.html"),
            styles: [__webpack_require__(/*! ./add-sub-task.component.css */ "./src/app/components/add-sub-task/add-sub-task.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_1__["SubTaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], AddSubTaskComponent);
    return AddSubTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/add-task/add-task.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <span>Add Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ task.project }}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"!submitted\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"task.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"task.description\" name=\"description\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>Start Date</mat-label>\n      <input matInput required [matDatepicker]=\"picker\" [(ngModel)]=\"task.start_date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n      <mat-datepicker #picker></mat-datepicker>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>End Date</mat-label>\n      <input matInput required [matDatepicker]=\"picker2\" [(ngModel)]=\"task.end_date\">\n      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\n      <mat-datepicker #picker2></mat-datepicker>\n    </mat-form-field>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"saveTask()\"\n    >\n    Submit\n    \n    </button>\n</div>\n<div *ngIf=\"submitted\" class=\"sub-container\">\n  <h4>You submitted successfully!</h4>\n  <button \n  mat-raised-button\n  aria-label=\"Button that displays a tooltip when focused or hovered over\"\n  (click)=\"newTask()\"\n  > Add </button>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/add-task/add-task.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/add-task/add-task.component.ts ***!
  \***********************************************************/
/*! exports provided: AddTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTaskComponent", function() { return AddTaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddTaskComponent = /** @class */ (function () {
    function AddTaskComponent(taskService, router, util) {
        this.taskService = taskService;
        this.router = router;
        this.util = util;
        this.task = {
            project: '',
            name: '',
            description: '',
            start_date: '',
            end_date: ''
        };
        this.submitted = false;
    }
    AddTaskComponent.prototype.ngOnInit = function () {
        this.task.project = this.router.snapshot.params["id"];
    };
    AddTaskComponent.prototype.saveTask = function () {
        var _this = this;
        var taskData = {
            project: this.task.project,
            name: this.task.name,
            description: this.task.description,
            start_date: this.util.formatDate(this.task.start_date),
            end_date: this.util.formatDate(this.task.end_date)
        };
        this.taskService.create(taskData)
            .subscribe(function (response) {
            console.log(response);
            _this.submitted = true;
        }, function (error) {
            console.log(error);
        });
    };
    AddTaskComponent.prototype.newTask = function () {
        this.submitted = false;
        this.task = {
            project: this.task.project,
            name: '',
            description: '',
            start_date: '',
            end_date: ''
        };
    };
    AddTaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-task',
            template: __webpack_require__(/*! ./add-task.component.html */ "./src/app/components/add-task/add-task.component.html"),
            styles: [__webpack_require__(/*! ./add-task.component.css */ "./src/app/components/add-task/add-task.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]])
    ], AddTaskComponent);
    return AddTaskComponent;
}());



/***/ }),

/***/ "./src/app/components/project-details/project-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <span>Projects</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/projects\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card *ngIf=\"currentProject\">\n  <mat-card-header>\n    <img mat-card-avatar src=\"{{ currentProject.avatar.replace('/api/projects/'+currentProject.id+'/pmapp', '') }}\" alt=\"Project Avatar\">\n    <mat-card-title>{{ currentProject.name }}</mat-card-title>\n    <mat-card-subtitle>{{ currentProject.duration }} months</mat-card-subtitle>\n  </mat-card-header>\n  <mat-card-content>\n    <p> {{ currentProject.description }} </p>\n    <h3 *ngIf=\"currentProject.tasks && (currentProject.tasks.length > 0)\">Tasks</h3>\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let task of currentProject.tasks\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{ task.name }}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div> {{ task.description }} </div>\n        <mat-list>\n          <mat-list-item>\n            <mat-icon mat-list-icon matTooltip=\"Start Date\">date_range</mat-icon>\n            <div mat-line>Start date</div>\n            <div mat-line> {{task.start_date | date}} </div>\n          </mat-list-item>\n          <mat-list-item>\n            <mat-icon mat-list-icon matTooltip=\"End Date\">update</mat-icon>\n            <div mat-line>End date</div>\n            <div mat-line> {{task.end_date | date}} </div>\n          </mat-list-item>\n        </mat-list>\n        <mat-action-row>\n          <a routerLink=\"/project/{{currentProject.id}}/task/{{task.id}}\" mat-button color=\"primary\">VIEW MORE</a>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-card-content>\n  <mat-card-actions>\n    <div class=\"button-row\">\n      <a routerLink=\"/project/{{currentProject.id}}/task/add\" mat-icon-button aria-label=\" \" matTooltip=\"Add Task\">\n        <mat-icon>add_circle</mat-icon>\n      </a>\n      <a routerLink=\"/project/{{currentProject.id}}/edit\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Edit Project\">\n        <mat-icon>edit</mat-icon>\n      </a>\n      <button (click)=\"deleteProject()\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Delete Project\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/project-details/project-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/project-details/project-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(projectService, route, router, util) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentProject = null;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject(this.route.snapshot.params["id"]);
    };
    ProjectDetailsComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService.get(id)
            .subscribe(function (data) {
            _this.currentProject = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectDetailsComponent.prototype.deleteProject = function () {
        var _this = this;
        this.projectService.delete(this.currentProject.id)
            .subscribe(function (response) {
            console.log(response);
            _this.util.openSnackBar("Project Deleted.");
            _this.router.navigate(['/projects']);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/components/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/components/project-details/project-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\" *ngIf=\"currentProject\">\n  <mat-toolbar-row>\n    <span>Edit Project</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ currentProject.id }}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"currentProject\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentProject.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"currentProject.description\" name=\"description\"></textarea>\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>Duration</mat-label>\n      <input matInput placeholder=\"\" value=\"\" type=\"number\" required placeholder=\"\" [(ngModel)]=\"currentProject.duration\" name=\"duration\">\n    </mat-form-field>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"updateProject()\"\n    >\n    Submit\n    \n    </button>\n  </div>\n<div *ngIf=\"!currentProject\" class=\"sub-container\">\n    <h4>Project not found!</h4>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/project-edit/project-edit.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-edit/project-edit.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectEditComponent = /** @class */ (function () {
    function ProjectEditComponent(projectService, route, router, util) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentProject = null;
        this.message = '';
    }
    ProjectEditComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.getProject(this.route.snapshot.params["id"]);
    };
    ProjectEditComponent.prototype.getProject = function (id) {
        var _this = this;
        this.projectService.get(id)
            .subscribe(function (data) {
            delete data['tasks'];
            delete data['avatar'];
            _this.currentProject = data;
        }, function (error) {
            console.log(error);
        });
    };
    ProjectEditComponent.prototype.updateProject = function () {
        var _this = this;
        this.projectService.update(this.currentProject.id, this.currentProject)
            .subscribe(function (response) {
            console.log(response);
            _this.message = 'The project was updated successfully!';
            _this.util.openSnackBar(_this.message);
            _this.router.navigate(['/project/' + _this.currentProject.id]);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectEditComponent.prototype.deleteProject = function () {
        var _this = this;
        this.projectService.delete(this.currentProject.id)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/projects']);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-edit',
            template: __webpack_require__(/*! ./project-edit.component.html */ "./src/app/components/project-edit/project-edit.component.html"),
            styles: [__webpack_require__(/*! ./project-edit.component.css */ "./src/app/components/project-edit/project-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], ProjectEditComponent);
    return ProjectEditComponent;
}());



/***/ }),

/***/ "./src/app/components/project-list/project-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <mat-toolbar-row>\n    <span>Projects</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/add\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Add new project\" matTooltip=\"Add new project\">add_circle</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-list *ngIf=\"projects\">\n  <a mat-list-item routerLink=\"/project/{{ project.id }}\" *ngFor=\"let project of projects\">\n    <img matListAvatar src=\"{{ project.avatar.replace('/api/projects/pmapp', '') }}\" alt=\"Avatar\">\n    <div mat-line>{{project.name}}</div>\n    <div mat-line> {{project.duration}} months </div>\n  </a>\n</mat-list>\n\n<div class=\"sub-container\">\n  <div *ngIf=\"!projects\">\n    <span>No projects found</span><a mat-list-item href=\"/project/add\">Add new</a>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/project-list/project-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/project-list/project-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(projectService) {
        this.projectService = projectService;
        this.name = '';
    }
    ProjectListComponent.prototype.ngOnInit = function () {
        this.retrieveProjects();
    };
    ProjectListComponent.prototype.retrieveProjects = function () {
        var _this = this;
        this.projectService.getAll()
            .subscribe(function (data) {
            _this.projects = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    ProjectListComponent.prototype.refreshList = function () {
        this.retrieveProjects();
    };
    ProjectListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! ./project-list.component.html */ "./src/app/components/project-list/project-list.component.html"),
            styles: [__webpack_require__(/*! ./project-list.component.css */ "./src/app/components/project-list/project-list.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]])
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-task-details/sub-task-details.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/sub-task-details/sub-task-details.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sub-task-details/sub-task-details.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/sub-task-details/sub-task-details.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\" *ngIf=\"project && currentSubTask\">\n  <mat-toolbar-row>\n    <span>Sub Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ project }}/task/{{ currentSubTask.task }}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card *ngIf=\"currentSubTask\">\n  <mat-card-content>\n    <h3>{{ currentSubTask.name }}</h3>\n    <p> {{ currentSubTask.description }} </p>\n    <mat-list>\n      <mat-list-item>\n        <mat-icon mat-list-icon matTooltip=\"Start Date\">date_range</mat-icon>\n        <div mat-line>Start date</div>\n        <div mat-line> {{currentSubTask.start_date | date}} </div>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon matTooltip=\"End Date\">update</mat-icon>\n        <div mat-line>End date</div>\n        <div mat-line> {{currentSubTask.end_date | date}} </div>\n      </mat-list-item>\n    </mat-list>\n  </mat-card-content>\n  \n  <mat-card-actions>\n    <div class=\"button-row\">\n      <a routerLink=\"/project/{{project}}/task/{{currentSubTask.task}}/sub-task/{{currentSubTask.id}}/edit\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Edit Sub Task\">\n        <mat-icon>edit</mat-icon>\n      </a>\n      <button (click)=\"deleteSubTask()\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Delete Sub Task\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/sub-task-details/sub-task-details.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/sub-task-details/sub-task-details.component.ts ***!
  \***************************************************************************/
/*! exports provided: SubTaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTaskDetailsComponent", function() { return SubTaskDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sub-task.service */ "./src/app/services/sub-task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubTaskDetailsComponent = /** @class */ (function () {
    function SubTaskDetailsComponent(subTaskService, route, router, util) {
        this.subTaskService = subTaskService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentSubTask = null;
        this.project = null;
    }
    SubTaskDetailsComponent.prototype.ngOnInit = function () {
        this.project = this.route.snapshot.params["id"];
        this.getSubTask(this.route.snapshot.params["subTaskId"]);
    };
    SubTaskDetailsComponent.prototype.getSubTask = function (id) {
        var _this = this;
        this.subTaskService.get(id)
            .subscribe(function (data) {
            _this.currentSubTask = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    SubTaskDetailsComponent.prototype.deleteSubTask = function () {
        var _this = this;
        this.subTaskService.delete(this.currentSubTask.id)
            .subscribe(function (response) {
            console.log(response);
            _this.util.openSnackBar("Task Deleted.");
            _this.router.navigate(['/project/' + _this.project + '/task/' + _this.currentSubTask.task]);
        }, function (error) {
            console.log(error);
        });
    };
    SubTaskDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-task-details',
            template: __webpack_require__(/*! ./sub-task-details.component.html */ "./src/app/components/sub-task-details/sub-task-details.component.html"),
            styles: [__webpack_require__(/*! ./sub-task-details.component.css */ "./src/app/components/sub-task-details/sub-task-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_2__["SubTaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], SubTaskDetailsComponent);
    return SubTaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/sub-task-edit/sub-task-edit.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/sub-task-edit/sub-task-edit.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/sub-task-edit/sub-task-edit.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/sub-task-edit/sub-task-edit.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\" *ngIf=\"projectId && currentSubTask\">\n  <mat-toolbar-row>\n    <span>Edit Sub Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ projectId }}/task/{{currentSubTask.task}}/sub-task/{{currentSubTask.id}}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"currentSubTask\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentSubTask.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"currentSubTask.description\" name=\"description\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Start Date</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentSubTask.start_date\" name=\"start_date\" type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>End Date</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentSubTask.end_date\" name=\"end_date\" type=\"text\">\n    </mat-form-field>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"updateSubTask()\"\n    >\n    Submit\n    \n    </button>\n</div>\n<div *ngIf=\"!currentSubTask\" class=\"sub-container\">\n  <h4>Task not found!</h4>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/sub-task-edit/sub-task-edit.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/sub-task-edit/sub-task-edit.component.ts ***!
  \*********************************************************************/
/*! exports provided: SubTaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTaskEditComponent", function() { return SubTaskEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/sub-task.service */ "./src/app/services/sub-task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubTaskEditComponent = /** @class */ (function () {
    function SubTaskEditComponent(subTaskService, route, router, util) {
        this.subTaskService = subTaskService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentSubTask = null;
        this.message = '';
        this.projectId = '';
    }
    SubTaskEditComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.projectId = this.route.snapshot.params["id"];
        this.getSubTask(this.route.snapshot.params["subTaskId"]);
    };
    SubTaskEditComponent.prototype.getSubTask = function (id) {
        var _this = this;
        this.subTaskService.get(id)
            .subscribe(function (data) {
            _this.currentSubTask = data;
        }, function (error) {
            console.log(error);
        });
    };
    SubTaskEditComponent.prototype.updateSubTask = function () {
        var _this = this;
        this.subTaskService.update(this.currentSubTask.id, this.currentSubTask)
            .subscribe(function (response) {
            console.log(response);
            _this.message = 'The task was updated successfully!';
            _this.util.openSnackBar(_this.message);
            _this.router.navigate(['/project/' + _this.projectId + '/task/' + _this.currentSubTask.task + '/sub-task/' + _this.currentSubTask.id]);
        }, function (error) {
            console.log(error);
        });
    };
    SubTaskEditComponent.prototype.deleteSubTask = function () {
        var _this = this;
        this.subTaskService.delete(this.currentSubTask.id)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/project/' + _this.route.snapshot.params["id"]]);
        }, function (error) {
            console.log(error);
        });
    };
    SubTaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sub-task-edit',
            template: __webpack_require__(/*! ./sub-task-edit.component.html */ "./src/app/components/sub-task-edit/sub-task-edit.component.html"),
            styles: [__webpack_require__(/*! ./sub-task-edit.component.css */ "./src/app/components/sub-task-edit/sub-task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_sub_task_service__WEBPACK_IMPORTED_MODULE_2__["SubTaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], SubTaskEditComponent);
    return SubTaskEditComponent;
}());



/***/ }),

/***/ "./src/app/components/task-details/task-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/task-details/task-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/task-details/task-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/task-details/task-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\" *ngIf=\"currentTask\">\n  <mat-toolbar-row>\n    <span>Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ currentTask.project }}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Example delete icon\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<mat-card *ngIf=\"currentTask\">\n  <mat-card-content>\n    <h3>{{ currentTask.name }}</h3>\n    <p> {{ currentTask.description }} </p>\n    <mat-list>\n      <mat-list-item>\n        <mat-icon mat-list-icon matTooltip=\"Start Date\">date_range</mat-icon>\n        <div mat-line>Start date</div>\n        <div mat-line> {{currentTask.start_date | date}} </div>\n      </mat-list-item>\n      <mat-list-item>\n        <mat-icon mat-list-icon matTooltip=\"End Date\">update</mat-icon>\n        <div mat-line>End date</div>\n        <div mat-line> {{currentTask.end_date | date}} </div>\n      </mat-list-item>\n    </mat-list>\n    <h3 *ngIf=\"currentTask.sub_tasks.length > 0\">Sub Tasks</h3>\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let sub_task of currentTask.sub_tasks\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            {{ sub_task.name }}\n          </mat-panel-title>\n        </mat-expansion-panel-header>\n        <div> {{ sub_task.description }} </div>\n        <mat-list>\n          <mat-list-item>\n            <mat-icon mat-list-icon matTooltip=\"Start Date\">date_range</mat-icon>\n            <div mat-line>Start date</div>\n            <div mat-line> {{sub_task.start_date | date}} </div>\n          </mat-list-item>\n          <mat-list-item>\n            <mat-icon mat-list-icon matTooltip=\"End Date\">update</mat-icon>\n            <div mat-line>End date</div>\n            <div mat-line> {{sub_task.end_date | date}} </div>\n          </mat-list-item>\n        </mat-list>\n        <mat-action-row>\n          <a routerLink=\"/project/{{currentTask.project}}/task/{{currentTask.id}}/sub-task/{{sub_task.id}}\" mat-button color=\"primary\">VIEW MORE</a>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </mat-card-content>\n  <mat-card-actions>\n    <div class=\"button-row\">\n      <a routerLink=\"/project/{{currentTask.project}}/task/{{currentTask.id}}/sub-task/add\" mat-icon-button aria-label=\" \" matTooltip=\"Add Sub Task\">\n        <mat-icon>add_circle</mat-icon>\n      </a>\n      <a routerLink=\"/project/{{currentTask.project}}/task/{{currentTask.id}}/edit\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Edit Task\">\n        <mat-icon>edit</mat-icon>\n      </a>\n      <button (click)=\"deleteTask()\" mat-icon-button color=\"primary\" aria-label=\"Example icon-button with a heart icon\" matTooltip=\"Delete Project\">\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n\n  </mat-card-actions>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/task-details/task-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/task-details/task-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: TaskDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailsComponent", function() { return TaskDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskDetailsComponent = /** @class */ (function () {
    function TaskDetailsComponent(taskService, route, router, util) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentTask = null;
        this.project = null;
    }
    TaskDetailsComponent.prototype.ngOnInit = function () {
        this.getTask(this.route.snapshot.params["taskId"]);
    };
    TaskDetailsComponent.prototype.getTask = function (id) {
        var _this = this;
        this.taskService.get(id)
            .subscribe(function (data) {
            _this.currentTask = data;
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    };
    TaskDetailsComponent.prototype.deleteTask = function () {
        var _this = this;
        this.taskService.delete(this.currentTask.id)
            .subscribe(function (response) {
            console.log(response);
            _this.util.openSnackBar("Task Deleted.");
            _this.router.navigate(['/project/' + _this.currentTask.project]);
        }, function (error) {
            console.log(error);
        });
    };
    TaskDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-details',
            template: __webpack_require__(/*! ./task-details.component.html */ "./src/app/components/task-details/task-details.component.html"),
            styles: [__webpack_require__(/*! ./task-details.component.css */ "./src/app/components/task-details/task-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], TaskDetailsComponent);
    return TaskDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/task-edit/task-edit.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/task-edit/task-edit.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/task-edit/task-edit.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/task-edit/task-edit.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\" *ngIf=\"projectId && currentTask\">\n  <mat-toolbar-row>\n    <span>Edit Task</span>\n    <span class=\"spacer\"></span>\n    <a routerLink=\"/project/{{ projectId }}/task/{{currentTask.id}}\"><mat-icon class=\"icon\" aria-hidden=\"false\" aria-label=\"Cancel\" matTooltip=\"Cancel\">cancel</mat-icon></a>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div class=\"container\">\n  <div *ngIf=\"currentTask\" class=\"mat-form\">\n    <mat-form-field class=\"full-width\">\n      <mat-label>Name</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentTask.name\" name=\"name\" type=\"text\">\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Description</mat-label>\n      <textarea matInput required placeholder=\"\" [(ngModel)]=\"currentTask.description\" name=\"description\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field class=\"full-width\">\n      <mat-label>Start Date</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentTask.start_date\" name=\"start_date\" type=\"text\">\n    </mat-form-field>\n\n    <mat-form-field class=\"full-width\">\n      <mat-label>End Date</mat-label>\n      <input matInput required placeholder=\"\" [(ngModel)]=\"currentTask.end_date\" name=\"end_date\" type=\"text\">\n    </mat-form-field>\n\n    <button \n      mat-raised-button\n      style=\"margin: 30px 0px\"\n      aria-label=\"Button that displays a tooltip when focused or hovered over\"\n      (click)=\"updateTask()\"\n    >\n    Submit\n    \n    </button>\n</div>\n<div *ngIf=\"!currentTask\" class=\"sub-container\">\n  <h4>Task not found!</h4>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/task-edit/task-edit.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/task-edit/task-edit.component.ts ***!
  \*************************************************************/
/*! exports provided: TaskEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEditComponent", function() { return TaskEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskEditComponent = /** @class */ (function () {
    function TaskEditComponent(taskService, route, router, util) {
        this.taskService = taskService;
        this.route = route;
        this.router = router;
        this.util = util;
        this.currentTask = null;
        this.message = '';
        this.projectId = '';
    }
    TaskEditComponent.prototype.ngOnInit = function () {
        this.message = '';
        this.projectId = this.route.snapshot.params["id"];
        this.getTask(this.route.snapshot.params["taskId"]);
    };
    TaskEditComponent.prototype.getTask = function (id) {
        var _this = this;
        this.taskService.get(id)
            .subscribe(function (data) {
            delete data["sub_tasks"];
            _this.currentTask = data;
        }, function (error) {
            console.log(error);
        });
    };
    TaskEditComponent.prototype.updateTask = function () {
        var _this = this;
        this.taskService.update(this.currentTask.id, this.currentTask)
            .subscribe(function (response) {
            console.log(response);
            _this.message = 'The task was updated successfully!';
            _this.util.openSnackBar(_this.message);
            _this.router.navigate(['/project/' + _this.currentTask.project + '/task/' + _this.currentTask.id]);
        }, function (error) {
            console.log(error);
        });
    };
    TaskEditComponent.prototype.deleteTask = function () {
        var _this = this;
        this.taskService.delete(this.currentTask.id)
            .subscribe(function (response) {
            console.log(response);
            _this.router.navigate(['/project/' + _this.projectId]);
        }, function (error) {
            console.log(error);
        });
    };
    TaskEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-edit',
            template: __webpack_require__(/*! ./task-edit.component.html */ "./src/app/components/task-edit/task-edit.component.html"),
            styles: [__webpack_require__(/*! ./task-edit.component.css */ "./src/app/components/task-edit/task-edit.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])
    ], TaskEditComponent);
    return TaskEditComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/esm5/badge.es5.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm5/bottom-sheet.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/esm5/chips.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/esm5/progress-spinner.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/esm5/tree.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_3__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_4__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_5__["CdkTreeModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_12__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_13__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_17__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_18__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_19__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_21__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_22__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_23__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_25__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_26__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_27__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_29__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_30__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_31__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_32__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_33__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_34__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_35__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_36__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_37__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_38__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_39__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/observe-files.directive.ts":
/*!********************************************!*\
  !*** ./src/app/observe-files.directive.ts ***!
  \********************************************/
/*! exports provided: FileInputValueAccessor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileInputValueAccessor", function() { return FileInputValueAccessor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
var noop = function () {
    // ...
};
var FileInputValueAccessor = /** @class */ (function () {
    // I initialize the file-input value accessor service.
    function FileInputValueAccessor(elementRef) {
        this.elementRef = elementRef;
        // CAUTION: These will be called by Angular when rendering the View.
        this.onChangeCallback = noop;
        this.onTouchedCallback = noop;
    }
    FileInputValueAccessor_1 = FileInputValueAccessor;
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle changes to the file input element value made by the user. Instead of
    // pushing the "value," I push the underlying File or File[] references to the
    // calling context.
    FileInputValueAccessor.prototype.handleChange = function (files) {
        // If the input is set to allow MULTIPLE files, then always push an ARRAY of
        // files through to the calling context (even if it is empty).
        // --
        // NOTE: We are using Array.from() in order to create a proper Array from the
        // Array-like FileList collection.
        if (this.elementRef.nativeElement.multiple) {
            this.onChangeCallback(Array.from(files));
            // If the input is set to allow only a SINGLE file, then let's only push the
            // first file in the collection (or NULL if no file is available).
        }
        else {
            this.onChangeCallback(files.length ? files[0] : null);
        }
    };
    // I register the callback to be invoked when the value of the file input element
    // has been changed by the user.
    FileInputValueAccessor.prototype.registerOnChange = function (callback) {
        this.onChangeCallback = callback;
    };
    // I register the callback to be invoked when the file input element has been
    // "touched" by the user.
    FileInputValueAccessor.prototype.registerOnTouched = function (callback) {
        this.onTouchedCallback = callback;
    };
    // I set the disabled property of the file input element.
    FileInputValueAccessor.prototype.setDisabledState = function (isDisabled) {
        this.elementRef.nativeElement.disabled = isDisabled;
    };
    // I set the value property of the file input element.
    // --
    // CAUTION: Only a limited set of values can be used on file inputs.
    FileInputValueAccessor.prototype.writeValue = function (value) {
        if (value instanceof FileList) {
            this.elementRef.nativeElement.files = value;
        }
        else if (Array.isArray(value) && !value.length) {
            this.elementRef.nativeElement.files = null;
        }
        else if (value === null) {
            this.elementRef.nativeElement.files = null;
        }
        else {
            // Since we cannot manually construct a FileList instance, we have to ignore
            // any attempt to push a non-FileList instance into the input.
            if (console && console.warn && console.log) {
                console.warn("Ignoring attempt to assign non-FileList to input[type=file].");
                console.log("Value:", value);
            }
        }
    };
    var FileInputValueAccessor_1;
    FileInputValueAccessor = FileInputValueAccessor_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "input[type=file][ngModel][observeFiles]",
            host: {
                "(blur)": "onTouchedCallback()",
                "(change)": "handleChange( $event.target.files )"
            },
            // By overriding the NG_VALUE_ACCESSOR dependency-injection token at this level of
            // the component tree / hierarchical injectors, we are effectively replacing the
            // DefaultValueAccessor for this Input Element context. As such, when Angular looks
            // for a ControlValueAccessor implementation in the local dependency-injection
            // container, it will only find this one - the one that looks at the "FileList"
            // property, not the "value" property.
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
                    useExisting: FileInputValueAccessor_1,
                    multi: true
                    // NOTE: I _believe_ that because I am using Ahead-of-Time (AoT) compiling in
                    // this demo, I don't need to use the forwardRef() wrapper to reference the
                    // Class that hasn't been defined yet.
                }
            ]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], FileInputValueAccessor);
    return FileInputValueAccessor;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = 'https://awaaz-pmapp.herokuapp.com/api/projects';
var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
    }
    ProjectService.prototype.getAll = function () {
        return this.http.get(baseUrl + "/?format=json");
    };
    ProjectService.prototype.get = function (id) {
        return this.http.get(baseUrl + "/" + id + "/?format=json");
    };
    ProjectService.prototype.create = function (data) {
        return this.http.post(baseUrl + "/", data);
    };
    ProjectService.prototype.update = function (id, data) {
        return this.http.put(baseUrl + "/" + id + "/", data);
    };
    ProjectService.prototype.delete = function (id) {
        return this.http.delete(baseUrl + "/" + id + "/");
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/sub-task.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/sub-task.service.ts ***!
  \**********************************************/
/*! exports provided: SubTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubTaskService", function() { return SubTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = 'https://awaaz-pmapp.herokuapp.com/api/subtasks';
var SubTaskService = /** @class */ (function () {
    function SubTaskService(http) {
        this.http = http;
    }
    SubTaskService.prototype.getAll = function () {
        return this.http.get(baseUrl + "/?format=json");
    };
    SubTaskService.prototype.get = function (id) {
        return this.http.get(baseUrl + "/" + id + "/?format=json");
    };
    SubTaskService.prototype.create = function (data) {
        return this.http.post(baseUrl + "/", data);
    };
    SubTaskService.prototype.update = function (id, data) {
        return this.http.put(baseUrl + "/" + id + "/?format=json", data);
    };
    SubTaskService.prototype.delete = function (id) {
        return this.http.delete(baseUrl + "/" + id + "/?format=json");
    };
    SubTaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SubTaskService);
    return SubTaskService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var baseUrl = 'https://awaaz-pmapp.herokuapp.com/api/tasks';
var TaskService = /** @class */ (function () {
    function TaskService(http) {
        this.http = http;
    }
    TaskService.prototype.getAll = function () {
        return this.http.get(baseUrl + "/?format=json");
    };
    TaskService.prototype.get = function (id) {
        return this.http.get(baseUrl + "/" + id + "/?format=json");
    };
    TaskService.prototype.create = function (data) {
        return this.http.post(baseUrl + "/", data);
    };
    TaskService.prototype.update = function (id, data) {
        return this.http.put(baseUrl + "/" + id + "/?format=json", data);
    };
    TaskService.prototype.delete = function (id) {
        return this.http.delete(baseUrl + "/" + id + "/?format=json");
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/util.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/util.service.ts ***!
  \******************************************/
/*! exports provided: UtilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilService", function() { return UtilService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilService = /** @class */ (function () {
    function UtilService(_snackBar) {
        this._snackBar = _snackBar;
    }
    UtilService.prototype.openSnackBar = function (message) {
        this._snackBar.open(message, "Dismiss", {
            duration: 3000,
        });
    };
    UtilService.prototype.formatDate = function (dateString) {
        var date = dateString.getDate() < 10 ? '0' + dateString.getDate() : dateString.getDate();
        var month = dateString.getMonth() < 10 ? '0' + dateString.getMonth() : dateString.getMonth();
        var year = dateString.getFullYear();
        return year + "-" + month + "-" + date;
        // console.log(dateString);
        // if (dateString instanceof Date) {
        //   const date = dateString.getDate() < 10 ? '0' + dateString.getDate() : dateString.getDate();
        //   const month = dateString.getMonth() < 10 ? '0' + dateString.getMonth() : dateString.getMonth();
        //   const year = dateString.getFullYear();
        //   return year + "-" + month + "-" + date;
        // } else if (typeof dateString == 'string') {
        //   const dateArray = dateString.split('/');
        //   const date = dateArray[1].length === 1 ? '0' + dateArray[1] : dateArray[1];
        //   const month = dateArray[0].length === 1 ? '0' + dateArray[0] : dateArray[0];
        //   const year = dateArray[2];
        //   return year + "-" + month + "-" + date;
        // } else {
        //   return dateString;
        // }
    };
    UtilService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], UtilService);
    return UtilService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vara/Desktop/pmapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map