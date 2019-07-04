/**
 * NavigationAppStore.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { types, flow, getEnv, Instance } from "mobx-state-tree";
import { NavigationApp } from "../models/NavigationApp";
import { AxiosInstance } from "axios";

/**
 * Store for the setting model.
 */
export const NavigationAppStore = types.model({
    items: types.map(NavigationApp),
})
.actions(self => ({
    addNavigationApp(navigationApp : Instance<typeof NavigationApp>)
    {
        self.items.set(navigationApp.package, navigationApp);
    },
    updateNavigationApp(navigationApp : Instance<typeof NavigationApp>) {
        const destination = self.items.get(navigationApp.package)!;

        if (destination.enabled != navigationApp.enabled) {
            destination.enabled = navigationApp.enabled;
        }
        if (destination.icon != navigationApp.icon) {
            destination.icon = navigationApp.icon;
        }
        if (destination.name != navigationApp.name) {
            destination.name = navigationApp.name;
        }
    },
    deleteNavigationApp(navigationApp : Instance<typeof NavigationApp>)
    {
        self.items.delete(navigationApp.package);
    }
}))
.actions(self => ({
    fetchNavigationApps: flow(function* fetchSettings() {
        const axios : AxiosInstance = getEnv(self).axios;

        try {
            const result = yield axios.get("/navigationapps");
            const navAppArray = result.data as (Instance<typeof NavigationApp>)[];

            navAppArray.forEach(element => {
                if(self.items.has(element.package))
                {                   
                    self.updateNavigationApp(element);                 
                } else 
                {
                    self.addNavigationApp(element);
                }
            });

            const navAppMap = new Map(navAppArray.map(element => [element.package, element]));

            self.items.forEach(element => {
                if (!navAppMap.has(element.package))
                {
                    self.deleteNavigationApp(element);
                }
            });

        } catch (error) {
            console.error("Failed to fetch navigation apps", error);
        }
    }),
}));




