/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Welcome from "./pages/welcome";
import Registration from "./pages/registration";
import CourseSingle from "./pages/CourseSingle";
import Game from "./pages/Game";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";
import Game5 from "./pages/Game5";
import About from "./pages/About";
import { createStackNavigator, createAppContainer } from 'react-navigation'; // 
const RootStack = createStackNavigator(
  {
    Home: Welcome,
    Login: Login,
    Registration: Registration,
    Dashboard:Dashboard,
    CourseSingle:CourseSingle,
    Game:Game,
    Game2:Game2,
    Game3:Game3,
    Game4:Game4,
    Game5:Game5,
    About:About,
    Course:Dashboard
  },
  { 
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class Layout extends Component {
  
  render() {
    return <AppContainer />;
  }
  
}


