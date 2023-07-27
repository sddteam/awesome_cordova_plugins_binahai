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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXFFTCwyQkFBMEI7Ozs7SUFHckQsNkJBQVcsYUFBQyxNQUF5QjtJQUtyQyw0QkFBVTtJQU9WLDJCQUFTO0lBS1QsMEJBQVE7SUFPUixpQ0FBZTs7Ozs7Ozs7a0JBN0dqQjtFQWtGNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXHJcbiAqXHJcbiAqIFRPRE86XHJcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xyXG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXHJcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcclxuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcclxuICogLSBSZW1vdmUgdGhpcyBub3RlXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmFsUmVzdWx0c3tcclxuICBsZmhmPzogc3RyaW5nO1xyXG4gIGJsb29kUHJlc3N1cmU/OiBzdHJpbmc7XHJcbiAgbWVhblJyaT86IHN0cmluZztcclxuICBveHlnZW5TYXR1cmF0aW9uPzogc3RyaW5nO1xyXG4gIHBuc0luZGV4Pzogc3RyaW5nO1xyXG4gIHBuc1pvbmU/OiBzdHJpbmc7XHJcbiAgcHJxPzogc3RyaW5nO1xyXG4gIHB1bHNlUmF0ZT86IHN0cmluZztcclxuICBybXNzZD86IHN0cmluZztcclxuICBycmk/OiBzdHJpbmc7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogc3RyaW5nO1xyXG4gIHNkMT86IHN0cmluZztcclxuICBzZDI/OiBzdHJpbmc7XHJcbiAgc2Rubj86IHN0cmluZztcclxuICBzbnNJbmRleD86IHN0cmluZztcclxuICBzbnNab25lPzogc3RyaW5nO1xyXG4gIHN0cmVzc0xldmVsPzogc3RyaW5nO1xyXG4gIHN0cmVzc0luZGV4Pzogc3RyaW5nO1xyXG4gIHdlbGxuZXNzSW5kZXg/OiBzdHJpbmc7XHJcbiAgd2VsbG5lc3NMZXZlbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaXZlTWVhc3VyZW1lbnRze1xyXG4gIHB1bHNlUmF0ZT86IG51bWJlcjtcclxuICByZXNwaXJhdGlvblJhdGU/OiBudW1iZXI7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFydENhbWVyYU9wdGlvbntcclxuICBsaWNlbnNlS2V5Pzogc3RyaW5nO1xyXG4gIHNleD86IHN0cmluZztcclxuICBhZ2U/OiBudW1iZXI7XHJcbiAgd2VpZ2h0PzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmluYWggQWlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJpbmFoQWkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmluYWgtYWknO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpbmFoQWk6IEJpbmFoQWkpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW5haEFpLmZ1bmN0aW9uTmFtZSgnSGVsbG8nLCAxMjMpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCaW5haEFpJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaGFuby9jb3Jkb3ZhX3BsdWdpbl9iaW5haGFpLmdpdCcsIC8vIG5wbSBwYWNrYWdlIG5hbWUsIGV4YW1wbGU6IGNvcmRvdmEtcGx1Z2luLWNhbWVyYVxyXG4gIHBsdWdpblJlZjogJ0JpbmFoQWknLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCaW5haEFpIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRDYW1lcmEob3B0aW9uOiBTdGFydENhbWVyYU9wdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IFxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BDYW1lcmEoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN0YXJ0U2NhbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuOyBcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyBcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBpbWFnZVZhbGlkYXRpb24oKTogT2JzZXJ2YWJsZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbn1cclxuIl19