/**
 * NavigationAppScreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { StyleSheet, Text, Image, View, Switch, FlatList } from "react-native";
import { NavigationStackScreenOptions } from 'react-navigation';
import React from "react";

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
 * Component for the settings screen.
 */
export class NavigationAppScreen extends React.Component {
    static navigationOptions: NavigationStackScreenOptions = {
        title: 'Navigation Apps',
      }
  render() {
    return (
        <View style={styles.container}>
         <FlatList
          data={[
            {key: 'Maps', package: 'com.google.android.apps.maps', icon: require('../../assets/maps.png')},
            {key: 'Sygic', package: 'com.waze', icon: require('../../assets/sygic.png')},
            {key: 'Waze', package: 'com.sygic.aura', icon: require('../../assets/waze.png')}
          ]}
          renderItem={({item}) => <View style={styles.item}><Image style={styles.icon} source={item.icon} /><View style={styles.textView}><Text style={styles.title}>{item.key}</Text><Text style={styles.subtitle}>{item.package}</Text></View><Switch ></Switch></View>}
        />  
      </View>
    );
  }
}