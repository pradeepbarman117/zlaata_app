import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import HeartIcon from 'react-native-vector-icons/AntDesign';
import CartPlus from 'react-native-vector-icons/MaterialIcons';
import BuyNow from 'react-native-vector-icons/MaterialCommunityIcons';

const ProductDetailsButton = () => {
    return (
        <>
            <View style={css.container}>
                <TouchableOpacity activeOpacity={0.8} style={{backgroundColor:'#F9F9F9', borderRadius:12}}>
                    <HeartIcon name="hearto" size={20}  padding={10} borderRadius={12} color={'#202020'} />
                </TouchableOpacity>
                <TouchableOpacity style={css.buttons} activeOpacity={0.8}>
                    <CartPlus name="add-shopping-cart" size={20} color={'#F3F3F3'} />
                    <Text style={css.btnText}>Add to cart</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[css.buttons, { backgroundColor: '#004CFF' }]} activeOpacity={0.8}>
                    <BuyNow name="cart-arrow-down" size={20} color={'#F3F3F3'} />
                    <Text style={css.btnText}>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}


const css = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
        shadowOpacity: 1, // The opacity of the shadow
        shadowRadius: 8, // The radius of the shadow blur
        elevation: 8, // Required for Android to display the shadow
        columnGap: 12,
    },
    buttons: {
        backgroundColor: '#202020',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 12,
        columnGap: 12,
    },
    btnText: {
        color: '#F3F3F3',
        fontSize: 14,
    },
    btnIcon: {

    }
});

export default ProductDetailsButton