import React, { Component } from 'react';  
 import {  StyleSheet, View, Image } from 'react-native';  
 import App from '../../App';
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';
 export default class SplashScreen extends Component
 {  
   constructor(){  
     super();  
     this.state={  
     isVisible : true,  
    }  
  }  
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   
  componentDidMount(){  
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 1000);  
   }  
   
    render()  
    {  
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}>  
                       <Image source={{uri:'https://static.javatpoint.com/tutorial/react-native/images/react-native-tutorial.png'}}  
                    style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
                </View>  
             </View> )  
         return(  
             <View style = { styles.MainContainer }>  
                 
                 {  
                  (this.state.isVisible === true) ? Splash_Screen : <App />  
                }  
            </View>  
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {  
        flex: 1,  
     //   justifyContent: 'center',  
     //   alignItems: 'center',  
        width:widthPercentageToDP('100%'),
        height:heightPercentageToDP('100%'),
         
    },  
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
        margin: 0,  
        position: 'absolute',  
        width: '100%',  
        height: '100%',  
      },  
   
    SplashScreen_ChildView:  
    {  
        justifyContent: 'center',  
        alignItems: 'center',  
        backgroundColor: '#00BCD4',  
        flex:1,  
    },  
});  