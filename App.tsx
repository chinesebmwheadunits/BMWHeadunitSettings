import React from 'react';
import { NavigationScreenProp, createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, View, AsyncStorage } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { NavigationAppsScreen } from './app/screens/NavigationAppsScreen';
import { useScreens } from 'react-native-screens';
import { AppStore } from './app/stores/AppStore';
import { SettingStore } from './app/stores/SettingStore';
import { NavigationAppStore } from './app/stores/NavigationAppStore';
import { Settings } from './app/models/Settings';
import { applySnapshot, getSnapshot, onSnapshot, onPatch } from 'mobx-state-tree';
import axios from 'axios'
import { autorun } from 'mobx';
import mobx from 'mobx';
 
useScreens();

const settingStore = SettingStore.create({ item : Settings.create() });
const navigationAppStore = NavigationAppStore.create({ items: {} });
const appStore = AppStore.create({
  navigationAppStore: navigationAppStore as any,
  settingStore: settingStore as any,
},
{
    axios: axios.create({
        baseURL: "http://10.0.2.2:21323/"
    })
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

autorun(() => console.log(navigationAppStore.items));

/**
 * Root app component.
 */
export default class App extends React.Component {

  /**
   * Activates when the root app component mounts. Restores the app state.
   */
  async componentDidMount()
  {
    try {
      const value = await AsyncStorage.getItem('appStore');
      if (value !== null) {
        const json = JSON.parse(value);
        if (AppStore.is(json))
        {
          applySnapshot(appStore, json);
        }
      }
    } catch (error) {
    }

    /**
     * Register a handler that will save a snapshot of the state to Async storage whenever a new snapshot is available.
     */
    onSnapshot(appStore, async (newSnapshot) => {
      const value = JSON.stringify(newSnapshot);
      console.log(value);
      await AsyncStorage.setItem('appStore', value);
    });

    await Promise.all([settingStore.fetchSettings(), navigationAppStore.fetchNavigationApps()]);

    /**
     * Register a handler that will update on patches of settings.
     */
    onPatch(settingStore, patch =>
        {
            settingStore.updateSettings();
        })
    
  }

  /**
   * Renders the app container.
   */
  render() {
    return (
        <AppContainer />
    );
  }
}
