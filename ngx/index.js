import { __decorate, __extends } from "tslib";
/**
 * This is a template for new plugin wrappers
 *
 * TODO:
 * - Add/Change information below
 * - Document usage (importing, executing main functionality)
 * - Remove any imports that you are not using
 * - Remove all the comments included in this template, EXCEPT the @Plugin wrapper docs and any other docs you added
 * - Remove this note
 *
 */
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
var BinahAi = /** @class */ (function (_super) {
    __extends(BinahAi, _super);
    function BinahAi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinahAi.prototype.startCamera = function () { return cordova(this, "startCamera", {}, arguments); };
    BinahAi.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAi.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BinahAi.prototype.imageValidation = function () { return cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAi.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BinahAi.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi });
    BinahAi.pluginName = "BinahAi";
    BinahAi.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.pluginRef = "BinahAi";
    BinahAi.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.install = "";
    BinahAi.installVariables = [];
    BinahAi.platforms = ["Android"];
    BinahAi = __decorate([], BinahAi);
    return BinahAi;
}(AwesomeCordovaNativePlugin));
export { BinahAi };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi, decorators: [{
            type: Injectable
        }], propDecorators: { startCamera: [], startScan: [], stopScan: [], imageValidation: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUFtRyxNQUFNLCtCQUErQixDQUFDO0FBQ2hKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQThETCwyQkFBMEI7Ozs7SUFHckQsNkJBQVc7SUFPWCwyQkFBUztJQUtULDBCQUFRO0lBT1IsaUNBQWU7eUdBdEJKLE9BQU87NkdBQVAsT0FBTzs7Ozs7Ozs7SUFBUCxPQUFPLGtCQUFQLE9BQU87a0JBM0VwQjtFQTJFNkIsMEJBQTBCO1NBQTFDLE9BQU87NEZBQVAsT0FBTztrQkFEbkIsVUFBVTs4QkFJVCxXQUFXLE1BT1gsU0FBUyxNQUtULFFBQVEsTUFPUixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHN7XHJcbiAgbGZoZj86IHN0cmluZztcclxuICBibG9vZFByZXNzdXJlPzogc3RyaW5nO1xyXG4gIG1lYW5Scmk/OiBzdHJpbmc7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IHN0cmluZztcclxuICBwbnNJbmRleD86IHN0cmluZztcclxuICBwbnNab25lPzogc3RyaW5nO1xyXG4gIHBycT86IHN0cmluZztcclxuICBwdWxzZVJhdGU/OiBzdHJpbmc7XHJcbiAgcm1zc2Q/OiBzdHJpbmc7XHJcbiAgcnJpPzogc3RyaW5nO1xyXG4gIHJlc3BpcmF0aW9uUmF0ZT86IHN0cmluZztcclxuICBzZDE/OiBzdHJpbmc7XHJcbiAgc2QyPzogc3RyaW5nO1xyXG4gIHNkbm4/OiBzdHJpbmc7XHJcbiAgc25zSW5kZXg/OiBzdHJpbmc7XHJcbiAgc25zWm9uZT86IHN0cmluZztcclxuICBzdHJlc3NMZXZlbD86IHN0cmluZztcclxuICBzdHJlc3NJbmRleD86IHN0cmluZztcclxuICB3ZWxsbmVzc0luZGV4Pzogc3RyaW5nO1xyXG4gIHdlbGxuZXNzTGV2ZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZU1lYXN1cmVtZW50c3tcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogbnVtYmVyO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCaW5haCBBaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmluYWhBaSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iaW5haC1haSc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmluYWhBaTogQmluYWhBaSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJpbmFoQWkuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JpbmFoQWknLFxyXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnQmluYWhBaScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fYmluYWhhaS5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpbmFoQWkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyBcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydFNjYW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjsgXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgaW1hZ2VWYWxpZGF0aW9uKCk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==