'use strict';

var tslib = require('tslib');
var i0 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

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
    BinahAi.prototype.functionName = function (arg1, arg2) { return core.cordova(this, "functionName", {}, arguments); };
    BinahAi.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, deps: null, target: i0__namespace.ɵɵFactoryTarget.Injectable });
    BinahAi.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi });
    BinahAi.pluginName = "BinahAi";
    BinahAi.plugin = "";
    BinahAi.pluginRef = "";
    BinahAi.repo = "";
    BinahAi.install = "";
    BinahAi.installVariables = [];
    BinahAi.platforms = [];
    BinahAi = tslib.__decorate([], BinahAi);
    return BinahAi;
}(core.AwesomeCordovaNativePlugin));
i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: BinahAi, decorators: [{
            type: i0.Injectable
        }], propDecorators: { functionName: [] } });

exports.BinahAi = BinahAi;
