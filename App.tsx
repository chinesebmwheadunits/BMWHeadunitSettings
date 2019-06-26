import React from 'react';
import { NavigationScreenProp, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { NavigationAppsScreen } from './app/screens/NavigationAppsScreen';
import { useScreens } from 'react-native-screens';
import settingStore, { SettingStoreContext } from './app/stores/SettingStore'
useScreens();

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: (props: { navigation: NavigationScreenProp<any, any>; }) => <SettingsScreen navigation={props.navigation} setting={settingStore.setting} ></SettingsScreen>,
    NavigationApps: NavigationAppsScreen,
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
        <SettingStoreContext.Provider value={settingStore}>
        <AppContainer />
        </SettingStoreContext.Provider>
    );
  }
}
