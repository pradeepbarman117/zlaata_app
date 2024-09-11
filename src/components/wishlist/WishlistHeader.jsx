import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ArrowIcon from 'react-native-vector-icons/Ionicons';

const WishlistHeader = () => {
  return (
    <>
      <View style={css.container}>
        <View style={{marginBottom: 10}}>
          <Text style={css.heading}>Wishlist</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={css.reviewHeading}>Recently viewed</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <ArrowIcon name="arrow-forward-circle" size={38} color="#004CFF" />
          </TouchableOpacity>
        </View>
        {/* Revcently viewed Product List */}
        <View style={{ flexDirection: 'row',columnGap:'2.5%',width:"100%",marginTop:10}}>
            <View style={{width:'18%'}}>
                  <View style={css.imageCircle}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s'}} style={css.image} />
                </View>
            </View>
            <View style={{width:'18%'}}>
                <View style={css.imageCircle}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-5_uphxqCj8OZjlCGc1ZFi54y5NWYfKU99V0RBulVlE1VwD0lFmHUIFg20Iipk-GP3g&usqp=CAU'}} style={css.image} />
                </View>
            </View>
            <View style={{width:'18%'}}>
                <View style={css.imageCircle}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8OvxU4kmr3K9D-2nQzB2ooLEr0ib75ZJzdA&s'}} style={css.image} />
                </View>
            </View>
            <View style={{width:'18%'}}>
                <View style={css.imageCircle}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s'}} style={css.image} />
                </View>
            </View>
            <View style={{width:'18%'}}>
                <View style={css.imageCircle}>
                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzHMDlwRCHOHZP_tX7jRYNxV8W8MpNEog45w&s'}} style={css.image} />
                </View>
            </View>
        </View>
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  heading: {
    color: '#202020',
    fontSize: 25,
    fontWeight: '600',
  },
  reviewHeading: {
    color: '#202020',
    fontSize: 18,
    fontWeight: '600',
  },
  imageCircle:{
    width: '100%',
    aspectRatio:1,
    borderRadius: 50,
    padding:8,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: 'rgba(100, 100, 111, 1)',
    elevation:10,
    shadowRadius: 50,
  },
  image:{
    width:'100%',
    height:'100%',
    borderRadius:50
  }
});

export default WishlistHeader;
