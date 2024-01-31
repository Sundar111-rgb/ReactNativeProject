import React, {useEffect} from 'react';
import {
  View,
  useAnimatedValue,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function AnimationTest(props) {
  const headerCardHeight = useSharedValue(0);
  const listItemX = useSharedValue(-Dimensions.get('window').width - 40);
  const animatedPlus = useSharedValue('-45deg');
  const scaleValue = useSharedValue(0);

  const headerStyle = useAnimatedStyle(() => {
    return {
      height: headerCardHeight.value,
    };
  });

  const plusBtnStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: animatedPlus.value}],
    };
  });

  const listItemStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: listItemX.value}],
    };
  });

  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scaleValue.value}],
    };
  });

  useEffect(() => {
    headerCardHeight.value = withTiming(300, {duration: 1500});
    listItemX.value = withTiming(Dimensions.get('window').width -420, {duration: 1500});
  }, []);

  return (
    <View style={{flex: 1}}>
      <Animated.View
        style={[
          {
            width: '100%',
            height: 300,
            backgroundColor: '#095ae6',
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          },
          headerStyle,
        ]}></Animated.View>
      <View
        style={{
          width: '100%',
          backgroundColor: 'transparent',
          height: '30%',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            marginTop: 30,
            width: 100,
            height: 100,
            backgroundColor: 'blue',
            borderRadius: 50,
          }}>
          <Image
            source={require('./assets/me.jpeg')}
            style={{
              resizeMode: 'contain',
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <Text>Good Morning Sundar Kumar</Text>
          <Text style={{fontSize: 40}}>Here is the activity</Text>
        </View>
      </View>
      <View
        style={{
          width: '100%',
          height: 800,
          //backgroundColor: 'red',
          justifyContent: 'center',
        }}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          renderItem={({item}) => {
            return (
              <Animated.View
                style={[{
                  padding: 10,
                  width: Dimensions.get('window').width -30,
                  height: 'auto',
                  backgroundColor: 'blue',
                  alignSelf: 'center',
                  marginTop: 10,
                  borderRadius: 10,
                  flexDirection: 'row',
                }, listItemStyle]}>
                <View
                  style={{
                    width: 50,
                    height: 60,
                    backgroundColor: 'blue',
                    borderRadius: 50,
                  }}>
                  <Image
                    source={require('./assets/me.jpeg')}
                    style={{
                      resizeMode: 'contain',
                      width: 60,
                      height: 60,
                      borderRadius: 50,
                    }}
                  />
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 20,
                  }}>
                  <Text>Good Morning Sundar Kumar</Text>
                  <Text>Here is the activity</Text>
                </View>
              </Animated.View>
            );
          }}
        />
      </View>
      <Animated.View
        style={[
          {
            width: 1000,
            height: 1000,
            borderRadius: 500,
            position: 'absolute',
            bottom: -500,
            right: -500,
            backgroundColor: 'rgba(9,90,230,5)',
          },
          scaleStyle,
        ]}>
        <View
          style={{
            position: 'absolute',
            width: 150,
            height: 'auto',
            padding: 10,
            left: 300,
            top: 100,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text>Breakfast</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            width: 170,
            height: 'auto',
            padding: 10,
            left: 300,
            top: 150,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text>Lunch</Text>
        </View>
        <View
          style={{
            position: 'absolute',
            width: 190,
            height: 'auto',
            padding: 10,
            left: 300,
            top: 200,
            backgroundColor: '#fff',
            borderRadius: 20,
            justifyContent: 'center',
          }}>
          <Text>Dinner</Text>
        </View>
      </Animated.View>

      <TouchableOpacity
        style={{
          width: 60,
          height: 60,
          backgroundColor: 'rgba(9,90,230,5)',
          borderRadius: 50,
          position: 'absolute',
          bottom: 20,
          right: 20,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          if (animatedPlus.value == '-45deg') {
            animatedPlus.value = withTiming('0deg', {duration: 300});
            scaleValue.value = withTiming(1, {duration: 1000});
          } else {
            animatedPlus.value = withTiming('-45deg', {duration: 300});
            scaleValue.value = withTiming(0, {duration: 1000});
          }
        }}>
        <Animated.Image
          source={require('./assets/close.png')}
          style={[
            {resizeMode: 'contain', width: 40, height: 40, borderRadius: 50},
            plusBtnStyle,
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

export default AnimationTest;
