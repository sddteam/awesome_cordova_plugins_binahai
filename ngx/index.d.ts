import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
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
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    functionName(arg1: string, arg2: number): Promise<any>;
}
