import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import CartHeader from './CartHeader';
import CartListProduct from './CartListProduct';
import GoIcon from 'react-native-vector-icons/Feather';

const ProductFromWishlist = () => {
  return (
    <>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginVertical: 15,
          }}>
          <Text style={styles.heading}>From Your Wishlist</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Text style={{fontSize: 16,fontWeight: '500'}}>See All</Text>
            <TouchableOpacity activeOpacity={0.8}>
              <GoIcon name="arrow-right-circle" size={28} color="#004BFE" />
            </TouchableOpacity>
          </View>
        </View>
        <CartListProduct variant="Move to Cart" />
        <CartListProduct variant="Move to Cart" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 22,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#202020',
  },
});

export default ProductFromWishlist;
