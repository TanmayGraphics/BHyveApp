import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './screens/HomeScreen';
import ExploreScreen from './screens/ExploreScreen';
import SearchScreen from './screens/Search';
import LoginScreen from '../screens/login/LoginScreen';

const HomeStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Home: { screen: HomeScreen },
    Explore: { screen: ExploreScreen },
    SearchScreen: { screen: SearchScreen },
    Login: { screen: LoginScreen },
  },
  {
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#42f44b',
      title: 'Login',
      //Header title
    },
  }
);

const App = createBottomTabNavigator(
  {
    Home: { screen: HomeScreen },
    Explore: { screen: ExploreScreen },
    Search: { screen: SearchScreen },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } else if (routeName === 'Explore') {
          iconName = `ios-checkmark-circle`;
        }
        else if (routeName === 'Search') {
          iconName = `ios-search`;
        } else if (routeName === 'Login') {
          iconName = `ios-login`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#f12b7e',
      inactiveTintColor: '#ffffff',
      showLabel: false,
      style: {
        backgroundColor: '#000000',
      }
    },
  }
);
export default createAppContainer(App);