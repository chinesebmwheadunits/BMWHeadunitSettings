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
import { Setting } from "../models/Setting";
import { observer } from "mobx-react";

/**
 * Interface with the properties for the settings screen.
 */
export interface ISettingsScreenProps {
    navigation: NavigationScreenProp<any,any>
    setting : Setting
  };


/**
 * Component for the settings screen.
 */
@observer
export class SettingsScreen extends React.PureComponent<ISettingsScreenProps, any> {
    static readonly navigationOptions: NavigationStackScreenOptions = {
        title: 'Settings',
      }

    /**
     * Handles task killer value change.
     */
    readonly taskKillerValueChange = (value: boolean) => {
       this.props.setting.taskKillerEnabled = value;
    }

    /**
     * Handles Telephone mute value change.
     */
    readonly telephoneMuteValueChange = (value: boolean) => {
        this.props.setting.telephoneMuteEnabled = value;
    }

    /**
     * Handles Brightness intents value change.
     */
    readonly brightnessIntentsValueChange = (value: boolean) => {
        this.props.setting.brightnessIntentsEnabled = value;
    }

  render() {
    return (
        <ReactNativeSettingsPage>
        <SectionRow text='Task killer'>
            <SwitchRow 
                text='Enable the task killer' 
                iconName='hand-stop-o'
                _value={this.props.setting.taskKillerEnabled}
                _onValueChange={this.taskKillerValueChange} />            
        </SectionRow>
        <SectionRow text='Navigation'>
            <SwitchRow 
                text='Enable telephone mute for navigation' 
                iconName='volume-off'
                _value={this.props.setting.telephoneMuteEnabled}
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
                _value={this.props.setting.brightnessIntentsEnabled}
                _onValueChange={this.brightnessIntentsValueChange} />          
        </SectionRow>
    </ReactNativeSettingsPage>
    );
  }
}