/**
 * SettingsSummary.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { observer } from 'mobx-react';
import { Settings } from "../models/Setting";
import { computed } from "mobx";
import { Instance } from "mobx-state-tree";

const styles = StyleSheet.create({
    settingsSummary: {
        flexDirection: 'column',
        alignItems: "baseline",
      },
    title: {
        fontSize: 20,
        lineHeight: 48,
        fontWeight: 'bold'
      },
    settingsRow: {
      flexDirection: 'row',
      alignItems: "center", 
      justifyContent: "center",
      height: 48,
    },
    settingsText:{
      flex: .3
    }
  });

/**
 * Class with state for the settings screen.
 */
 class SettingsSummaryState {
    taskKillerEnabled: boolean = true;
    telephoneMuteEnabled: boolean= true;
    brightnessIntentsEnabled: boolean = true;
}

/**
 * Interface for properties for settings summary.
 */
export interface SettingsSummaryProps {
    setting: Instance<typeof Settings>;
}
  
/**
 *  Settings summary Component. Displays a summery
 *  on the home screen.
 */
@observer
 export default class SettingsSummary extends React.PureComponent<SettingsSummaryProps, SettingsSummaryState> {

    /**
     * State.
     */
    readonly state = new SettingsSummaryState();

    @computed get taskKillerEnabled() {
        return this.props.setting.taskKillerEnabled ? 'enabled' : 'disabled';
    }
    @computed get telephoneMuteEnabled() {
        return this.props.setting.telephoneMuteEnabled ? 'enabled' : 'disabled';
    }
    @computed get brightnessIntentsEnabled() {
        return this.props.setting.brightnessIntentsEnabled ? 'enabled' : 'disabled';
    }

    render() {
        return (
            <View style={styles.settingsSummary}>
            <Text style={styles.title}>Chinese BMW head unit settings</Text>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Task killer:</Text><Text style={styles.settingsText}>{this.taskKillerEnabled}</Text></View>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Telephone mute for navigation:</Text><Text style={styles.settingsText}>{this.telephoneMuteEnabled}</Text></View>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Brightness intents:</Text><Text style={styles.settingsText}>{this.brightnessIntentsEnabled}</Text></View>
          </View>
        );
    }
 }