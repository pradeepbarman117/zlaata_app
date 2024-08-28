import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import ProductDetailsCarousel from '../../../components/product/details/ProductDetailsCarousel'
import ProductDetailsContent from '../../../components/product/details/ProductDetailsContent'
import ProductDetailsButton from '../../../components/product/details/ProductDetailsButton'

const ProductDetailsScreen = () => {
  return (
    <>
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView>
          <View style={{ height: 430 }}>
            <ProductDetailsCarousel />
          </View>
          <View>
            <ProductDetailsContent />
          </View>
        </ScrollView>
        <View>
          <ProductDetailsButton />
        </View>
      </View>
    </>
  )
}

export default ProductDetailsScreen