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
        }], propDecorators: { startCamera: [], stopCamera: [], startScan: [], stopScan: [], imageValidation: [], getSessionState: [] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7OztHQVVHO0FBQ0gsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUFtRyxNQUFNLCtCQUErQixDQUFDO0FBQ2hKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7OztJQXNFTCwyQkFBMEI7Ozs7SUFLckQsNkJBQVcsYUFBQyxNQUF5QjtJQUtyQyw0QkFBVTtJQU9WLDJCQUFTO0lBS1QsMEJBQVE7SUFPUixpQ0FBZTtJQU9mLGlDQUFlO3lHQXBDSixPQUFPOzZHQUFQLE9BQU87Ozs7Ozs7O0lBQVAsT0FBTyxrQkFBUCxPQUFPO2tCQW5GcEI7RUFtRjZCLDBCQUEwQjtTQUExQyxPQUFPOzRGQUFQLE9BQU87a0JBRG5CLFVBQVU7OEJBTVQsV0FBVyxNQUtYLFVBQVUsTUFPVixTQUFTLE1BS1QsUUFBUSxNQU9SLGVBQWUsTUFPZixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHMge1xyXG4gIGxmaGY/OiBzdHJpbmc7XHJcbiAgYmxvb2RQcmVzc3VyZT86IHN0cmluZztcclxuICBtZWFuUnJpPzogc3RyaW5nO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBzdHJpbmc7XHJcbiAgcG5zSW5kZXg/OiBzdHJpbmc7XHJcbiAgcG5zWm9uZT86IHN0cmluZztcclxuICBwcnE/OiBzdHJpbmc7XHJcbiAgcHVsc2VSYXRlPzogc3RyaW5nO1xyXG4gIHJtc3NkPzogc3RyaW5nO1xyXG4gIHJyaT86IHN0cmluZztcclxuICByZXNwaXJhdGlvblJhdGU/OiBzdHJpbmc7XHJcbiAgc2QxPzogc3RyaW5nO1xyXG4gIHNkMj86IHN0cmluZztcclxuICBzZG5uPzogc3RyaW5nO1xyXG4gIHNuc0luZGV4Pzogc3RyaW5nO1xyXG4gIHNuc1pvbmU/OiBzdHJpbmc7XHJcbiAgc3RyZXNzTGV2ZWw/OiBzdHJpbmc7XHJcbiAgc3RyZXNzSW5kZXg/OiBzdHJpbmc7XHJcbiAgd2VsbG5lc3NJbmRleD86IHN0cmluZztcclxuICB3ZWxsbmVzc0xldmVsPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpdmVNZWFzdXJlbWVudHMge1xyXG4gIHB1bHNlUmF0ZT86IG51bWJlcjtcclxuICByZXNwaXJhdGlvblJhdGU/OiBudW1iZXI7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFydENhbWVyYU9wdGlvbiB7XHJcbiAgbGljZW5zZUtleT86IHN0cmluZztcclxuICBkdXJhdGlvbj86IG51bWJlcjtcclxuICBzZXg/OiBzdHJpbmc7XHJcbiAgYWdlPzogbnVtYmVyO1xyXG4gIHdlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJpbmFoIEFpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCaW5haEFpIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JpbmFoLWFpJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW5haEFpOiBCaW5haEFpKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYmluYWhBaS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmluYWhBaScsXHJcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fYmluYWhhaS5naXQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdCaW5haEFpJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9iaW5haGFpLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpbmFoQWkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydENhbWVyYShvcHRpb246IFN0YXJ0Q2FtZXJhT3B0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wQ2FtZXJhKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3RhcnRTY2FuKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBpbWFnZVZhbGlkYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBnZXRTZXNzaW9uU3RhdGUoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==