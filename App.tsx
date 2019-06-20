import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { Button, Text, View } from 'react-native';
import { HomeScreen } from './app/screens/HomeScreen';
import { SettingsScreen } from './app/screens/SettingsScreen';
import { NavigationAppScreen } from './app/screens/NavigationAppScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    NavigationApps: NavigationAppScreen,
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
    return <AppContainer />;
  }
}
