/**
 * Homescreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions, NavigationScreenProps } from 'react-navigation';
import React from "react";
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsSummary from '../components/SettingsSummary'

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'row',
    alignItems: "center", 
    justifyContent: "space-evenly",
    backgroundColor: '#fff'
  },
  rightPart: {
    flex: .5
  },
});

/**
 * Component for the home screen.
 */
export class HomeScreen extends React.PureComponent {
    static _menu = null;

    static setMenuRef = ref => {
        HomeScreen._menu = ref;
    };

    static hideMenu = () => {
        HomeScreen._menu.hide();
    };

    static showMenu = () => {
        HomeScreen._menu.show();
    };

    static navigationOptions = ({ navigation }: NavigationScreenProps) => ({
      title: 'Home',
      headerRight: (
        <Menu
          ref={HomeScreen.setMenuRef}
          button={<View style={{ width: 48, alignContent: "center" }}><Icon name="dots-vertical" size={30} color="#FFF" onPress={HomeScreen.showMenu} /></View>}
        >
          <MenuItem onPress={() => { HomeScreen.hideMenu(); navigation.navigate('Settings'); }}>Settings</MenuItem>
          <MenuItem onPress={() => { HomeScreen.hideMenu(); navigation.navigate('NavigationApps'); }}>Navigation apps</MenuItem>
        </Menu>
      ),
    })

    render() {
    return (
      <View style={styles.container}>
           <View> 
             <Image style={{width: 256, height: 256, borderRadius: 24 }}
                source={require('../../assets/icon.png')}
        />
        </View>
        <View style={styles.rightPart}><SettingsSummary /></View>   
      </View>
    );
    }
  }
