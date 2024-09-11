import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useReducer} from 'react';
import {quantityReducer} from './cartReducer';
import AntIcon from 'react-native-vector-icons/AntDesign';

const CartListProduct = ({variant}) => {
  /**
   * State to keep track of the quantity of the product
   */
  const [quantity, dispatchQuantity] = useReducer(quantityReducer, {
    quantity: 1,
  });

  /**
   * Local variable to hold the current quantity value
   */
  const localQuantity = quantity.quantity;

  /**
   * Function to handle incrementing the quantity
   */
  const handleQuanityIncrement = () => {
    dispatchQuantity({
      type: 'INCREMENT',
    });
  };

  /**
   * Function to handle decrementing the quantity
   */
  const handleQuanityDecrement = () => {
    dispatchQuantity({
      type: 'DECREMENT',
    });
  };

  return (
    <>
      <View>
        <View style={styles.product}>
          <View style={styles.productImageContainer}>
            <View style={styles.productImage}>
              <Image
                source={{
                  uri: 'https://d29bsa0z5pb231.cloudfront.net/Product/1826074772_1709794462.webp',
                }}
                style={styles.productImage.image}
              />
            </View>
            {/* Delete Product */}
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.deleteProductIcon}>
              <AntIcon name="delete" size={24} color="#D97474" />
            </TouchableOpacity>
          </View>
          <View style={styles.productInfoContainer}>
            <View style={styles.productInfo}>
              <Text style={styles.productName}>
                Raspberry Kurti, Palazzo & Floral Print Dupatta 3 Pcs Set
              </Text>
              <View style={styles.productPriceContainer}>
                <Text style={styles.productPrice}>₹1759</Text>
                <Text style={styles.productPriceDiscount}>₹1759</Text>
              </View>
            </View>
            <View style={styles.productTagContainer}>
              <TouchableOpacity activeOpacity={0.8} style={styles.productTag}>
                <Text style={styles.productColor}>Respberry</Text>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.8} style={styles.productTag}>
                <Text style={styles.productColor}>Size: M</Text>
              </TouchableOpacity>
            </View>
            {/* Move to cart button */}
            {variant === 'Move to Cart' ? (
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.addToCartButton}
                onPress={() => console.log('Move to Cart clicked')}>
                <Text style={styles.addToCartText}>Move to Cart</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.productQuantity}>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[
                    styles.productQuantityIcon,
                    {
                      opacity: localQuantity === 1 ? 0.5 : 1,
                    },
                  ]}
                  onPress={handleQuanityDecrement}
                  disabled={quantity.quantity === 1}>
                  <AntIcon name="minuscircleo" size={24} color="#004BFE" />
                </TouchableOpacity>
                <View style={styles.productQuantityNumber}>
                  <Text style={styles.productQuantityText}>
                    {quantity.quantity}
                  </Text>
                </View>
                <TouchableOpacity
                  activeOpacity={0.5}
                  style={[
                    styles.productQuantityIcon,
                    {
                      opacity: localQuantity === 5 ? 0.5 : 1,
                    },
                  ]}
                  onPress={handleQuanityIncrement}
                  disabled={quantity.quantity === 5}>
                  <AntIcon name="pluscircleo" size={24} color="#004BFE" />
                </TouchableOpacity>
              </View>
            )}
          </View>
          {/* Discount Ribbon */}
          <View style={styles.discountRibbon}>
            <Text style={styles.discountRibbonText}>20% Off</Text>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  product: {
    flexDirection: 'row',
    marginBottom: 16,
    borderRadius: 8,
    columnGap: '5%',
    position: 'relative',
  },
  productImageContainer: {
    width: '33%',
    aspectRatio: 1 / 1.3,
  },
  productInfoContainer: {
    width: '62%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productImage: {
    backgroundColor: '#fff',
    shadowColor: 'rgba(100, 100, 111, 0.5)',
    shadowOffset: {width: 0, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 29,
    elevation: 10,
    padding: 5,
    borderRadius: 8,
    image: {
      width: '100%',
      height: '100%',
      borderRadius: 8,
      resizeMode: 'cover',
    },
  },
  productName: {
    color: '#202020',
    fontSize: 14,
    width: '90%',
    lineHeight: 20,
    fontWeight: '500',
  },
  productPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '5%',
    marginTop: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  productPriceDiscount: {
    fontSize: 14,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },
  productTagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
    // marginTop: 15,
  },
  productTag: {
    backgroundColor: '#E5EBFC',
    borderRadius: 8,
    padding: 8,
  },
  productColor: {
    color: '#202020',
    fontSize: 12,
    fontWeight: '500',
  },
  productQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: '6%',
    // marginTop: 18,
  },
  productQuantityNumber: {
    backgroundColor: '#E5EBFC',
    width: 30,
    height: 30,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productQuantityText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000000',
  },
  addToCartButton:{
    backgroundColor: '#004BFE',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width:'100%',
    padding:8,
  },
  addToCartText:{
    color:'#fff',
    fontSize:14,
    fontWeight:'500',
  },
  discountRibbon:{},
  deleteProductIcon:{
    position: 'absolute',
    bottom: 15,
    left:15,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  }
});

export default CartListProduct;
