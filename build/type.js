"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TxtFileType = /** @class */ (function () {
    function TxtFileType(filename) {
        this.filename = filename;
    }
    TxtFileType.prototype.checkfile = function () {
        // create type
        var type = this.filename.split('.');
        if (type[type.length - 1] == 'txt') {
            return true;
        }
        return false;
    };
    return TxtFileType;
}());
exports.TxtFileType = TxtFileType;
