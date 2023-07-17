import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface FinalResults {
    lfhf?: string;
    bloodPressure?: string;
    meanRri?: string;
    oxygenSaturation?: string;
    pnsIndex?: string;
    pnsZone?: string;
    prq?: string;
    pulseRate?: string;
    rmssd?: string;
    rri?: string;
    respirationRate?: string;
    sd1?: string;
    sd2?: string;
    sdnn?: string;
    snsIndex?: string;
    snsZone?: string;
    stressLevel?: string;
    stressIndex?: string;
    wellnessIndex?: string;
    wellnessLevel?: string;
}
export interface LiveMeasurements {
    pulseRate?: number;
    respirationRate?: number;
    oxygenSaturation?: number;
}
export interface StartCameraOption {
    licenseKey?: string;
    sex?: string;
    age?: number;
    weight?: number;
}
/**
 * @name Binah Ai
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { BinahAi } from '@awesome-cordova-plugins/binah-ai';
 *
 *
 * constructor(private binahAi: BinahAi) { }
 *
 * ...
 *
 *
 * this.binahAi.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BinahAi extends AwesomeCordovaNativePlugin {
    startCamera(option: StartCameraOption): Promise<any>;
    startScan(): Observable<any>;
    stopScan(): Promise<any>;
    imageValidation(): Observable<any>;
}
