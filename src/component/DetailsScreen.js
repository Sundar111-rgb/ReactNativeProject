// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text,Image } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
//import all the components we are going to use.

export default class DetailsScreen extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: "Song Details Screen"
  };
  render() {
    const  navigate  = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
       <Image source={{uri:navigate.state.params.artworkUrl30}} style={{width:wp('50%'),height:hp('30%')}}/>
        {/*Using the navigation prop we can get the value passed from the first Screen*/}
         <View>   
          <Text style={styles.TextStyle}>Track Name : {navigate.state.params.trackName}</Text>
          <Text style={styles.TextStyle}> Track Censor Name : {navigate.state.params.trackCensoredName}</Text>
          <Text style={styles.TextStyle}>Collection Id : {navigate.state.params.collectionId}</Text>
          <Text style={styles.TextStyle}> Artist Id : {navigate.state.params.artistId}</Text>
          </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'lightblue',
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
  },
});
