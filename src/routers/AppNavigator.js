import React from "react";

import { createStackNavigator } from "react-navigation";
import LoginScreen from '../screens/Login';
import HomeScreen from '../screens/Home';

const AppNavigator = createStackNavigator(
    {
        Login: {screen: LoginScreen},
        Home: {screen: HomeScreen}
    },
    {
        initialRouteName: "Login",
        headerMode: "none",
    }
);

export default () =>  <AppNavigator />

