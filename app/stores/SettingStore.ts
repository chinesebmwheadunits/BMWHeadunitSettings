/**
 * SettingStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Settings } from "../models/Setting";
import { types, getParent, Instance, flow, getEnv } from "mobx-state-tree";
import { AxiosInstance} from 'axios';

/**
 * Store for the setting model.
 */
export const SettingStore = types.model({
    item: Settings,
}).actions(self => ({
    afterAttach() {
        this.fetchSettings()
    },
    fetchSettings: flow(function* fetchSettings() {

        const axios : AxiosInstance = getEnv(self).axios;

        try {
            let settings = yield axios.get("/settings");
            // ... yield can be used in async/await style
            self.item = settings.data;
        } catch (error) {
            // ... including try/catch error handling
            console.error("Failed to fetch settings", error);
        }
    })
}));