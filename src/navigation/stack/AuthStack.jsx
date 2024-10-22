import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import WelcomeScreen from '../../screens/auth/WelcomeScreen';
import PhoneNumberScreen from '../../screens/auth/PhoneNumberScreen';
import VerifyOTPScreen from '../../screens/auth/VerifyOTPScreen';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS
        }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen
          name="PhoneNumber"
          component={PhoneNumberScreen}/>
        <Stack.Screen name="OTP" component={VerifyOTPScreen} 
          options={{
            ...TransitionPresets.DefaultTransition
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
