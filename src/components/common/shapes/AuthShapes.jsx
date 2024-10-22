import {
  View,
  Text,
  Keyboard,
  StyleSheet,
  Animated,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const AuthShapes = () => {
  const [backgroundTranslateY] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // Calculate 15% of the window height
        const windowHeight = Dimensions.get('window').height;
        const percentageOffset = windowHeight * 0.15; // Adjust percentage as needed

        Animated.timing(backgroundTranslateY, {
          toValue: -percentageOffset, // Move up by the calculated percentage
          duration: 100,
          useNativeDriver: true,
        }).start();
      },
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        Animated.timing(backgroundTranslateY, {
          toValue: 0, // Reset to original position
          duration: 100,
          useNativeDriver: true,
        }).start();
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [backgroundTranslateY]);

  return (
    <>
      {/* Animated Background Shapes */}
      <Animated.View
        style={[
          css.backgroundShapes_1,
          {transform: [{translateY: backgroundTranslateY}]},
        ]}>
        <Image
          source={{uri: 'https://i.postimg.cc/WqsN3P3y/bubble1.png'}}
          style={{resizeMode:'contain',aspectRatio:1}}
        />
      </Animated.View>
      <Animated.View
        style={[
          css.backgroundShapes_2,
          {zIndex: -1, transform: [{translateY: backgroundTranslateY}]},
        ]}>
        <Image source={{uri:"https://i.postimg.cc/Jngs3yvT/bubble2.png"}} 
          style={{resizeMode:'contain',aspectRatio:1}}
        />
      </Animated.View>
      <View style={[css.backgroundShapes_3, {zIndex: -1}]}>
        <Image source={{uri:'https://i.ibb.co/pn2qkxW/bubble3.png'}} style={{resizeMode:'contain',aspectRatio:1}}  />
      </View>
    </>
  );
};

const css = StyleSheet.create({
  backgroundShapes_1: {
    position: 'absolute',
    top: -30,
    left: -30,
    width: '60%',
    overflow: 'hidden',
    zIndex: 1,
  },
  backgroundShapes_2: {
    position: 'absolute',
    top: -30,
    left: -30,
    width: '75%',
    overflow: 'hidden',
  },
  backgroundShapes_3: {
    position: 'absolute',
    bottom: 0,
    right: -50,
    width: '60%',
    overflow: 'hidden',
  },
});

export default AuthShapes;
