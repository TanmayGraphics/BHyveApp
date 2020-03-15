import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { DrawerActions } from "react-navigation";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  StatusBar
} from "react-native";

import HomeScreen from "../screens/HomeScreen";
import ExploreScreen from "../screens/ExploreScreen";
import LoginScreen from "../screens/login/LoginScreen";
import VendorAcc from "../screens/VendorAcc";

const TabScreen = createBottomTabNavigator(
  {
    //Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Settings: { screen: ExploreScreen }
  },
  {
    tabBarPosition: "top",
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: "#FFFFFF",
      inactiveTintColor: "#F8F8F8",
      style: {
        backgroundColor: "#633689"
      },
      labelStyle: {
        textAlign: "center"
      },
      indicatorStyle: {
        borderBottomColor: "#87B56A",
        borderBottomWidth: 2
      }
    }
  }
);

//making a StackNavigator to export as default
const App = createStackNavigator({
  TabScreen: {
    screen: TabScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#633689"
      },
      headerTintColor: "#FFFFFF",
      title: "TabExample"
    }
  }
});
export default createAppContainer(App);
