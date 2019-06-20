/**
 * SettingsScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions } from 'react-navigation';
import ReactNativeSettingsPage, { 
    SectionRow, 
    SwitchRow,
	NavigateRow,
	CheckRow
} from 'react-native-settings-page';
import React from "react";


/**
 * Component for the settings screen.
 */
export class SettingsScreen extends React.Component {
    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Settings',
      }
  render() {
    return (
        <ReactNativeSettingsPage>
        <SectionRow text='Task killer'>
            <SwitchRow 
                text='Enable the task killer' 
                iconName='hand-stop-o'
                _value={false}
                _onValueChange={() => { } } />
            
        </SectionRow>
        <SectionRow text='Navigation'>
            <SwitchRow 
                text='Enable telephone mute for navigation' 
                iconName='volume-off'
                _value={false}
                _onValueChange={() => { } } />
            <NavigateRow
                text='Select navigation apps'
                iconName={'map'}
                onPressCallback={() => { this.props.navigation.navigate("NavigationApps") }} />
        </SectionRow>
        <SectionRow text='Backlight'>
            <SwitchRow 
                text='Enable intents for controlling backlight' 
                iconName='comments-o'
                _value={false}
                _onValueChange={() => { } } />
            
        </SectionRow>
    </ReactNativeSettingsPage>
    );
  }
}