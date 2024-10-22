import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import HomeHeader from '../../components/home/header/HomeHeader'
import Carousels from '../../components/common/carousel/Carousels'
import CategoriesList from '../../components/home/categories/CategoriesList'
import TopProduct from '../../components/home/top_product/TopProduct'
import NewItems from '../../components/home/new_items/NewItems'
import FlashSale from '../../components/home/flash_sale/FlashSale'

const HomeScreen = () => {
    return (
        <>
            <View style={{flex:1,backgroundColor:'#ffffffe3'}}>
                <View style={{ marginBottom: 10 }}>
                    <HomeHeader />
                </View>
                <SafeAreaView style={{ flex: 1 }}>
                    <ScrollView>
                        <Carousels />
                        <CategoriesList />
                        <TopProduct />
                        <NewItems />
                        <FlashSale />
                    </ScrollView>
                </SafeAreaView>
            </View>
        </>
    )
}

export default HomeScreen