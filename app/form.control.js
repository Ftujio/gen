"use strict";
var FormControl = (function () {
    function FormControl() {
        this.message = "Check at least one checkbox!";
        this.numOfChecked = 0;
        this.checkboxes = [];
        console.log("FromControl loaded");
    }
    FormControl.prototype.noneButtonState = function () {
        if (this.checkboxes != undefined) {
            return !this.checkboxes.some(function (_) { return _.state; });
        }
    };
    FormControl.prototype.allButtonState = function () {
        //return this.checkboxes.some(_ => _.state);
    };
    FormControl.prototype.checkInputs = function () {
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
    FormControl.prototype.cbState = function () {
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
    FormControl.prototype.checkAll = function () {
        console.log('pressed all button!');
        if (this.checkInputs() != 'all') {
        }
    };
    FormControl.prototype.checkNone = function () {
        console.log('pressed none button!');
    };
    return FormControl;
}());
exports.FormControl = FormControl;
//# sourceMappingURL=form.control.js.map