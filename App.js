import React from 'react';
import { View, Text, Button, TouchableOpacity  } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import FlatListBasics  from './src/component/FlatListBasics';
import DetailsScreen from './src/component/DetailsScreen';


const AppNavigator = createStackNavigator(
  {
    SongList: FlatListBasics,
    Details: DetailsScreen,
  },
   {
     initialRouteName: 'SongList',
   }
);


export default createAppContainer(AppNavigator);