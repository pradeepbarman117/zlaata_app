import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect, useState } from 'react';
import Clock from 'react-native-vector-icons/Feather'

const FlashSale = () => {
  

  return (
    <>
      <View style={css.container}>
        <View style={css.flex}>
          <Text style={css.title}>Flash Sale</Text>
          <View style={[css.flex, { columnGap: 16 }]}>
            <Clock name="clock" size={20} color={'#004BFE'} />
            <View style={[css.flex, { columnGap: 16, width: 120, justifyContent: 'flex-end' }]}>
              <Text style={css.clockText}>00</Text>
              <Text style={css.clockText}>36</Text>
              <Text style={css.clockText}>46</Text>
            </View>
          </View>
        </View>
        <View style={css.cards}>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/7/f/-original-imahf4qppx6fkxtw.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/n/j/x1502za-ej953ws-thin-and-light-laptop-asus-original-imah42fta8gfzz3y.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/l/l/-original-imagtc5fz9spysyk.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/g/q/i/10-25264048-44-roadster-white-original-imahfbhhnwftyudq.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/s/7/f/-original-imahf4qppx6fkxtw.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
          <View style={css.cardList}>
            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/312/312/xif0q/computer/x/n/j/x1502za-ej953ws-thin-and-light-laptop-asus-original-imah42fta8gfzz3y.jpeg?q=70' }} style={css.image} />
            <Text style={css.floatingText}>20% off</Text>
          </View>
        </View>
      </View>
    </>
  )
}


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
    fontSize: 20,
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
    alignItems: 'center',
    columnGap: '3.5%',
    rowGap: 12,
    flexWrap: 'wrap',
    marginTop: 16
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
    position:'relative'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10
  },
  floatingText:{
    position: 'absolute',
    top: 0,
    right:0,
    backgroundColor:'#F81140',
    borderRadius:5,
    paddingHorizontal:10,
    paddingVertical:4,
    fontSize:12,
    color:'white',
    fontWeight:'600'
  }
})

export default FlashSale