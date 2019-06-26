/**
 * SettingStore.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { observable } from "mobx";
import { Setting } from "../models/Setting";
import React from "react";

/**
 * Store for the setting model.
 */
class SettingStore {

    @observable item: Setting = new Setting();

}

const settingStore = new SettingStore();

export const SettingStoreContext = React.createContext(settingStore);

export default settingStore;