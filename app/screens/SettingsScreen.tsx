/**
 * SettingsScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { NavigationStackScreenOptions, NavigationScreenProp } from 'react-navigation';
import ReactNativeSettingsPage, { 
    SectionRow, 
    SwitchRow,
	NavigateRow,
} from 'react-native-settings-page';
import React from "react";
import { observer } from "mobx-react";
import { SettingStore } from '../stores/SettingStore';
import { Instance } from 'mobx-state-tree';

/**
 * Interface with the properties for the settings screen.
 */
export interface ISettingsScreenProps {
    navigation: NavigationScreenProp<any,any>
    settingStore : Instance<typeof SettingStore>
  };


/**
 * Component for the settings screen.
 */
@observer
export class SettingsScreen extends React.PureComponent<ISettingsScreenProps> {
    static readonly navigationOptions: NavigationStackScreenOptions = {
        title: 'Settings',
      }

    /**
     * Handles task killer value change.
     */
    readonly taskKillerValueChange = (value: boolean) => {
        this.props.settingStore.item.updateTaskKillerEnabled(value);
    }

    /**
     * Handles Telephone mute value change.
     */
    readonly telephoneMuteValueChange = (value: boolean) => {
        this.props.settingStore.item.updateTaskKillerEnabled(value);
    }

    /**
     * Handles Brightness intents value change.
     */
    readonly brightnessIntentsValueChange = (value: boolean) => {
        this.props.settingStore.item.updateTaskKillerEnabled(value);
    }

  render() {
    return (
        <ReactNativeSettingsPage>
        <SectionRow text='Task killer'>
            <SwitchRow 
                text='Enable the task killer' 
                iconName='hand-stop-o'
                _value={this.props.settingStore.item.taskKillerEnabled}
                _onValueChange={this.taskKillerValueChange} />            
        </SectionRow>
        <SectionRow text='Navigation'>
            <SwitchRow 
                text='Enable telephone mute for navigation' 
                iconName='volume-off'
                _value={this.props.settingStore.item.telephoneMuteEnabled}
                _onValueChange={this.telephoneMuteValueChange} />
            <NavigateRow
                text='Select navigation apps'
                iconName={'map'}
                onPressCallback={() => { this.props.navigation.navigate("NavigationApps") }} />
        </SectionRow>
        <SectionRow text='Backlight'>
            <SwitchRow 
                text='Enable intents for controlling backlight' 
                iconName='comments-o'
                _value={this.props.settingStore.item.brightnessIntentsEnabled}
                _onValueChange={this.brightnessIntentsValueChange} />          
        </SectionRow>
    </ReactNativeSettingsPage>
    );
  }
}