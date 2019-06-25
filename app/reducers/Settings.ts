/**
 * Settings.ts
 * Copyright Jan-Willem Spuij. All rights reserved.
 */

/**
 * Action types
 */
export const TASK_KILLER_UPDATED = 'TASK_KILLER_UPDATED'
export const TELEPHONE_MUTE_UPDATED = 'TELEPHONE_MUTE_UPDATED'
export const BRIGHTNESS_INTENTS_UPDATED = 'BRIGHTNESS_INTENTS_UPDATED'

/**
 * Settings state interface.
 */
export interface ISettingsState {
       taskKillerEnabled: boolean;
       telephoneMuteEnabled: boolean;
       brightnessIntentsEnabled: boolean;
}

/**
 * initial state.
 */
const initialState: ISettingsState = {
    taskKillerEnabled: false,
    telephoneMuteEnabled: true,
    brightnessIntentsEnabled: true
}

/**
 * Update action for the task killer value.
 */
interface TaskKillerUpdatedAction {
  type: typeof TASK_KILLER_UPDATED
  value: boolean
}

/**
 * Update action for the telephone muted value.
 */
interface TelephoneMutedUpdatedAction {
  type: typeof TELEPHONE_MUTE_UPDATED
  value: boolean
}

/**
 * Update action for the brightness intents value.
 */
interface BrightnessIntentsUpdatedAction {
    type: typeof BRIGHTNESS_INTENTS_UPDATED
    value: boolean
  }

/**
 * The different action types for this reducer.
 */
export type SettingsActionTypes = TaskKillerUpdatedAction | TelephoneMutedUpdatedAction | BrightnessIntentsUpdatedAction

/**
 * Reducer function for settings.
 * @param state The state to reduce.
 * @param action The action to perform.
 */
export function settingsReducer(state = initialState, action: SettingsActionTypes) : ISettingsState {
    switch (action.type)
    {
        case TASK_KILLER_UPDATED:
            return {
                taskKillerEnabled: action.value,
                brightnessIntentsEnabled : state.brightnessIntentsEnabled,
                telephoneMuteEnabled : state.telephoneMuteEnabled
            };
        case TELEPHONE_MUTE_UPDATED:
            return {
                taskKillerEnabled: state.taskKillerEnabled,
                brightnessIntentsEnabled : action.value,
                telephoneMuteEnabled : state.telephoneMuteEnabled
            };
        case BRIGHTNESS_INTENTS_UPDATED:
                return {
                    taskKillerEnabled: state.taskKillerEnabled,
                    brightnessIntentsEnabled : state.brightnessIntentsEnabled,
                    telephoneMuteEnabled : action.value,
                };
        default: return state;
    }
}