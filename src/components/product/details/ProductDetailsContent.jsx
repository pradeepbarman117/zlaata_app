import { View, Text, StyleSheet } from 'react-native'
import React from 'react';

const ProductDetailsContent = () => {
    return (
        <>
            <View style={css.container}>
                <View>
                    <Text style={css.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.
                    </Text>
                    <View style={css.priceWrpr}>
                        <View style={css.currentPrice}>
                            <Text style={css.priceText}>₹</Text>
                            <Text style={css.priceText}>999</Text>
                        </View>
                        <View style={css.originalPrice}>
                            <Text style={[css.priceText,{fontSize:18,color:'#707070',textDecorationLine: 'line-through'}]}>₹</Text>
                            <Text style={[css.originalPriceText,{textDecorationLine: 'line-through',color:'#707070'}]}>1999</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}


const css = StyleSheet.create({
    container: {
        padding: 20,
    },
    desc: {
        fontSize: 16,
        color: '#333',
        fontWeight: '400',
    },
    priceWrpr: {
        marginTop: 10,
        flexDirection:'row',
        columnGap:12,
        alignItems:'center',
    },
    originalPrice:{
        flexDirection:'row',
        alignItems:'center',
        // columnGap: 3,
    },
    originalPriceText:{
        fontSize: 18,
        fontWeight: '500',
    },  
    currentPrice: {
        columnGap: 3,
        flexDirection: 'row',
    },
    priceText: {
        fontSize: 22,
        color: '#000',
        fontWeight: '500',
    },
})

export default ProductDetailsContent