import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface FinalResults {
    lfhf?: number;
    bloodPressure?: number;
    meanRri?: number;
    oxygenSaturation?: number;
    pnsIndex?: number;
    pnsZone?: number;
    prq?: number;
    pulseRate?: number;
    rmssd?: number;
    rri?: number;
    respirationRate?: number;
    sd1?: number;
    sd2?: number;
    sdnn?: number;
    snsIndex?: number;
    snsZone?: number;
    stressLevel?: number;
    stressIndex?: number;
    wellnessIndex?: number;
    wellnessLevel?: number;
}
export interface LiveMeasurements {
    pulseRate?: number;
    respirationRate?: number;
    oxygenSaturation?: number;
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
export declare class BinahAiOriginal extends AwesomeCordovaNativePlugin {
    startCamera(): Promise<any>;
    startScan(): Observable<LiveMeasurements>;
    stopScan(): Observable<FinalResults>;
}

export declare const BinahAi: BinahAiOriginal;