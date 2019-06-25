
/**
 * Settings.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

 import { SettingsActionTypes, TASK_KILLER_UPDATED, TELEPHONE_MUTE_UPDATED, BRIGHTNESS_INTENTS_UPDATED} from '../reducers/Settings'

 /**
  * Action for updating the Task Killer value.
  * @param value a value indicating wether the task killer is enabled.
  */
export function updateTaskKiller(value: boolean): SettingsActionTypes {
    return  {
      type: TASK_KILLER_UPDATED,
      value : value
    }
}

 /**
  * Action for updating the Telephone mute value.
  * @param value a value indicating wether the telephone mute is enabled.
  */
 export function updateTelephoneMute(value: boolean): SettingsActionTypes {
    return  {
      type: TELEPHONE_MUTE_UPDATED,
      value : value
    }
}

 /**
  * Action for updating the Brightness intents value.
  * @param value a value indicating wether the brightness intent is enabled.
  */
 export function updateBrightnessIntents(value: boolean): SettingsActionTypes {
    return  {
      type: BRIGHTNESS_INTENTS_UPDATED,
      value : value
    }
}