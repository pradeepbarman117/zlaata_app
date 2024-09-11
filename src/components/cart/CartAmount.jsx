import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

const CartAmount = () => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{flexDirection: 'row', columnGap: 12, alignItems: 'center'}}>
          <Text style={styles.heading}>Total</Text>
          <Text style={styles.price}>₹1,234.56</Text>
        </View>
        <View style={{width: '40%', alignItems: 'flex-end'}}>
          <TouchableOpacity style={styles.button} activeOpacity={0.8}>
            <Text style={styles.checkoutText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#E5EBFC',
    shadowColor:'rgba(99, 99, 99, 1)',
    shadowOffset:{width:0, height:5},
    elevation:5,
  },
  heading: {
    fontSize: 20,
    fontWeight: '600',
    color: '#202020',
  },
  price: {
    fontSize: 21,
    fontWeight: '600',
    color: '#004BFE',
  },
  button: {
    backgroundColor: '#004BFE',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  checkoutText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

export default CartAmount;
