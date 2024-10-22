import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator,TransitionPresets } from '@react-navigation/stack';
import React from 'react'
import TabNavigator from '../tab/TabNavigator';
import ProductDetailsStack from '../stack/ProductDetailsStack';
import AccountStack from '../stack/my_account/AccountStack';


const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        ...TransitionPresets.SlideFromRightIOS
                    }}
                >
                    <Stack.Screen name="Main" component={TabNavigator} />
                    <Stack.Screen name='ProductDetails' component={ProductDetailsStack} />
                    <Stack.Screen name='MyAccount' component={AccountStack} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default AppStack