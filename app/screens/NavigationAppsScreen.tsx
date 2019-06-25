/**
 * NavigationAppsScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, Image, View, Switch, FlatList } from "react-native";
import { NavigationStackScreenOptions } from 'react-navigation';
import React from "react";
import NavigationAppListItem from '../components/NavigationAppListItem'
import { array } from "prop-types";

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     paddingTop: 22
    },
    
    item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: "center", 
    justifyContent: "flex-start",
      paddingLeft: 8,
      paddingRight: 8,
      height: 80,
    },
    icon: { 
        height: 64, 
        width: 64
    },
    textView:
    {
        padding: 16,
        flex: 1,
        flexDirection: 'column'
    },
    title: {
        fontSize: 20,
      },
    subtitle: {
    fontSize: 18,
    color: '#AAA'
    },
  })

/**
 * Screen state for the NavigationApp screen.
 */
 class NavigationAppsScreenState {
    list = 
     [
        {key: 'Maps', package: 'com.google.android.apps.maps', icon: require('../../assets/maps.png'), enabled: true},
        {key: 'Sygic', package: 'com.waze', icon: require('../../assets/sygic.png'), enabled: false},
        {key: 'Waze', package: 'com.sygic.aura', icon: require('../../assets/waze.png'), enabled: true}
      ];
 }
  
/**
 * Component for the navigation app screen.
 */
export class NavigationAppsScreen extends React.Component<object, NavigationAppsScreenState> {
    
    readonly state = new NavigationAppsScreenState();

    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Navigation Apps',
      }

    valueChanged = (name: string, value: boolean) => {
        this.setState({ list: this.state.list.map(item => item.key == name ? { key: item.key, package: item.package, icon: item.icon, enabled: value } : item )});
    };


  render() {
    return (
        <View style={styles.container}>
         <FlatList
          data={this.state.list}
          renderItem={({item}) => <NavigationAppListItem name={item.key} package={item.package} icon={item.icon} value={item.enabled} onValueChanged={this.valueChanged} />}
        />  
      </View>
    );
  }
}