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
var phenotypes_service_1 = require('./services/phenotypes.service');
var form_control_1 = require('./form.control');
var PhenotypeFormComponent = (function () {
    function PhenotypeFormComponent(phenotypesService) {
        this.phenotypesService = phenotypesService;
        // TODO: get the data from the API
        this.message = "Check at least one checkbox!";
        this.numOfChecked = 0;
        this.checkboxes = [];
        this.formControl = new form_control_1.FormControl;
    }
    PhenotypeFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phenotypesService.getPhenotypes().subscribe(function (data) { return _this.checkboxes = data; });
    };
    PhenotypeFormComponent.prototype.noneButtonState = function () {
        if (this.checkboxes != undefined) {
            return !this.checkboxes.some(function (_) { return _.state; });
        }
    };
    PhenotypeFormComponent.prototype.allButtonState = function () {
        //return this.checkboxes.some(_ => _.state);
    };
    PhenotypeFormComponent.prototype.checkInputs = function () {
        this.numOfChecked = 0;
        var num = this.checkboxes.length;
        for (var _i = 0, _a = this.checkboxes; _i < _a.length; _i++) {
            var cb = _a[_i];
            if (cb.state == true) {
                this.numOfChecked++;
            }
        }
        if (this.numOfChecked == 0) {
            return 'some';
        }
        else if (this.numOfChecked == num) {
            return 'all';
        }
        else {
            return 'none';
        }
    };
    // Prints the state of the form to the view
    PhenotypeFormComponent.prototype.cbState = function () {
        if (this.checkInputs() == 'some') {
            this.message = "Check at least one checkbox!";
        }
        else if (this.checkInputs() == 'all') {
            this.message = "All of them are checked!";
        }
        else {
            this.message = "Check all the checkboxes!";
        }
        //console.log("Found ", this.numOfChecked, " checkboxes checked.");
    };
    PhenotypeFormComponent.prototype.checkAll = function () {
        console.log('pressed all button!');
        if (this.checkInputs() != 'all') {
        }
    };
    PhenotypeFormComponent.prototype.checkNone = function () {
        console.log('pressed none button!');
    };
    PhenotypeFormComponent = __decorate([
        core_1.Component({
            selector: 'phenotype-form',
            templateUrl: 'app/templates/phenotype.form.component.html'
        }), 
        __metadata('design:paramtypes', [phenotypes_service_1.PhenotypesService])
    ], PhenotypeFormComponent);
    return PhenotypeFormComponent;
}());
exports.PhenotypeFormComponent = PhenotypeFormComponent;
//# sourceMappingURL=phenotype.form.component.js.map