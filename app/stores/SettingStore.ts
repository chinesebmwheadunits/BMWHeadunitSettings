/**
 * SettingStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Setting } from "../models/Setting";
import { types } from "mobx-state-tree";
/**
 * Store for the setting model.
 */
export const SettingStore = types.model({
    item: Setting,
});