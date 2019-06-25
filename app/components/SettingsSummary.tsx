
/**
 * SettingsSummary.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import React from "react";
import { StyleSheet, Text, View } from "react-native";

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
 *  Settings summary Component. Displays a summery
 *  on the home screen.
 */
 export default class SettingsSummary extends React.Component {
    taskKillerEnabled: boolean = true;
    telephoneMuteEnabled: boolean = true;
    brightnessIntentsEnabled: boolean = true;

    render() {
        return (
            <View style={styles.settingsSummary}>
            <Text style={styles.title}>Chinese BMW head unit settings</Text>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Task killer:</Text><Text style={styles.settingsText}>{this.taskKillerEnabled ? 'enabled' : 'disabled'}</Text></View>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Telephone mute for navigation:</Text><Text style={styles.settingsText}>{this.telephoneMuteEnabled ? 'enabled' : 'disabled'}</Text></View>
            <View style={styles.settingsRow}><Text style={styles.settingsText}>Brightness intents:</Text><Text style={styles.settingsText}>{this.brightnessIntentsEnabled ? 'enabled' : 'disabled'}</Text></View>
          </View>
        );
    }
 }