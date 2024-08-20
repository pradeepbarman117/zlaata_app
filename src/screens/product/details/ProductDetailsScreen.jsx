import { View, Text } from 'react-native'
import React from 'react'
import ProductDetailsCarousel from '../../../components/product/details/ProductDetailsCarousel'
import ProductDetailsContent from '../../../components/product/details/ProductDetailsContent'

const ProductDetailsScreen = () => {
  return (
    <>
      <View style={{ height: 430 }}>
        <ProductDetailsCarousel />
      </View>
      <View>
        <ProductDetailsContent/>
      </View>
    </>
  )
}

export default ProductDetailsScreen