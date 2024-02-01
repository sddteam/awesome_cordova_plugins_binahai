'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var i0__namespace = /*#__PURE__*/_interopNamespaceDefault(i0);

var BinahAi = /** @class */ (function (_super) {
    tslib.__extends(BinahAi, _super);
    function BinahAi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinahAi.prototype.startCamera = function (option) { return core.cordova(this, "startCamera", {}, arguments); };
    BinahAi.prototype.stopCamera = function () { return core.cordova(this, "stopCamera", {}, arguments); };
    BinahAi.prototype.startScan = function () { return core.cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAi.prototype.stopScan = function () { return core.cordova(this, "stopScan", {}, arguments); };
    BinahAi.prototype.imageValidation = function () { return core.cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAi.prototype.getSessionState = function () { return core.cordova(this, "getSessionState", { "observable": true }, arguments); };
    BinahAi.prototype.userFaceValidation = function () { return core.cordova(this, "userFaceValidation", { "observable": true }, arguments); };
    BinahAi.prototype.getAllMeasurement = function (userId) { return core.cordova(this, "getAllMeasurement", {}, arguments); };
    BinahAi.prototype.getMeasurementById = function (userId, measurementId) { return core.cordova(this, "getMeasurementById", {}, arguments); };
    BinahAi.prototype.getMeasurementByDateTime = function (userId, dateTime) { return core.cordova(this, "getMeasurementByDateTime", {}, arguments); };
    BinahAi.prototype.deleteMeasurementById = function (userId, measurementId) { return core.cordova(this, "deleteMeasurementById", {}, arguments); };
    BinahAi.prototype.shareResult = function (result) { return core.cordova(this, "shareResult", {}, arguments); };
    BinahAi.prototype.extractHealthData = function (userId) { return core.cordova(this, "extractHealthData", {}, arguments); };
    BinahAi.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BinahAi.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi });
    BinahAi.pluginName = "BinahAi";
    BinahAi.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.pluginRef = "BinahAi";
    BinahAi.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.install = "";
    BinahAi.installVariables = [];
    BinahAi.platforms = ["Android", "iOS"];
    BinahAi = tslib.__decorate([], BinahAi);
    return BinahAi;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCamera: [], stopCamera: [], startScan: [], stopScan: [], imageValidation: [], getSessionState: [], userFaceValidation: [], getAllMeasurement: [], getMeasurementById: [], getMeasurementByDateTime: [], deleteMeasurementById: [], shareResult: [], extractHealthData: [] } });

exports.BinahAi = BinahAi;
