/**
 * SettingStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Settings } from "../models/Settings";
import { types, getParent, Instance, flow, getEnv } from "mobx-state-tree";
import { AxiosInstance, AxiosResponse} from 'axios';

/**
 * Store for the setting model.
 */
export const SettingStore = types.model({
    item: Settings,
}).actions(self => ({
    fetchSettings: flow(function* fetchSettings() {

        const axios : AxiosInstance = getEnv(self).axios;

        try {
            const result = yield axios.get("/settings");
            updateState(self.item, result.data);
        } catch (error) {
            console.error("Failed to fetch settings", error);
        }
    }),
    updateSettings: flow(function* updateSettings() {

        const axios : AxiosInstance = getEnv(self).axios;

        try {
            const result = yield axios.post("/settings", self.item);
            updateState(self.item, result.data);
        } catch (error) {
            console.error("Failed to post settings", error);
        }
    })
}));

/**
 * Updates the state based on a fetched item.
 * @param destination The destination item
 * @param source The source item.
 */
function updateState(destination: Instance<typeof Settings>, source: Instance<typeof Settings>) {
    if (destination.taskKillerEnabled != source.taskKillerEnabled) {
        destination.taskKillerEnabled = source.taskKillerEnabled;
    }
    if (destination.telephoneMuteEnabled != source.telephoneMuteEnabled) {
        destination.telephoneMuteEnabled = source.telephoneMuteEnabled;
    }
    if (destination.brightnessIntentsEnabled != source.brightnessIntentsEnabled) {
        destination.brightnessIntentsEnabled = source.brightnessIntentsEnabled;
    }
}
