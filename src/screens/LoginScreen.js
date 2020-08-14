import React ,{ Component } from 'react';
import { View,ScrollView,TextInput, StyleSheet, ImageBackground,Text,Image, TouchableOpacity, KeyboardAvoidingView }  from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Customtext, Customtextt, Custombutton } from '../components/CustomComponents'

export const image = require("../assets/login-bg.png")
export const imagee = require("../assets/logo.png")
export const eye = require("../assets/eye.png")
export const eyecross = require("../assets/eye-cross.png")



export default class LoginScreen extends Component 
{
    constructor(props) {
        super(props);
        this.state = {
           hideShow:false
        }
    }

    
     
    render() {
        return(
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}> 
                <Image source={imagee} style={{ alignSelf:'center',
             
                marginTop:10 
             
                }}/>
               
               <KeyboardAvoidingView>
               
               <View style={{marginTop:hp('13%')}}>
               <Text style={{ alignSelf:'center',fontSize:hp('4%')}}>Login</Text>
                     <Customtext title="Name/Email Address" />
                     <Customtextt title="Password" textshow={this.state.hideShow?true:false} eyeIcon={this.state.hideShow ? eye : eyecross} imageToggle={()=>  this.setState({hideShow:!this.state.hideShow})} />
                     <Custombutton />
                <Text style={{ alignSelf:'center',fontSize:hp('2.5%'), paddingTop:30}}>Forget Password ?</Text>     
               </View>
               </KeyboardAvoidingView>
                 </ImageBackground> 
            </View>
        )
    }
}

const styles = StyleSheet.create ({

    container : {
         flex:1,
      },
      
    image : {
        width:wp('100%'),height:hp('98%'),justifyContent:'center',alignSelf:'center'
    },
})