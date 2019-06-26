/**
 * NavigationAppsScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, Image, View, Switch, FlatList } from "react-native";
import { NavigationStackScreenOptions } from 'react-navigation';
import React from "react";
import NavigationAppListItem from '../components/NavigationAppListItem'
import { observer, Observer } from "mobx-react";
import { NavigationAppStore } from "../stores/NavigationAppStore";
import { computed } from "mobx";
import { NavigationApp } from '../models/NavigationApp'

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
 * Interface for properties for the Navigation Apps Screen
 */
export interface INavigationAppsProps
{
    navigationAppStore: NavigationAppStore
}

/**
 * Component for the navigation app screen.
 */
@observer
export class NavigationAppsScreen extends React.Component<INavigationAppsProps, any> {

    @computed get navigationAppList() {
        return Array.from(this.props.navigationAppStore.items.values())
    } 

    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Navigation Apps',
      }

    keyExtractor = (item: NavigationApp, index: number) => item.package;

    valueChanged = (key: string, value: boolean) => {
        let navigationApp = this.props.navigationAppStore.items.get(key);
        if (navigationApp !== undefined)
        {
            navigationApp.enabled = value;
        }
    };

    renderItem = ({item} : { item: NavigationApp}) => {
        return  <Observer>{() => (
            <NavigationAppListItem name={item.name} package={item.package} icon={item.icon} value={item.enabled} onValueChanged={this.valueChanged} />
            )}</Observer>;
    };

  render() {
    return (
        <View style={styles.container}>
         <FlatList
          data={this.navigationAppList}
          keyExtractor={this.keyExtractor}
          renderItem={this.renderItem}
        />  
      </View>
    );
  }
}