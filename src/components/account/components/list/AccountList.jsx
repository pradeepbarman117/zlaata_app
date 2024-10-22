import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const AccountList = () => {
    const navigation = useNavigation();
    return (
      <View>
        <View style={css.listWrpr}>
          <View style={css.list}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MyAccount',{screen:'Orders'})} >
              <Text style={css.listHeading}>My Orders</Text>
              <Text style={css.listText}>Already have 12 orders</Text>
              <View style={css.listIcon}>
                <Icons name="chevrons-right" size={24} color={'#333'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={css.list}>
            <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MyAccount',{screen:'Addresses'})}>
              <Text style={css.listHeading}>Shipping addresses</Text>
              <Text style={css.listText}>3 ddresses</Text>
              <View style={css.listIcon}>
                <Icons name="chevrons-right" size={24} color={'#333'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={css.list}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={css.listHeading}>Payment methods</Text>
              <Text style={css.listText}>Visa **34</Text>
              <View style={css.listIcon}>
                <Icons name="chevrons-right" size={24} color={'#333'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={css.list}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={css.listHeading}>My reviews</Text>
              <Text style={css.listText}>Reviews for 4 items</Text>
              <View style={css.listIcon}>
                <Icons name="chevrons-right" size={24} color={'#333'} />
              </View>
            </TouchableOpacity>
          </View>
          <View style={css.list}>
            <TouchableOpacity activeOpacity={0.8}>
              <Text style={css.listHeading}>Settings</Text>
              <Text style={css.listText}>Notifications, password</Text>
              <View style={css.listIcon}>
                <Icons name="chevrons-right" size={24} color={'#333'} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
};

const css = StyleSheet.create({
  listWrpr: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  list: {
    padding: 16,
    backgroundColor: '#fff',
    shadowColor: 'rgba(100, 100, 111, 1)',
    shadowOffset: {width: 0, height: 5}, // 0px 5px
    shadowOpacity: 1, // 0.1
    shadowRadius: 8, // 0px 8px
    elevation: 2, // 0px 8px
    borderRadius: 8,
    marginBottom: 16,
  },
  listHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    letterSpacing: 0.3,
  },
  listText:{
    fontSize: 16,
    color: '#9B9B9B',
    letterSpacing: 0.3,
  },
  listIcon: {
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AccountList;
