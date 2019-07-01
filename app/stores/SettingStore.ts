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
            self.item = settings.data;
        } catch (error) {
            console.error("Failed to fetch settings", error);
        }
    }),
    updateSettings: flow(function* updateSettings() {

        const axios : AxiosInstance = getEnv(self).axios;

        try {
            let settings = yield axios.post("/settings", self.item);
            self.item = settings.data;
        } catch (error) {
            console.error("Failed to post settings", error);
        }
    })
}));