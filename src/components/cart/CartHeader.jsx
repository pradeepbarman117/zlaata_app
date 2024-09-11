import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import EditIcon from 'react-native-vector-icons/Feather'

const CartHeader = () => {
  return (
    <View style={style.container}>
      <View style={style.title}>
        <View>
          <Text style={style.heading}>Cart</Text>
        </View>
        <View style={style.circle}>
          <Text style={style.circleText}>2</Text>
        </View>
      </View>
      <View style={style.addressBox}>
        <View style={{ maxWidth:"85%",}}>
          <Text style={style.addressHeading}>Shipping Address</Text>
          <Text style={style.addressText}>26, Duong So 2, Thao Dien Ward, An Phu, District 2, Ho Chi Minh city</Text>
        </View>
        <View style={style.addressEditIcon}>
          <EditIcon name="edit" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    padding: 16,
  },
  title:{
    flexDirection: 'row',
    alignItems:'center',
    columnGap: '5%',
    marginBottom:11
  },
  heading:{
    color:"#202020",
    fontSize:20,
    fontWeight:"500",
  },
  circle:{
    backgroundColor:"#E5EBFC",
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleText:{
    color:"#000",
    fontSize:15,
    fontWeight:"500",
  },
  addressBox:{
    backgroundColor:'#F9F9F9',
    paddingHorizontal:16,
    paddingVertical:9,
    borderRadius:8,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  addressHeading:{
    color:"#202020",
    fontSize:14,
    fontWeight:"600",
    marginBottom:5,
  },
  addressText:{
    color:"#000000",
    fontSize:14,
    fontWeight:"400",
  },
  addressEditIcon:{
    width:40,
    height:40,
    backgroundColor:'#004BFE',
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center',
    flexDirection: 'row',
  }

});

export default CartHeader;
