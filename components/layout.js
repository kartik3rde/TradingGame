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
import ForgotPassword from "./pages/ForgotPassword";
import Welcome from "./pages/welcome";
import Registration from "./pages/registration";
import SavePassword from "./pages/SavePassword";
import CourseSingle from "./pages/CourseSingle";
import Game from "./pages/Game";
import Game2 from "./pages/Game2";
import Game3 from "./pages/Game3";
import Game4 from "./pages/Game4";
import Game5 from "./pages/Game5";
import About from "./pages/About";
import QuizPage from "./pages/QuizPage";
import LessionPage from "./pages/LessionPage";
import { View, Text, Button } from "react-native";
import SideDrawer from "./elements/SideDrawer"
import { createStackNavigator, createAppContainer ,createDrawerNavigator,createSwitchNavigator} from 'react-navigation'; // 
// const RootStack = createStackNavigator(
//   {
//     Home: Welcome,
//     Login: Login,
//     Registration: Registration,
//     Dashboard:Dashboard,
//     CourseSingle:CourseSingle,
//     Game:Game,
//     Game2:Game2,
//     Game3:Game3,
//     Game4:Game4,
//     Game5:Game5,
//     About:About,
//     Course:Dashboard,
//     QuizPage:QuizPage,
//     LessionPage:LessionPage
//   },
//   { 
//     initialRouteName: 'Dashboard',
//   }
// );

// const AppContainer = createAppContainer(RootStack);

// export default class Layout extends Component {
  
//   render() {
//     return <AppContainer />;
//   }
  
// }
const setDrawerScreen = screen => ( {
  screen,
  navigationOptions: {
    header: null,
  }
})
const inAppNavigator = createDrawerNavigator({
  screen: createStackNavigator({
     Dashboard:setDrawerScreen(Dashboard),
     About:setDrawerScreen(About),
     LessionPage:setDrawerScreen(LessionPage),
     QuizPage:setDrawerScreen(QuizPage)
    }, {
    navigationOptions: {
      header: null,
      headerMode: 'none',
    }
  })
},
{
  contentComponent: SideDrawer
})
const AppNavigator = createSwitchNavigator({
  Welcome: {
    screen: Welcome,
    header: null,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  },
  Login: {
    screen: Login,
  },
  Register: {
    screen: Registration,
  },
  App : {
    screen: inAppNavigator
    ,
  },
  ForgotPassword :{
    screen :ForgotPassword
  },
  SavePassword:{
    screen : SavePassword
  }
},
{
  initialRouteName: 'Welcome',
  /* The header config from HomeScreen is now here */
  defaultNavigationOptions: {
    header: null,
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  },
});
const AppContainer  = createAppContainer(AppNavigator)
export default class Layout extends Component {
  render(){
   return (
       <AppContainer />
     
    )
  }
}


