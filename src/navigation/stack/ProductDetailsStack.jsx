import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ProductDetailsScreen from '../../screens/product/details/ProductDetailsScreen';

const Stack = createStackNavigator()

const ProductDetailsStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen 
            options={{
                headerShown:false
            }}
            name="ProductDetailScreen" component={ProductDetailsScreen} />
        </Stack.Navigator>
    )
}

export default ProductDetailsStack