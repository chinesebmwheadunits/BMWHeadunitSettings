/**
 * AppStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { types } from "mobx-state-tree";
import { NavigationAppStore } from "./NavigationAppStore";
import { SettingStore } from "./SettingStore";

/**
 * Store for the setting model.
 */
export const AppStore = types.model({
	settingStore: SettingStore,
	navigationAppStore: NavigationAppStore,
});