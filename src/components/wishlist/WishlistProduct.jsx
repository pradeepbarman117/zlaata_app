import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import CartListProduct from '../cart/CartListProduct';

const WishlistProduct = () => {
  return (
    <>
      <View style={css.container}>
        <CartListProduct variant="Move to Cart" />
        <CartListProduct variant="Move to Cart" />
        <CartListProduct variant="Move to Cart" />
        <CartListProduct variant="Move to Cart" />
        <CartListProduct variant="Move to Cart" />
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
});

export default WishlistProduct;
