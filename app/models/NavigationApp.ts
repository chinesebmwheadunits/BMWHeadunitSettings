/**
 * NavigationApp.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

import { observable } from "mobx";
import { ImageSourcePropType } from "react-native";

/**
 * Navigation App model.
 */
export class NavigationApp {
    name: string = '';
    icon: ImageSourcePropType = {};
    package : string = '';
    @observable enabled: boolean = false;
}

