import React, {Component} from 'react';
import { image, Dimensions } from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import  HomeScreen  from './screens/tabs/home/HomeScreen';
import {HomeDetails} from './screens/tabs/home/HomeDetails';
import Ionicons from 'react-native-vector-icons/Ionicons';

import ExploreScreen from './screens/tabs/explore/ExploreScreen';
import {ExploreDetails} from './screens/tabs/explore/ExploreDetails';
import LoginScreen from './screens/login/LoginScreen';
import SignUpScreen from './screens/signUp/SignUpScreen';

import Profile from './screens/drawer/Profile';
import Settings from './screens/drawer/Settings';
import SearchScreen from './screens/tabs/search/Search';
import { HamburgerNavigation } from './routes/HamburgerNavigation';
import { Title } from 'react-native-paper';

console.disableYellowBox = true;

const navOptionHandler = (navigation) => ({
  header: null
})
const backNavOptionHandler = (navigation) => ({
  headerLeft:<HeaderBackButton onPress={()=>{navigation.navigate('LoginStack')}}/>,
  headerStyle : {
    backgroundColor: '#ffffff',
    opacity: 0.8
  }
})

const HomeStack = createStackNavigator ({
  Home: {
    screen: HomeScreen,
    navigationOptions: navOptionHandler
  },
  HomeDetail: {
    screen: HomeDetails,
    navigationOptions: navOptionHandler
  }
})

const ExploreStack = createStackNavigator ({
  Explore: {
    screen: ExploreScreen,
    navigationOptions: navOptionHandler
  },
  ExploreDetail: {
    screen: ExploreDetails,
    navigationOptions: navOptionHandler
  }
})
const LoginStack = createStackNavigator ({
  Login: {
    screen: LoginScreen,
    navigationOptions: navOptionHandler
  },
})
const SignUpStack = createStackNavigator ({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: backNavOptionHandler
  },
})

const SearchStack = createStackNavigator ({
  Search: {
    screen: SearchScreen,
    navigationOptions: navOptionHandler
  },
})

const MainTabs = createBottomTabNavigator({
  Home:{ screen: HomeStack  },
  Explore:{ screen: ExploreStack},
  Search : {screen: SearchStack},
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
});

const MainStack = createStackNavigator({
  Home: {
    screen: MainTabs,
    navigationOptions: navOptionHandler
  },
  Settings: {
    screen: Settings,
    navigationOptions: navOptionHandler
  },
  Profile: {
    screen: Profile,
    navigationOptions: navOptionHandler
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: navOptionHandler
  },
},
{initialRouteName: 'Home'});

const appDrawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    Explore: { screen: ExploreScreen },
    Logout: { screen: LoginStack},
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Explore') {
          iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Login') {
        iconName = `ios-checkmark-circle${focused ? '' : '-outline'}`;
      }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#000000',
      inactiveTintColor: 'gray',
    },
    Drawer: MainStack
  },
  {
  contentComponent:HamburgerNavigation,
  drawerWidth: Dimensions.get('window').width * 3/4
  }
)

const switchStack = createSwitchNavigator(
  {
    Login: { screen: LoginStack},
    SignUp: { screen: SignUpStack},
    appDrawer,
  },
)

export default createAppContainer(switchStack);