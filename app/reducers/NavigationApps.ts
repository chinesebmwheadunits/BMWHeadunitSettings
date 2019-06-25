/**
 * NavigationApps.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

/**
 * Message types
 */
export const NAVIGATION_APP_UPDATED = 'NAVIGATION_APP_UPDATED'

/**
 * INavigationAppListItem interface.
 */
export interface INavigationAppListItem {
    icon: string;
    name: string;
    package: string;
    enabled: boolean;
 }

/**
 * INavigationApps interface.
 */
export interface INavigationAppState {
    items: INavigationAppListItem[]
 }

/**
 * initial state.
 */
const initialState: INavigationAppState = {
    items: []
}

/**
 * Update action for the task killer value.
 */
interface NavigationAppUpdatedAction {
  type: typeof NAVIGATION_APP_UPDATED
  key: string,
  value: boolean
}


/**
 * The different action types for this reducer.
 */
export type NavigationAppsActionTypes = NavigationAppUpdatedAction

/**
 * Reducer function for settings.
 * @param state The state to reduce.
 * @param action The action to perform.
 */
export function navigationAppsReducer(state = initialState, action: NavigationAppsActionTypes) : INavigationAppState {
    switch (action.type)
    {
        case NAVIGATION_APP_UPDATED:
            return {
                items: state.items.map(item =>
                    item.name === action.key ? {
                        icon: item.icon,
                        package: item.package,
                        name: item.name,
                        enabled: action.value
                    } : item
                )
            }
    }
}