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
    BinahAiOriginal.prototype.startCamera = function (option) { return cordova(this, "startCamera", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.stopCamera = function () { return cordova(this, "stopCamera", {}, arguments); };
    BinahAiOriginal.prototype.startScan = function () { return cordova(this, "startScan", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
    BinahAiOriginal.prototype.imageValidation = function () { return cordova(this, "imageValidation", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.getSessionState = function () { return cordova(this, "getSessionState", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.userFaceValidation = function () { return cordova(this, "userFaceValidation", { "observable": true }, arguments); };
    BinahAiOriginal.prototype.getAllHistory = function () { return cordova(this, "getAllHistory", {}, arguments); };
    BinahAiOriginal.prototype.getHistoryById = function () { return cordova(this, "getHistoryById", {}, arguments); };
    BinahAiOriginal.prototype.getHistoryByDateTime = function () { return cordova(this, "getHistoryByDateTime", {}, arguments); };
    BinahAiOriginal.prototype.deleteHistoryById = function () { return cordova(this, "deleteHistoryById", {}, arguments); };
    BinahAiOriginal.prototype.getVitalDescription = function () { return cordova(this, "getVitalDescription", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQStFTCwyQkFBMEI7Ozs7SUFLckQsNkJBQVcsYUFBQyxNQUF5QjtJQUtyQyw0QkFBVTtJQU9WLDJCQUFTO0lBS1QsMEJBQVE7SUFPUixpQ0FBZTtJQU9mLGlDQUFlO0lBT2Ysb0NBQWtCO0lBS2xCLCtCQUFhO0lBS2IsZ0NBQWM7SUFLZCxzQ0FBb0I7SUFLcEIsbUNBQWlCO0lBS2pCLHFDQUFtQjs7Ozs7Ozs7a0JBaEtyQjtFQTRGNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpcyBhIHRlbXBsYXRlIGZvciBuZXcgcGx1Z2luIHdyYXBwZXJzXHJcbiAqXHJcbiAqIFRPRE86XHJcbiAqIC0gQWRkL0NoYW5nZSBpbmZvcm1hdGlvbiBiZWxvd1xyXG4gKiAtIERvY3VtZW50IHVzYWdlIChpbXBvcnRpbmcsIGV4ZWN1dGluZyBtYWluIGZ1bmN0aW9uYWxpdHkpXHJcbiAqIC0gUmVtb3ZlIGFueSBpbXBvcnRzIHRoYXQgeW91IGFyZSBub3QgdXNpbmdcclxuICogLSBSZW1vdmUgYWxsIHRoZSBjb21tZW50cyBpbmNsdWRlZCBpbiB0aGlzIHRlbXBsYXRlLCBFWENFUFQgdGhlIEBQbHVnaW4gd3JhcHBlciBkb2NzIGFuZCBhbnkgb3RoZXIgZG9jcyB5b3UgYWRkZWRcclxuICogLSBSZW1vdmUgdGhpcyBub3RlXHJcbiAqXHJcbiAqL1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBDb3Jkb3ZhSW5zdGFuY2UsIEluc3RhbmNlUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmFsUmVzdWx0cyB7XHJcbiAgbGZoZj86IHNpZ247XHJcbiAgYmxvb2RQcmVzc3VyZT86IHNpZ247XHJcbiAgbWVhblJyaT86IHNpZ247XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IHNpZ247XHJcbiAgcG5zSW5kZXg/OiBzaWduO1xyXG4gIHBuc1pvbmU/OiBzaWduO1xyXG4gIHBycT86IHNpZ247XHJcbiAgcHVsc2VSYXRlPzogc2lnbjtcclxuICBybXNzZD86IHNpZ247XHJcbiAgcnJpPzogc2lnbjtcclxuICByZXNwaXJhdGlvblJhdGU/OiBzaWduO1xyXG4gIHNkMT86IHNpZ247XHJcbiAgc2QyPzogc2lnbjtcclxuICBzZG5uPzogc2lnbjtcclxuICBzbnNJbmRleD86IHNpZ247XHJcbiAgc25zWm9uZT86IHNpZ247XHJcbiAgc3RyZXNzTGV2ZWw/OiBzaWduO1xyXG4gIHN0cmVzc0luZGV4Pzogc2lnbjtcclxuICB3ZWxsbmVzc0luZGV4Pzogc2lnbjtcclxuICB3ZWxsbmVzc0xldmVsPzogc2lnbjtcclxuICBoZW1vZ2xvYmluPzogc2lnbjtcclxuICBoZW1vZ2xvYmluQTFDPzogc2lnbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBzaWdue1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWx1ZTogYW55O1xyXG4gIGxldmVsPzogc3RyaW5nO1xyXG4gIHVuYW1lPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpdmVNZWFzdXJlbWVudHMge1xyXG4gIHB1bHNlUmF0ZT86IG51bWJlcjtcclxuICByZXNwaXJhdGlvblJhdGU/OiBudW1iZXI7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdGFydENhbWVyYU9wdGlvbiB7XHJcbiAgbGljZW5zZUtleTogc3RyaW5nO1xyXG4gIGR1cmF0aW9uOiBudW1iZXI7XHJcbiAgc2V4Pzogc3RyaW5nO1xyXG4gIGFnZT86IG51bWJlcjtcclxuICB3ZWlnaHQ/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCaW5haCBBaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmluYWhBaSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iaW5haC1haSc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmluYWhBaTogQmluYWhBaSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJpbmFoQWkuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JpbmFoQWknLFxyXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnQmluYWhBaScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fYmluYWhhaS5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCaW5haEFpIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3RhcnRDYW1lcmEob3B0aW9uOiBTdGFydENhbWVyYU9wdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN0YXJ0U2NhbigpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgaW1hZ2VWYWxpZGF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgZ2V0U2Vzc2lvblN0YXRlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgdXNlckZhY2VWYWxpZGF0aW9uKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QWxsSGlzdG9yeSgpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SGlzdG9yeUJ5SWQoKTogUHJvbWlzZTxhbnk+e1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEhpc3RvcnlCeURhdGVUaW1lKCk6IFByb21pc2U8YW55PntcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWxldGVIaXN0b3J5QnlJZCgpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0Vml0YWxEZXNjcmlwdGlvbigpOiBQcm9taXNlPGFueT57XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=