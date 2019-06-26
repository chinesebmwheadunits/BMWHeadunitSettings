/**
 * NavigationAppStore.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { observable } from "mobx";
import { NavigationApp } from "../models/NavigationApp";
import React from "react";

/**
 * Store for the setting model.
 */
export class NavigationAppStore {

    @observable items = new Map<string, NavigationApp>();

}

const navigationAppStore = new NavigationAppStore();

export default navigationAppStore;