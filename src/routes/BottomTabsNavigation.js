import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import ExploreScreen from '../tabs/ExploreScreen';
import SearchScreen from '../tabs/Search';
import HomeScreen from '../tabs/HomeScreen';


const Tabs = createBottomTabNavigator(
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
          iconName = `ios-globe`;
        }
        else if (routeName === 'Search') {
          iconName = `ios-search`;
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
export default createAppContainer(Tabs);