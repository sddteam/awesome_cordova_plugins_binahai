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
    BinahAiOriginal.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BinahAiOriginal.prototype.imageValidation = function () { return cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAiOriginal.pluginName = "BinahAi";
    BinahAiOriginal.plugin = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAiOriginal.pluginRef = "BinahAi";
    BinahAiOriginal.repo = "https://github.com/marhano/cordova_plugin_binahai.git";
    BinahAiOriginal.install = "";
    BinahAiOriginal.installVariables = [];
    BinahAiOriginal.platforms = ["Android"];
    return BinahAiOriginal;
}(AwesomeCordovaNativePlugin));
var BinahAi = new BinahAiOriginal();
export { BinahAi };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXFFTCwyQkFBMEI7Ozs7SUFHckQsNkJBQVcsYUFBQyxNQUF5QjtJQU9yQywyQkFBUztJQUtULDBCQUFRO0lBT1IsaUNBQWU7Ozs7Ozs7O2tCQXhHakI7RUFrRjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHN7XHJcbiAgbGZoZj86IHN0cmluZztcclxuICBibG9vZFByZXNzdXJlPzogc3RyaW5nO1xyXG4gIG1lYW5Scmk/OiBzdHJpbmc7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IHN0cmluZztcclxuICBwbnNJbmRleD86IHN0cmluZztcclxuICBwbnNab25lPzogc3RyaW5nO1xyXG4gIHBycT86IHN0cmluZztcclxuICBwdWxzZVJhdGU/OiBzdHJpbmc7XHJcbiAgcm1zc2Q/OiBzdHJpbmc7XHJcbiAgcnJpPzogc3RyaW5nO1xyXG4gIHJlc3BpcmF0aW9uUmF0ZT86IHN0cmluZztcclxuICBzZDE/OiBzdHJpbmc7XHJcbiAgc2QyPzogc3RyaW5nO1xyXG4gIHNkbm4/OiBzdHJpbmc7XHJcbiAgc25zSW5kZXg/OiBzdHJpbmc7XHJcbiAgc25zWm9uZT86IHN0cmluZztcclxuICBzdHJlc3NMZXZlbD86IHN0cmluZztcclxuICBzdHJlc3NJbmRleD86IHN0cmluZztcclxuICB3ZWxsbmVzc0luZGV4Pzogc3RyaW5nO1xyXG4gIHdlbGxuZXNzTGV2ZWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZU1lYXN1cmVtZW50c3tcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogbnVtYmVyO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRDYW1lcmFPcHRpb257XHJcbiAgbGljZW5zZUtleT86IHN0cmluZztcclxuICBzZXg/OiBzdHJpbmc7XHJcbiAgYWdlPzogbnVtYmVyO1xyXG4gIHdlaWdodD86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJpbmFoIEFpXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCaW5haEFpIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JpbmFoLWFpJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW5haEFpOiBCaW5haEFpKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYmluYWhBaS5mdW5jdGlvbk5hbWUoJ0hlbGxvJywgMTIzKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmluYWhBaScsXHJcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fYmluYWhhaS5naXQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdCaW5haEFpJywgLy8gdGhlIHZhcmlhYmxlIHJlZmVyZW5jZSB0byBjYWxsIHRoZSBwbHVnaW4sIGV4YW1wbGU6IG5hdmlnYXRvci5nZW9sb2NhdGlvblxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9iaW5haGFpLmdpdCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sIC8vIE9QVElPTkFMIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmluYWhBaSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0Q2FtZXJhKG9wdGlvbjogU3RhcnRDYW1lcmFPcHRpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyBcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydFNjYW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjsgXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcFNjYW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgXHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgaW1hZ2VWYWxpZGF0aW9uKCk6IE9ic2VydmFibGU8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==