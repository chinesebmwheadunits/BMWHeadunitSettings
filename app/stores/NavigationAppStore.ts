/**
 * NavigationAppStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { types } from "mobx-state-tree";
import { NavigationApp } from "../models/NavigationApp";

/**
 * Store for the setting model.
 */
export const NavigationAppStore = types.model({
    items: types.map(NavigationApp),
});

