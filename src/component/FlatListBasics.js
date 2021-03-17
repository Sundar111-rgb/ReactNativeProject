import React, {Component} from 'react';
import { Text, View, FlatList, TouchableOpacity,Image, ActivityIndicator,Modal} from 'react-native';
 
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default class FlatListBasics extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: "Song List Screen",
  };
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
 
   FlatListHeader = () => {
    return (
      <View elevation={1} 
        style={{
      
          width: "100%",
          shadowOffset: {
            width: 0,
            height: 16,
          },
          shadowOpacity: 1,
          shadowRadius: 7.49
        }}
      >
        <Text style={{  textShadowColor: 'black', textShadowOffset: { width: 1, height: 3 },textShadowRadius: 10, fontSize: 30, fontWeight: '100', flex: 1, alignSelf: "center", paddingTop: 1,paddingBottom:10}}>List Of Songs</Text>
      </View>
    );
  } 

  componentDidMount(){

    fetch("https://itunes.apple.com/search?term=Michael+jackson")
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSource: responseJson,
       loading:false
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }

    abc = () => {
      return <View style={{borderColor: 'blue', borderWidth: 1}} />
    };
  
    ccc = (item) => {
     this.props.navigation.navigate("Details",{
      trackName: item.trackName,
      trackCensoredName: item.trackCensoredName,
      collectionId: item.collectionId,
      artworkUrl30: item.artworkUrl30,
      artistId:item.artistId
    });
    };

    renderItem1 = (item) => {
        <TouchableOpacity onPress={() => this.ccc(item)}>
            <View
              style={{
                flexDirection: 'row',
                width: wp('100%'),
                height: hp('13%'),
                borderWidth: 0,
                borderColor: 'red',
               // marginTop:10,
               // margin:1,
              }}>
      
           <Image source={{uri:item.artworkUrl30}} style={{width:wp('20%'),height:hp('12%')}}/>
           <View style={{marginLeft:10}}>
              <Text
                style={{
                  height: 30,
                  fontWeight: 'bold',
                  borderColor: 'blue',
                  borderWidth: 0,
                  fontSize:20
                }}>
                TrackName : {item.trackName}
              </Text>
      
              <Text
                style={{
                  height: 20,
                  fontWeight: 'bold',
                  borderColor: 'blue',
                  borderWidth: 0,fontSize:16
                }}>
                TrackCensoredName : {item.trackCensoredName}
              </Text>
              
      
            
              <Text
                style={{
                  height: 20,
                  fontWeight: 'bold',
                  borderColor: 'blue',
                  borderWidth: 0,fontSize:16
                }}>
                CollectionId : {item.collectionId}
              </Text>
      
              <Text
                style={{
                  height: 20,
                  fontWeight: 'bold',
                  borderColor: 'blue',
                  borderWidth: 0,fontSize:16
                }}>
                ArtistId : {item.artistId}
              </Text>
              </View>
              
            </View>
            </TouchableOpacity>
         
    }
 
    render(){
     return(
      <View style={{flex:1,width:wp('100%'),height:hp('100%')}}>
       {this.state.loading ?
    
    
              <Image style={{height: hp('10%'), width: wp('15%'), marginTop: hp('1%'), alignSelf: "center" }} 
            source={require('../Assets/Rolling.gif')} />:
            null
   }

       <FlatList
          data={this.state.dataSource.results}
          ItemSeparatorComponent={this.abc}
          ListHeaderComponent={this.FlatListHeader}
          renderItem={({item}) => //this.renderItem1(item) }
            <TouchableOpacity onPress={() => this.ccc(item)}>
          <View
            style={{

              flexDirection: 'row',
              width: wp('100%'),
              height: hp('13%'),
              borderWidth: 0,
              borderColor: 'red',
              marginTop:10,
              margin:1,
            }}>
    
         <Image source={{uri:item.artworkUrl30}} style={{width:wp('20%'),height:hp('12%')}}/>
         <View style={{marginLeft:10}}>
            <Text
              style={{
                height: 30,
                fontWeight: 'bold',
                borderColor: 'blue',
                borderWidth: 0,
                fontSize:20
              }}>
              TrackName : {item.trackName}
            </Text>
    
            <Text
              style={{
                height: 20,
                fontWeight: 'bold',
                borderColor: 'blue',
                borderWidth: 0,fontSize:16
              }}>
              TrackCensoredName : {item.trackCensoredName}
            </Text>
            
    
          
            <Text
              style={{
                height: 20,
                fontWeight: 'bold',
                borderColor: 'blue',
                borderWidth: 0,fontSize:16
              }}>
              CollectionId : {item.collectionId}
            </Text>
    
            <Text
              style={{
                height: 20,
                fontWeight: 'bold',
                borderColor: 'blue',
                borderWidth: 0,fontSize:16
              }}>
              ArtistId : {item.artistId}
            </Text>
            </View>
            
          </View>
          </TouchableOpacity>
         }
        />
     </View>
     )}
}
 