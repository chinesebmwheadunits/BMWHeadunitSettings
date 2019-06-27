/**
 * Setting.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { types } from "mobx-state-tree"

/**
 * Setting model.
 */
export const Setting = types.model({
    taskKillerEnabled: false,
    telephoneMuteEnabled: true,
    brightnessIntentsEnabled: true,
}).actions(self => ({
    /**
     * Updates task killer enabled with a new value.
     * @param value the new value.
     */
    updateTaskKillerEnabled(value: boolean)
    {
        self.taskKillerEnabled = value;
    },

    /**
     * Updates telephone mute enabled with a new value.
     * @param value the new value.
     */
    updateTelephoneMuteEnabled(value: boolean)
    {
        self.telephoneMuteEnabled = value;
    },

    /**
     * Updates brightness intents enabled with a new value.
     * @param value the new value.
     */

     updateBrightnessIntentsEnabled(value: boolean)
    {
        self.brightnessIntentsEnabled = value;
    }
}));

