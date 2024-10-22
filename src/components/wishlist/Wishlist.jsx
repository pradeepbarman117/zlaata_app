import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import WishlistHeader from './WishlistHeader';
import WishlistProduct from './WishlistProduct';

const Wishlist = () => {
  return (
    <>
      <View style={css.container}>
        <View>
          <WishlistHeader />
        </View>
        <ScrollView>
          <View>
            <WishlistProduct/>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default Wishlist;
