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
    BinahAi.prototype.startCamera = function (option) { return cordova(this, "startCamera", { "observable": true }, arguments); };
    BinahAi.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    BinahAi.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAi.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BinahAi.prototype.imageValidation = function () { return cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAi.prototype.getSessionState = function () { return cordova(this, "getSessionState", { "observable": true }, arguments); };
    BinahAi.prototype.userFaceValidation = function () { return cordova(this, "userFaceValidation", { "observable": true }, arguments); };
    BinahAi.prototype.getAllHistory = function () { return cordova(this, "getAllHistory", {}, arguments); };
    BinahAi.prototype.getHistoryById = function (measurementId) { return cordova(this, "getHistoryById", {}, arguments); };
    BinahAi.prototype.getHistoryByDateTime = function (dateTime) { return cordova(this, "getHistoryByDateTime", {}, arguments); };
    BinahAi.prototype.deleteHistoryById = function (userId) { return cordova(this, "deleteHistoryById", {}, arguments); };
    BinahAi.prototype.getVitalDescription = function () { return cordova(this, "getVitalDescription", {}, arguments); };
    BinahAi.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi, deps: null, target: i0.ɵɵFactoryTarget.Injectable });
    BinahAi.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi });
    BinahAi.pluginName = "BinahAi";
    BinahAi.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.pluginRef = "BinahAi";
    BinahAi.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAi.install = "";
    BinahAi.installVariables = [];
    BinahAi.platforms = ["Android", "iOS"];
    BinahAi = __decorate([], BinahAi);
    return BinahAi;
}(AwesomeCordovaNativePlugin));
export { BinahAi };
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: BinahAi, decorators: [{
            type: Injectable
        }], propDecorators: { startCamera: [], stopCamera: [], startScan: [], stopScan: [], imageValidation: [], getSessionState: [], userFaceValidation: [], getAllHistory: [], getHistoryById: [], getHistoryByDateTime: [], deleteHistoryById: [], getVitalDescription: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUFtRyxNQUFNLCtCQUErQixDQUFDO0FBQ2hKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQStFTCwyQkFBMEI7Ozs7SUFLckQsNkJBQVcsYUFBQyxNQUF5QjtJQUtyQyw0QkFBVTtJQU9WLDJCQUFTO0lBS1QsMEJBQVE7SUFPUixpQ0FBZTtJQU9mLGlDQUFlO0lBT2Ysb0NBQWtCO0lBS2xCLCtCQUFhO0lBS2IsZ0NBQWMsYUFBQyxhQUFxQjtJQUtwQyxzQ0FBb0IsYUFBQyxRQUFnQjtJQUtyQyxtQ0FBaUIsYUFBQyxNQUFjO0lBS2hDLHFDQUFtQjt5R0FwRVIsT0FBTzs2R0FBUCxPQUFPOzs7Ozs7OztJQUFQLE9BQU8sa0JBQVAsT0FBTztrQkE1RnBCO0VBNEY2QiwwQkFBMEI7U0FBMUMsT0FBTzs0RkFBUCxPQUFPO2tCQURuQixVQUFVOzhCQU1ULFdBQVcsTUFLWCxVQUFVLE1BT1YsU0FBUyxNQUtULFFBQVEsTUFPUixlQUFlLE1BT2YsZUFBZSxNQU9mLGtCQUFrQixNQUtsQixhQUFhLE1BS2IsY0FBYyxNQUtkLG9CQUFvQixNQUtwQixpQkFBaUIsTUFLakIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHMge1xyXG4gIGxmaGY/OiBzaWduO1xyXG4gIGJsb29kUHJlc3N1cmU/OiBzaWduO1xyXG4gIG1lYW5Scmk/OiBzaWduO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBzaWduO1xyXG4gIHBuc0luZGV4Pzogc2lnbjtcclxuICBwbnNab25lPzogc2lnbjtcclxuICBwcnE/OiBzaWduO1xyXG4gIHB1bHNlUmF0ZT86IHNpZ247XHJcbiAgcm1zc2Q/OiBzaWduO1xyXG4gIHJyaT86IHNpZ247XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogc2lnbjtcclxuICBzZDE/OiBzaWduO1xyXG4gIHNkMj86IHNpZ247XHJcbiAgc2Rubj86IHNpZ247XHJcbiAgc25zSW5kZXg/OiBzaWduO1xyXG4gIHNuc1pvbmU/OiBzaWduO1xyXG4gIHN0cmVzc0xldmVsPzogc2lnbjtcclxuICBzdHJlc3NJbmRleD86IHNpZ247XHJcbiAgd2VsbG5lc3NJbmRleD86IHNpZ247XHJcbiAgd2VsbG5lc3NMZXZlbD86IHNpZ247XHJcbiAgaGVtb2dsb2Jpbj86IHNpZ247XHJcbiAgaGVtb2dsb2JpbkExQz86IHNpZ247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2lnbntcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxuICBsZXZlbD86IHN0cmluZztcclxuICB1bmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXZlTWVhc3VyZW1lbnRzIHtcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogbnVtYmVyO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRDYW1lcmFPcHRpb24ge1xyXG4gIGxpY2Vuc2VLZXk6IHN0cmluZztcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIHNleD86IHN0cmluZztcclxuICBhZ2U/OiBudW1iZXI7XHJcbiAgd2VpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmluYWggQWlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJpbmFoQWkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmluYWgtYWknO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpbmFoQWk6IEJpbmFoQWkpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW5haEFpLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCaW5haEFpJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9iaW5haGFpLmdpdCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0JpbmFoQWknLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmluYWhBaSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN0YXJ0Q2FtZXJhKG9wdGlvbjogU3RhcnRDYW1lcmFPcHRpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BDYW1lcmEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydFNjYW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIGltYWdlVmFsaWRhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIGdldFNlc3Npb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHVzZXJGYWNlVmFsaWRhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFsbEhpc3RvcnkoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEhpc3RvcnlCeUlkKG1lYXN1cmVtZW50SWQ6IHN0cmluZyk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRIaXN0b3J5QnlEYXRlVGltZShkYXRlVGltZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlbGV0ZUhpc3RvcnlCeUlkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFZpdGFsRGVzY3JpcHRpb24oKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuIl19