"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var type_1 = require("./type");
var TextConfig = /** @class */ (function () {
    function TextConfig(Filename) {
        this.RAWDATA = '';
        this.Filename = Filename;
        this.type = new type_1.TxtFileType(Filename);
        if (this.type.checkfile() == false) {
            throw new Error("this type is not txt file");
        }
        this.parseFile();
    }
    TextConfig.prototype.parseFile = function () {
        var _this = this;
        var file;
        var obj = {};
        try {
            file = fs_1.default.readFileSync(this.Filename);
        }
        catch (err) {
            console.log(err);
        }
        var lines = file === null || file === void 0 ? void 0 : file.toString().split('\n');
        if (lines != undefined) {
            lines.forEach(function (element) {
                var data = element.split('=');
                if ((data.length == 2) && (data != undefined)) {
                    obj[data[0].split(' ')[0]] = data[1];
                    if (_this.RAWDATA == '') {
                        _this.RAWDATA = data[0].split(' ')[0] + ":" + data[1] + "/";
                    }
                    else {
                        _this.RAWDATA += data[0].split(' ')[0] + ":" + data[1] + "/";
                    }
                }
            });
        }
        this.RAWOBJECT = obj;
        process.env.DATACONFIG = this.RAWDATA;
    };
    TextConfig.prototype.getItem = function (str) {
        try {
            return this.RAWOBJECT[str];
        }
        catch (error) {
            return "Error";
        }
    };
    TextConfig.prototype.getRAWDATA = function () {
        return this.RAWDATA;
    };
    return TextConfig;
}());
exports.TextConfig = TextConfig;
