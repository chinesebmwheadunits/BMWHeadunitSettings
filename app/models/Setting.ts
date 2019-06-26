/**
 * Setting.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

import { observable } from "mobx";

/**
 * Setting model.
 */
export class Setting {
    @observable taskKillerEnabled = false;
    @observable telephoneMuteEnabled = true;
    @observable brightnessIntentsEnabled = true;
}

