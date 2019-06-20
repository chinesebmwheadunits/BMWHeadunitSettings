/**
 * NavigationAppScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions } from 'react-navigation';
import React from "react";

const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      alignItems: "center", 
      justifyContent: "center" 
    }
  });

/**
 * Component for the settings screen.
 */
export class NavigationAppScreen extends React.Component {
    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Navigation Apps',
      }
  render() {
    return (
      <View style={styles.container}>
        <Text>Navigation Apps Screen</Text>
      </View>
    );
  }
}