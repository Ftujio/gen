"use strict";
var FormChecker = (function () {
    function FormChecker() {
        this.message = "Check at least one checkbox!";
        this.numOfChecked = 0;
        this.checkboxes = [];
        console.log("FormControl loaded");
    }
    FormChecker.prototype.noneButtonState = function () {
        if (this.checkboxes != undefined) {
            return !this.checkboxes.some(function (_) { return _.state; });
        }
    };
    FormChecker.prototype.allButtonState = function () {
        if (this.numOfChecked != this.checkboxes.length) {
            return false;
        }
        else {
            return true;
        }
    };
    FormChecker.prototype.checkInputs = function (a, b) {
        if (a === void 0) { a = false; }
        if (b === void 0) { b = false; }
        this.numOfChecked = 0;
        var num = this.checkboxes.length;
        for (var _i = 0, _a = this.checkboxes; _i < _a.length; _i++) {
            var cb = _a[_i];
            if (cb.state == true) {
                this.numOfChecked++;
            }
            if (a && cb.state != true) {
                cb.state = true;
            }
            else if (b && cb.state == true) {
                cb.state = false;
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
    FormChecker.prototype.cbState = function (a) {
        if (a === void 0) { a = null; }
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
    FormChecker.prototype.checkAll = function () {
        this.checkInputs(true);
        this.cbState();
    };
    FormChecker.prototype.checkNone = function () {
        this.checkInputs(false, true);
        this.cbState();
    };
    return FormChecker;
}());
exports.FormChecker = FormChecker;
//# sourceMappingURL=form.control.js.map