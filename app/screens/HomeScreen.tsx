/**
 * Homescreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions, NavigationScreenProps, NavigationScreenProp } from 'react-navigation';
import React from "react";
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import SettingsSummary from '../components/SettingsSummary'
import { SettingStore } from "../stores/SettingStore";
import { Instance } from "mobx-state-tree";

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
 * Interface with the properties for the settings screen.
 */
export interface IHomeScreenProps {
  settingStore : Instance<typeof SettingStore>
};


/**
 * Component for the home screen.
 */
export class HomeScreen extends React.PureComponent<IHomeScreenProps> {
    
    static _menu: any = null;

    static setMenuRef = (ref: null) => {
        HomeScreen._menu = ref;
    };

    static hideMenu = () => {
            HomeScreen._menu!.hide();
    };

    static showMenu = () => {
        if (HomeScreen && HomeScreen._menu)
            HomeScreen._menu!.show();
    };

    static readonly navigationOptions = ({ navigation }: NavigationScreenProps) => ({
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
        <View style={styles.rightPart}><SettingsSummary  setting={this.props.settingStore.item} /></View>
      </View>
    );
    }
  }
