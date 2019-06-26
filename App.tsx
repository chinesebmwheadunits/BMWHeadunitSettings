import React from 'react';
import { NavigationScreenProp, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { NavigationAppsScreen } from './app/screens/NavigationAppsScreen';
import { useScreens } from 'react-native-screens';
import settingStore, { SettingStoreContext } from './app/stores/SettingStore'
import navigationAppStore from './app/stores/NavigationAppStore'

useScreens();

navigationAppStore.items.set('com.google.android.apps.maps', {name: 'Maps', package: 'com.google.android.apps.maps', icon: require('./assets/maps.png'), enabled: false});
navigationAppStore.items.set('com.waze', {name: 'Waze', package: 'com.waze', icon: require('./assets/waze.png'), enabled: true});
navigationAppStore.items.set('com.sygic.aura', {name: 'Sygic', package: 'com.sygic.aura', icon: require('./assets/sygic.png'), enabled: false});

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: {
            screen: (props: { navigation: NavigationScreenProp<any, any>; }) => <SettingsScreen navigation={props.navigation} setting={settingStore.item} />,
            navigationOptions: SettingsScreen.navigationOptions,
    },
    NavigationApps: {
        screen: (props: { navigation: NavigationScreenProp<any, any>; }) => <NavigationAppsScreen navigationAppStore={navigationAppStore} />,
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
        <SettingStoreContext.Provider value={settingStore}>
        <AppContainer />
        </SettingStoreContext.Provider>
    );
  }
}
