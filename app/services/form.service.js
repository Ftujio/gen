"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var FormService = (function () {
    function FormService(http) {
        this.http = http;
        this.phenotypesUrl = 'http://private-de10f-seqpipe.apiary-mock.com/phenotypes';
    }
    FormService.prototype.getPhenotypes = function () {
        return this.http.get(this.phenotypesUrl).map(function (response) { return response.json(); });
    };
    FormService.prototype.getPresentInChild = function () {
        return this.http.get('http://localhost:3000/app/services/present.in.child.json').map(function (response) { return response.json(); });
    };
    FormService.prototype.getPresentInParent = function () {
        return this.http.get('http://localhost:3000/app/services/present.in.parent.json').map(function (response) { return response.json(); });
    };
    FormService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;
//# sourceMappingURL=form.service.js.map