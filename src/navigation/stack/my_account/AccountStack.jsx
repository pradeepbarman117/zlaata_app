import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProfileScreen from '../../../screens/account/ProfileScreen';
import OrderScreen from '../../../screens/account/OrderScreen';
import AddressScreen from '../../../screens/account/AddressScreen';

const Stack = createStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'My Profile',
        }}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Orders"
        component={OrderScreen}
      />
      <Stack.Screen
        options={{
          headerShown: true,
        }}
        name="Addresses"
        component={AddressScreen}
      />
    </Stack.Navigator>
  );
};

export default AccountStack;
