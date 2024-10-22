import { View, Text, Image } from 'react-native'
import React from 'react'

const FlashSaleProduct = ({css,product}) => {
    return (
        <>
            <View style={css.cardList}>
                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/7/f/-original-imahf4qppx6fkxtw.jpeg?q=70' }} style={css.image} />
                <Text style={css.floatingText}>20% off</Text>
            </View>
        </>
    )
}

export default FlashSaleProduct