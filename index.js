var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var BinahAiOriginal = /** @class */ (function (_super) {
    __extends(BinahAiOriginal, _super);
    function BinahAiOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BinahAiOriginal.prototype.startCamera = function (option) { return cordova(this, "startCamera", {}, arguments); };
    BinahAiOriginal.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    BinahAiOriginal.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BinahAiOriginal.prototype.imageValidation = function () { return cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.getSessionState = function () { return cordova(this, "getSessionState", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.userFaceValidation = function () { return cordova(this, "userFaceValidation", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.getAllMeasurement = function () { return cordova(this, "getAllMeasurement", {}, arguments); };
    BinahAiOriginal.prototype.getMeasurementById = function (measurementId) { return cordova(this, "getMeasurementById", {}, arguments); };
    BinahAiOriginal.prototype.getMeasurementByDateTime = function (dateTime) { return cordova(this, "getMeasurementByDateTime", {}, arguments); };
    BinahAiOriginal.prototype.deleteMeasurementById = function (measurementId) { return cordova(this, "deleteMeasurementById", {}, arguments); };
    BinahAiOriginal.prototype.shareResult = function (result) { return cordova(this, "shareResult", {}, arguments); };
    BinahAiOriginal.pluginName = "BinahAi";
    BinahAiOriginal.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAiOriginal.pluginRef = "BinahAi";
    BinahAiOriginal.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAiOriginal.install = "";
    BinahAiOriginal.installVariables = [];
    BinahAiOriginal.platforms = ["Android", "iOS"];
    return BinahAiOriginal;
}(AwesomeCordovaNativePlugin));
var BinahAi = new BinahAiOriginal();
export { BinahAi };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStFTCwyQkFBMEI7Ozs7SUFHckQsNkJBQVcsYUFBQyxNQUF5QjtJQUtyQyw0QkFBVTtJQU9WLDJCQUFTO0lBS1QsMEJBQVE7SUFPUixpQ0FBZTtJQU9mLGlDQUFlO0lBT2Ysb0NBQWtCO0lBS2xCLG1DQUFpQjtJQUtqQixvQ0FBa0IsYUFBQyxhQUFxQjtJQUt4QywwQ0FBd0IsYUFBQyxRQUFnQjtJQUt6Qyx1Q0FBcUIsYUFBQyxhQUFxQjtJQUszQyw2QkFBVyxhQUFDLE1BQWM7Ozs7Ozs7O2tCQTlKNUI7RUE0RjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHMge1xyXG4gIGxmaGY/OiBzaWduO1xyXG4gIGJsb29kUHJlc3N1cmU/OiBzaWduO1xyXG4gIG1lYW5Scmk/OiBzaWduO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBzaWduO1xyXG4gIHBuc0luZGV4Pzogc2lnbjtcclxuICBwbnNab25lPzogc2lnbjtcclxuICBwcnE/OiBzaWduO1xyXG4gIHB1bHNlUmF0ZT86IHNpZ247XHJcbiAgcm1zc2Q/OiBzaWduO1xyXG4gIHJyaT86IHNpZ247XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogc2lnbjtcclxuICBzZDE/OiBzaWduO1xyXG4gIHNkMj86IHNpZ247XHJcbiAgc2Rubj86IHNpZ247XHJcbiAgc25zSW5kZXg/OiBzaWduO1xyXG4gIHNuc1pvbmU/OiBzaWduO1xyXG4gIHN0cmVzc0xldmVsPzogc2lnbjtcclxuICBzdHJlc3NJbmRleD86IHNpZ247XHJcbiAgd2VsbG5lc3NJbmRleD86IHNpZ247XHJcbiAgd2VsbG5lc3NMZXZlbD86IHNpZ247XHJcbiAgaGVtb2dsb2Jpbj86IHNpZ247XHJcbiAgaGVtb2dsb2JpbkExYz86IHNpZ247XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2Ugc2lnbntcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsdWU6IGFueTtcclxuICBsZXZlbD86IHN0cmluZztcclxuICB1bmFtZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXZlTWVhc3VyZW1lbnRzIHtcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogbnVtYmVyO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRDYW1lcmFPcHRpb24ge1xyXG4gIGxpY2Vuc2VLZXk6IHN0cmluZztcclxuICBkdXJhdGlvbjogbnVtYmVyO1xyXG4gIHNleD86IHN0cmluZztcclxuICBhZ2U/OiBudW1iZXI7XHJcbiAgd2VpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmluYWggQWlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJpbmFoQWkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmluYWgtYWknO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpbmFoQWk6IEJpbmFoQWkpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW5haEFpLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCaW5haEFpJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9iaW5haGFpLmdpdCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0JpbmFoQWknLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmluYWhBaSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0Q2FtZXJhKG9wdGlvbjogU3RhcnRDYW1lcmFPcHRpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BDYW1lcmEoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydFNjYW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIGltYWdlVmFsaWRhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIGdldFNlc3Npb25TdGF0ZSgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHVzZXJGYWNlVmFsaWRhdGlvbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFsbE1lYXN1cmVtZW50KCk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRNZWFzdXJlbWVudEJ5SWQobWVhc3VyZW1lbnRJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldE1lYXN1cmVtZW50QnlEYXRlVGltZShkYXRlVGltZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlbGV0ZU1lYXN1cmVtZW50QnlJZChtZWFzdXJlbWVudElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc2hhcmVSZXN1bHQocmVzdWx0OiBzdHJpbmcpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=