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
    BinahAiOriginal.prototype.startCamera = function () { return cordova(this, "startCamera", {}, arguments); };
    BinahAiOriginal.prototype.startScan = function () { return cordova(this, "startScan", {}, arguments); };
    BinahAiOriginal.prototype.stopScan = function () { return cordova(this, "stopScan", {}, arguments); };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmluYWgtYWkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBWUEsT0FBTyx1Q0FBbUcsTUFBTSwrQkFBK0IsQ0FBQztBQUNoSixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQThETCwyQkFBMEI7Ozs7SUFHckQsNkJBQVc7SUFLWCwyQkFBUztJQUtULDBCQUFROzs7Ozs7OztrQkF4RlY7RUEyRTZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB0ZW1wbGF0ZSBmb3IgbmV3IHBsdWdpbiB3cmFwcGVyc1xyXG4gKlxyXG4gKiBUT0RPOlxyXG4gKiAtIEFkZC9DaGFuZ2UgaW5mb3JtYXRpb24gYmVsb3dcclxuICogLSBEb2N1bWVudCB1c2FnZSAoaW1wb3J0aW5nLCBleGVjdXRpbmcgbWFpbiBmdW5jdGlvbmFsaXR5KVxyXG4gKiAtIFJlbW92ZSBhbnkgaW1wb3J0cyB0aGF0IHlvdSBhcmUgbm90IHVzaW5nXHJcbiAqIC0gUmVtb3ZlIGFsbCB0aGUgY29tbWVudHMgaW5jbHVkZWQgaW4gdGhpcyB0ZW1wbGF0ZSwgRVhDRVBUIHRoZSBAUGx1Z2luIHdyYXBwZXIgZG9jcyBhbmQgYW55IG90aGVyIGRvY3MgeW91IGFkZGVkXHJcbiAqIC0gUmVtb3ZlIHRoaXMgbm90ZVxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQ29yZG92YUluc3RhbmNlLCBJbnN0YW5jZVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5hbFJlc3VsdHN7XHJcbiAgbGZoZj86IG51bWJlcjtcclxuICBibG9vZFByZXNzdXJlPzogbnVtYmVyO1xyXG4gIG1lYW5Scmk/OiBudW1iZXI7XHJcbiAgb3h5Z2VuU2F0dXJhdGlvbj86IG51bWJlcjtcclxuICBwbnNJbmRleD86IG51bWJlcjtcclxuICBwbnNab25lPzogbnVtYmVyO1xyXG4gIHBycT86IG51bWJlcjtcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcm1zc2Q/OiBudW1iZXI7XHJcbiAgcnJpPzogbnVtYmVyO1xyXG4gIHJlc3BpcmF0aW9uUmF0ZT86IG51bWJlcjtcclxuICBzZDE/OiBudW1iZXI7XHJcbiAgc2QyPzogbnVtYmVyO1xyXG4gIHNkbm4/OiBudW1iZXI7XHJcbiAgc25zSW5kZXg/OiBudW1iZXI7XHJcbiAgc25zWm9uZT86IG51bWJlcjtcclxuICBzdHJlc3NMZXZlbD86IG51bWJlcjtcclxuICBzdHJlc3NJbmRleD86IG51bWJlcjtcclxuICB3ZWxsbmVzc0luZGV4PzogbnVtYmVyO1xyXG4gIHdlbGxuZXNzTGV2ZWw/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGl2ZU1lYXN1cmVtZW50c3tcclxuICBwdWxzZVJhdGU/OiBudW1iZXI7XHJcbiAgcmVzcGlyYXRpb25SYXRlPzogbnVtYmVyO1xyXG4gIG94eWdlblNhdHVyYXRpb24/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCaW5haCBBaVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmluYWhBaSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iaW5haC1haSc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmluYWhBaTogQmluYWhBaSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJpbmFoQWkuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JpbmFoQWknLFxyXG4gIHBsdWdpbjogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXJoYW5vL2NvcmRvdmFfcGx1Z2luX2JpbmFoYWkuZ2l0JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnQmluYWhBaScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21hcmhhbm8vY29yZG92YV9wbHVnaW5fYmluYWhhaS5naXQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10gLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpbmFoQWkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydENhbWVyYSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyBcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydFNjYW4oKTogT2JzZXJ2YWJsZTxMaXZlTWVhc3VyZW1lbnRzPiB7XHJcbiAgICByZXR1cm47IFxyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0b3BTY2FuKCk6IFByb21pc2U8RmluYWxSZXN1bHRzPiB7XHJcbiAgICByZXR1cm47IFxyXG4gIH1cclxuXHJcbn1cclxuIl19