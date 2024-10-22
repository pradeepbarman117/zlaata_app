import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import CartHeader from './CartHeader';
import CartList from './CartList';
import CartAmount from './CartAmount';

const Cart = () => {
  return (
    <>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View>
          <CartHeader />
        </View>
        <ScrollView>
          <CartList />
        </ScrollView>
        <View>
          <CartAmount />
        </View>
      </View>
    </>
  );
};

export default Cart;
