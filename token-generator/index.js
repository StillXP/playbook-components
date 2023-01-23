"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var supernova_sdk_1 = require("@supernovaio/supernova-sdk");
var fs = require("fs-extra");
var key = "sn.C6UbzvJkSekzq6gp2OpsK5W9wCxVSidR0uw9oHPjeeNRtMoSYcgPjTkiY6T4DYkZ42jg6h5heNACRucEJzfK2R8t02VX42SC";
var DS_ID = "3099";
var DS_VERSION_ID = "22321";
var BRAND_ID = "21956";
function getTokens() {
    return __awaiter(this, void 0, void 0, function () {
        var supernova, version, tokenTreeRoots, options, sdTool, sdRepresentation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    supernova = new supernova_sdk_1.Supernova(key, null, null);
                    return [4 /*yield*/, supernova.designSystemVersion(DS_ID, DS_VERSION_ID)];
                case 1:
                    version = _a.sent();
                    return [4 /*yield*/, version.tokenGroupTrees()];
                case 2:
                    tokenTreeRoots = _a.sent();
                    options = {
                        naming: supernova_sdk_1.JSONBuilderNamingOption.original,
                        includeBrandId: false,
                        includeComments: false,
                        brandId: null,
                        includeType: true,
                        includeRootTypeNodes: false,
                        type: null,
                        multifile: false
                    };
                    sdTool = new supernova_sdk_1.TokenJSONBuilder(supernova, version);
                    sdRepresentation = sdTool.styleDictionaryRepresentation(options);
                    sdRepresentation.then(function (result) {
                        console.log(result);
                        fs.writeJson("tokens.json", result);
                    });
                    return [2 /*return*/];
            }
        });
    });
}
getTokens();
