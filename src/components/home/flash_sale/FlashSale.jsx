import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react';
import Clock from 'react-native-vector-icons/Feather'
import useProducts from '../../../hooks/product/useProductList';
import FlashSaleProduct from './FlashSaleProduct';

const FlashSale = () => {
  const { data: productsData } = useProducts();
  const [flashSaleProducts, setFlashSaleProducts] = useState([]);
  const numColumns = 3;

  useEffect(() => {
    setFlashSaleProducts(
      productsData?.message.products.filter((product) => product.id <= 6) || []
    );
  }, [productsData]);

  return (
    <View style={css.container}>
      <View style={css.flex}>
        <Text style={css.title}>Flash Sale</Text>
        <View style={[css.flex, { columnGap: 16 }]}>
          <Clock name="clock" size={20} color="#004BFE" />
          <View style={[css.flex, { columnGap: 16, width: 120, justifyContent: 'flex-end' }]}>
            <Text style={css.clockText}>00</Text>
            <Text style={css.clockText}>36</Text>
            <Text style={css.clockText}>46</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={flashSaleProducts}
        key={numColumns}
        renderItem={({ item }) => <FlashSaleProduct css={css} product={item} />}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        columnWrapperStyle={css.cards}
      />
    </View>
  );
};


const css = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 15,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '600'
  },
  clockText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    backgroundColor: '#F3F3F3',
    borderRadius: 5,
    padding: 5
  },
  cards: {
    flexDirection: 'row',
    columnGap: '3.5%',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: '100%',
    overflow: 'visible',
    paddingHorizontal: 5,
    paddingVertical:8
  },
  cardList: {
    width: '31%',
    aspectRatio: 1,
    backgroundColor: 'white',
    shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
    shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
    shadowOpacity: 1, // The opacity of the shadow
    shadowRadius: 8, // The radius of the shadow blur
    elevation: 8, // Required for Android to display the shadow
    padding: 10,
    borderRadius: 10,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10
  },
  floatingText: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: '#F81140',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    color: 'white',
    fontWeight: '600'
  }
})

export default FlashSale