/**
 * NavigationApp.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

import { types } from "mobx-state-tree";

/**
 * Navigation App model.
 */
export const NavigationApp = types.model({
    name: "",
    icon: "",
    package: types.identifier,
    enabled: false,
}).actions(self =>({

    /**
     * Update enabled value for this Navigation App.
     * @param value the new value.
     */
    updateEnabled(value: boolean)
    {
        self.enabled = value;
    }
}));

