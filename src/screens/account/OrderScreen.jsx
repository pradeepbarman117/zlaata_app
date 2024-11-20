import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const OrderScreen = () => {
  return (
    <>
      <View style={css.container}>
        <View style={css.topContainer}>
          <View>
            <TextInput placeholder='Type something....' style={css.inputBox} />
          </View>
          <View>
            <TouchableOpacity style={css.filterBox} activeOpacity={0.8}>
              <Text style={css.filterText}>Filter</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={css.orderContainer}>
          <View style={css.orderList}>
            <View style={css.orderListItem}>
              <View style={css.orderListImg}>
                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/416/416/xif0q/smartwatch/l/b/t/-original-imagxp8tn3vjjdbz.jpeg?q=70&crop=false' }} style={css.orderImg} />
              </View>
              <View style={css.orderListDetail}>
                <View style={{ flexDirection: 'row',alignItems: 'center',columnGap:'12%'}}>
                  <Text style={[css.orderStatus,css.shipped]}>Shipped</Text>
                  <Text style={css.orderId}>Order #92287157</Text>
                </View>
                <Text style={css.orderDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, commodi!</Text>
                <Text style={css.orderDate}>Date: 12/12/2022</Text>
              </View>
            </View>
          </View>
          <View style={css.orderList}>
            <View style={css.orderListItem}>
              <View style={css.orderListImg}>
                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/416/416/xif0q/ceiling-lamp/m/x/h/2-1-5-5-12-5-0-5-goj-wooden-hanging-lamp-phool-box-black-pack-of-original-imah3cmxdaskw2gy.jpeg?q=70&crop=false' }} style={css.orderImg} />
              </View>
              <View style={css.orderListDetail}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center' }}>
                  <Text style={[css.orderStatus,css.delivered]}>Delivered</Text>
                  <Text style={css.orderId}>Order #92287157</Text>
                </View>
                <Text style={css.orderDesc}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas, commodi!</Text>
                <Text style={css.orderDate}>Date: 12/12/2022</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const css = {
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  topContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    padding:16,
    // backgroundColor:'#F5F5F5',
    marginTop:10,
    backgroundColor:'white',

  },
  inputBox:{
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: 'white',
    width: 250,
    borderWidth: 1,          // Border width
    borderColor: '#004CFF',    // Border color
    borderRadius: 10,        // Rounded corners
    borderStyle: 'solid',    // Solid border
  },
  filterBox:{
    backgroundColor:'#ffffff',
    paddingVertical: 14,
    borderRadius:10,
    width:100,
    justifyContent:'center',
    alignItems:'center',
    borderWidth: 1,          // Border width
    borderColor: '#004CFF',    // Border color
    borderRadius: 10,        // Rounded corners
    borderStyle: 'solid',    // Solid border
  },
  filterText:{
    color:'#004CFF',
    fontSize:16,
    fontWeight:'bold',
  },
  orderContainer:{
    padding:16,
    backgroundColor:'white',
  },
  orderListItem:{
    flexDirection:'row',
    columnGap:24,
    paddingHorizontal:16,
    paddingVertical:12,
    marginBottom:16,
    borderRadius:10,
    backgroundColor: 'white',
    shadowColor: 'rgba(100, 100, 111, 1)',
    shadowOffset: {width: 0, height: 5}, // 0px 5px
    shadowOpacity: 1, // 0.1
    shadowRadius: 8, // 0px 8px
    elevation: 5, // 0px 8px
  },
  orderListDetail:{
    width:'65%',
  },
  orderList:{
    backgroundColor:'white',
    borderRadius:12,
  },
  orderListImg:{
    width:120,
    aspectRatio:1,
    borderRadius:10,
  },
  orderImg:{
    width:'100%',
    height:'100%',
    borderRadius:10,
  },
  orderId:{
    fontSize:14,
    fontWeight:'bold',
    color:'#333',
    textTransform:'uppercase',
    marginBottom:5,
  },
  orderStatus:{
    padding:8,
    paddingHorizontal:12,
    borderRadius:6,
    fontSize:13,
    fontWeight:'bold',
    textTransform:'uppercase',
    marginBottom:8,
    textAlign:'center',
  },
  delivered:{
    backgroundColor:'white',
    color:'#004CFF',
    borderWidth:1,
    borderColor:'#004CFF',
  },
  shipped:{
    borderWidth:1,
    borderColor:'#ffaf40',
    color:'#ffaf40',
  },
  orderDesc:{
    fontSize:14,
    fontWeight:'500',
    marginBottom:5,
    color:'#9B9B9B',
  },
  orderDate:{
    fontSize:14,
    fontWeight:'500',
    color:'#9B9B9B',
  },
}

export default OrderScreen;
