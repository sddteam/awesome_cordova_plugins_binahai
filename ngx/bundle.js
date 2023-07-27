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
    BinahAi.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BinahAi.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi });
    BinahAi.pluginName = "BinahAi";
    BinahAi.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.pluginRef = "BinahAi";
    BinahAi.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.install = "";
    BinahAi.installVariables = [];
    BinahAi.platforms = ["Android"];
    BinahAi = tslib.__decorate([], BinahAi);
    return BinahAi;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, decorators: [{
            type: i0.Injectable
        }], propDecorators: { startCamera: [], stopCamera: [], startScan: [], stopScan: [], imageValidation: [] } });

exports.BinahAi = BinahAi;
