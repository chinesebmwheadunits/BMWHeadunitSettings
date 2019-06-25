/**
 * NavigationApps.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

import { NavigationAppsActionTypes, NAVIGATION_APP_UPDATED } from '../reducers/NavigationApps'

/**
 * Action for updating the enabled value of the navigationItem.
 * @param value a value indicating wether the task killer is enabled.
 */
export function updateNavigationAppItemEnabled(key: string, value: boolean): NavigationAppsActionTypes {
   return  {
     type: NAVIGATION_APP_UPDATED,
     key: key,
     value : value
   }
}
