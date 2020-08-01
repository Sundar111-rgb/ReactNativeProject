import React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
//import PlayStore from './src/component/PlayStore';
//import PlayStore2 from './src/component/PlayStore2';
import FlatListBasics  from './src/component/FlatListBasics';
import DetailsScreen from './src/component/DetailsScreen';
import NewApiFlat from './src/component/NewApiFlat';

const AppNavigator = createStackNavigator(
  {
    SongList: FlatListBasics,
    Details: DetailsScreen,
  },
   {
     initialRouteName: 'SongList',
   }
);

// const TabNavigator = createBottomTabNavigator({
//   Home: PlayStore2,
//   Details: DetailsScreen,
// });

// const MyDrawerNavigator = createDrawerNavigator({
//   Home: {
//     screen: MyHomeScreen,
//   },
//   Notifications: {
//     screen: MyNotificationsScreen,
//   },
// });

export default createAppContainer(AppNavigator);