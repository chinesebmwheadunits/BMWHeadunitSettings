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
            const result = yield axios.get("/settings");
            updateState(self, result.data);
        } catch (error) {
            console.error("Failed to fetch settings", error);
        }
    }),
    updateSettings: flow(function* updateSettings() {

        const axios : AxiosInstance = getEnv(self).axios;

        try {
            const result = yield axios.post("/settings", self.item);
            updateState(self, result.data);
        } catch (error) {
            console.error("Failed to post settings", error);
        }
    })
}));

function updateState(self: any, settings: Instance<typeof Settings>) {
    if (self.item.taskKillerEnabled != settings.taskKillerEnabled) {
        self.item.taskKillerEnabled = settings.taskKillerEnabled;
    }
    if (self.item.telephoneMuteEnabled != settings.telephoneMuteEnabled) {
        self.item.telephoneMuteEnabled = settings.telephoneMuteEnabled;
    }
    if (self.item.brightnessIntentsEnabled != settings.brightnessIntentsEnabled) {
        self.item.brightnessIntentsEnabled = settings.brightnessIntentsEnabled;
    }
}
