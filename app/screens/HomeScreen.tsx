/**
 * Homescreen.tsx
 * Copyright Jan-Willem Spuij. All rights reserved.
 */
import { Button, Image, StyleSheet, Text, View } from "react-native";
import { NavigationStackScreenOptions, NavigationScreenProps } from 'react-navigation';
import React from "react";
import Menu, { MenuItem } from 'react-native-material-menu';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    flexDirection: 'row',
    alignItems: "center", 
    justifyContent: "space-evenly"
  },
  rightPart: {
    flex: .5,
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
 * Component for the home screen.
 */
export class HomeScreen extends React.Component {
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
             <Image
                source={require('../../assets/icon.png')}
        />
        </View>
        <View style={styles.rightPart}>
          <Text style={styles.title}>Chinese BMW head unit settings</Text>
          <View style={styles.settingsRow}><Text style={styles.settingsText}>Task killer:</Text><Text style={styles.settingsText}>enabled</Text></View>
          <View style={styles.settingsRow}><Text style={styles.settingsText}>Telephone mute for navigation:</Text><Text style={styles.settingsText}>enabled</Text></View>
          <View style={styles.settingsRow}><Text style={styles.settingsText}>Brightness intents:</Text><Text style={styles.settingsText}>enabled</Text></View>
        </View>
      </View>
    );
    }
  }
