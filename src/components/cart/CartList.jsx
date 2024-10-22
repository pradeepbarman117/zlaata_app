import { View, Text, StyleSheet,Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useReducer, useRef, useState } from 'react';
import CartListProduct from './CartListProduct';
import ProductFromWishlist from './ProductFromWishlist';

/**
 * CartList component
 * @returns {JSX.Element} CartList component
 */
const CartList = () => {
    
    return (
        <View style={styles.container}>
            <View>
                {
                    Array.from(Array(4)).map((_, index) => (
                        <CartListProduct key={index} />
                    ))
                }
            </View>
            <View>
                <ProductFromWishlist/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        marginBottom:16,
    },
})

export default CartList