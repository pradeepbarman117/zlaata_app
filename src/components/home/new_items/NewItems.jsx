import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useProducts from '../../../hooks/product/useProductList';
import NewItemsProduct from './NewItemsProduct';

const NewItems = () => {
    const navigation = useNavigation();

    const { data: productsData } = useProducts();
    // const products = useMemo(() => productsData?.message.products.slice(0, 6) || [], [productsData?.message.products]);

    return (
        <View style={css.container}>
            <View style={css.titleFlex}>
                <Text style={css.title}>New Items</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                    <View style={css.seeAll}>
                        <Text style={css.seeAllText}>See All</Text>
                        <View style={css.seeAllBox}>
                            <Image source={require('../../../assets/img/icons/Arrow.png')} />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView nestedScrollEnabled={true} horizontal>
                {/* <FlatList
                    data={products}
                    renderItem={({ item }) => <NewItemsProduct product={item} css={css} />}
                    keyExtractor={(item) => item.id.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={css.cards}
                /> */}
                <View style={css.cards}>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                    <NewItemsProduct css={css}/>
                </View>
            </ScrollView>
        </View>
    );
};


const css = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    titleFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#202020',
        fontSize: 18,
        fontWeight: '600',
    },
    seeAll: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15,
    },
    seeAllText: {
        fontSize: 14,
        fontWeight: '500'
    },
    seeAllBox: {
        backgroundColor: '#004CFF',
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        cursor: 'pointer'
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        columnGap:10,
        marginBottom: 20,
        paddingHorizontal:5
    },
    cardsList: {
        backgroundColor: 'white',
        padding: 6,
        width: 130,
        borderRadius: 10,
        shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
        shadowOpacity: 1, // The opacity of the shadow
        shadowRadius: 8, // The radius of the shadow blur
        elevation: 8, // Required for Android to display the shadow
    },
    cardImg: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10,
    },
    cardInfo: {
        padding: 6,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
    },
    cardRupee: {
        fontSize: 16,
        color: 'black',
        verticalAlign: 'middle',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#202020',
    }
})

export default NewItems