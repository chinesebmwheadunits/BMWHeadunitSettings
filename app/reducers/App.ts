/**
 * App.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

import { combineReducers, Reducer } from 'redux';
import { settingsReducer, ISettingsState } from './Settings';
import { navigationAppsReducer, INavigationAppState} from './NavigationApps';

 export interface IApplicationSate {
     globalSettings: ISettingsState,
     navigationApps: INavigationAppState,
 } 

  const rootReducer: Reducer<IApplicationSate> = combineReducers(
      {
          globalSettings: settingsReducer,
          navigationApps: navigationAppsReducer
      }
  )

  export default rootReducer;