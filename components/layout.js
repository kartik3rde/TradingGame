/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Welcome from "./pages/welcome";
import Registration from "./pages/registration";
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 

type Props = {};


const RootStack = createStackNavigator(
  {
    Home: Welcome,
    Login: Login,
    Registration: Registration,
    Dashboard:Dashboard
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Layout extends React.Component {
  
  render() {
    return <AppContainer />;
  }
  
}


