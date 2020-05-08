"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var type_1 = require("./type");
var TextConfig = /** @class */ (function () {
    function TextConfig(Filename) {
        this.Filename = Filename;
        this.type = new type_1.TxtFileType(Filename);
        if (this.type.checkfile() == false) {
            throw new Error("this type is not txt file");
        }
        this.parseFile();
    }
    TextConfig.prototype.parseFile = function () {
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
                if (data.length == 2) {
                    obj[data[0].split(' ')[0]] = data[1];
                }
            });
        }
        // todo : try to find solution
        process.env.DATACONFIG = obj;
        console.log(process.env.DATACONFIG);
    };
    return TextConfig;
}());
exports.TextConfig = TextConfig;
