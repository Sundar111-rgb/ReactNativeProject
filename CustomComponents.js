import React ,{ Component } from 'react';
import { View,ScrollView,TextInput, StyleSheet, ImageBackground,Text,Image, TouchableOpacity, KeyboardAvoidingView }  from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
export const image = require("../assets/login-bg.png")
export const imagee = require("../assets/logo.png")
export const eye = require("../assets/eye.png")
export const eyecross = require("../assets/eye-cross.png")


export const Customtext = (props) => {
return(
    <View style={ styles.customtextinput}>
            <Text style={{paddingBottom:10,fontWeight:'bold',fontSize:hp('2.4%')}}>{props.title}</Text>
            <TextInput style={{paddingLeft:30, width: wp('80%'), height:hp('7%'),fontSize:20, borderWidth:wp('0'),borderRadius:50, backgroundColor:'#e0ded7'  }} />

    </View>
) 
}

export const Customtextt = (props) => {
    return(
        <View style={ styles.customtextinputt}>
                <Text style={{paddingBottom:10,fontWeight:'bold',fontSize:hp('2.4%')}}>{props.title}</Text>
                <View style={{flexDirection:'row',width: wp('80%'), height:hp('7%'),borderColor:'red',borderWidth:0,borderRadius:50, backgroundColor:'#e0ded7'}}>
                <TextInput secureTextEntry={props.textshow} style={{paddingLeft:30, width: wp('65%'), height:hp('7%'),fontSize:20, borderWidth:wp('0'),borderRadius:50, backgroundColor:'#e0ded7'  }} />
               <TouchableOpacity onPress={props.imageToggle}><Image source={props.eyeIcon} style={{ alignSelf:'center' ,width:wp('10%'), height:hp('4%'),marginTop:10 }}/></TouchableOpacity>
                </View>
        </View>
    ) 
    }

export const Custombutton = (props) => {
    return(
        <TouchableOpacity><View style={ styles.customtextbutton}>
            <Text style={{ fontSize:hp('3%'),paddingTop:10}}>Login</Text>
            </View></TouchableOpacity>
    ) 
    }

    const styles = StyleSheet.create ({

        container : {
             flex:1,
          },
          
        image : {
            width:wp('100%'),height:hp('98%'),justifyContent:'center',alignSelf:'center'
        },
        customtextinput : {
            width: wp('80%'), height:hp('12%'), borderWidth:0,borderRadius:0, borderColor:'red',alignSelf:'center',
            marginTop:hp('3%'),
            alignItems:'center',
        },
        customtextinputt : {
            width: wp('80%'), height:hp('12%'), borderWidth:0,borderRadius:0, borderColor:'red',alignSelf:'center',
            marginTop:hp('3%'),
            alignItems:'center',
        },
        
        customtextbutton : {
            width: wp('80%'), height:hp('7%'), borderWidth:0,borderRadius:50, borderColor:'red',alignSelf:'center',
            marginTop:hp('5%'),
            alignItems:'center',
            backgroundColor:'#93d9b4'
    
        } 
    
    
    })
    


