import { View, Text, Image } from 'react-native'
import React from 'react'

const TopProduct = () => {
  return (
    <>
      <View style={css.container}>
        <Text style={css.title}>Top Product</Text>
        <View style={css.cards}>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/v/w/5-956-wht-fabbmate-white-original-imahf5mhwndgzy4z.jpeg?q=70' }} style={css.cardImg} />
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/k/i/p/-original-imahfgzubw2pzctg.jpeg?q=70' }} style={css.cardImg} />
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/2/d/p/-original-imagrgwwjpbf8zhg.jpeg?q=70' }} style={css.cardImg} />
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/v/w/5-956-wht-fabbmate-white-original-imahf5mhwndgzy4z.jpeg?q=70' }} style={css.cardImg} />
          </View>
        </View>
      </View>
    </>
  )
}

const css = {
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  title: {
    color: '#202020',
    fontSize: 21,
    fontWeight: '600',
  },
  cards: {
    flexDirection: 'row',
    alingnItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    columnGap: 15,
  },
  cardList: {
    backgroundColor: 'white',
    borderRadius: 50,
    width: 80,
    height: 80,
    padding: 5,
    shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
    shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
    shadowOpacity: 1, // The opacity of the shadow
    shadowRadius: 8, // The radius of the shadow blur
    elevation: 8, // Required for Android to display the shadow
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 50
  },
}

export default TopProduct