import React from 'react';
import { NavigationScreenProp, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { NavigationAppsScreen } from './app/screens/NavigationAppsScreen';
import { useScreens } from 'react-native-screens';
import { AppStore } from './app/stores/AppStore';
import { SettingStore } from './app/stores/SettingStore';
import { NavigationAppStore } from './app/stores/NavigationAppStore';
import { Setting } from './app/models/Setting';

useScreens();

const settingStore = SettingStore.create({ item : Setting.create() });
const navigationAppStore = NavigationAppStore.create({ items: {
  'com.google.android.apps.maps': {name: 'Maps', package: 'com.google.android.apps.maps', icon: './assets/maps.png', enabled: false},
  'com.waze': {name: 'Waze', package: 'com.waze', icon: './assets/waze.png', enabled: true},
  'com.sygic.aura' : {name: 'Sygic', package: 'com.sygic.aura', icon: './assets/sygic.png', enabled: false}
} });
const appStore = AppStore.create({
  navigationAppStore: navigationAppStore as any,
  settingStore: settingStore as any,
});

const AppNavigator = createStackNavigator(
  {
    Home: 
    {
      screen: () => <HomeScreen settingStore={appStore.settingStore} />,
      navigationOptions: HomeScreen.navigationOptions,
    },
    Settings: {
            screen: (props: { navigation: NavigationScreenProp<any, any>; }) => <SettingsScreen navigation={props.navigation} settingStore={appStore.settingStore} />,
            navigationOptions: SettingsScreen.navigationOptions,
    },
    NavigationApps: {
        screen: (props: { navigation: NavigationScreenProp<any, any>; }) => <NavigationAppsScreen navigationAppStore={appStore.navigationAppStore} />,
        navigationOptions: NavigationAppsScreen.navigationOptions,
    }, 
  },
    {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#00C',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}
