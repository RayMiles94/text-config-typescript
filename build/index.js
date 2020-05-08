"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var type_1 = require("./type");
var TextConfig = /** @class */ (function () {
    function TextConfig(Filename) {
        this.params = [];
        this.Filename = Filename;
        this.type = new type_1.TxtFileType(Filename);
        if (this.type.checkfile() == false) {
            throw new Error("this type is not txt file");
        }
        this.parseFile();
    }
    TextConfig.prototype.parseFile = function () {
        var file = fs_1.default.readFileSync(this.Filename);
    };
    return TextConfig;
}());
exports.TextConfig = TextConfig;
