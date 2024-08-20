import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/AntDesign';


const CustomNavigation = ({ state, descriptors, navigation }) => {
  return (
    <View style={css.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;

        const onPress = () => {
          navigation.navigate(route.name);
        };
        
        const iconName = {
          Home: 'home',
          Account: 'profile',
          Setting: 'setting',
          Cart:'shoppingcart',
          Wishlist:'hearto'
        }

        const isActive = state.index === index;
        

        

        return (
          <>
            <TouchableOpacity key={index} onPress={onPress} style={{ flex: 1, alignItems: 'center' }}>
              <Icons name={iconName[route.name]} size={20} color={isActive ? '#007bff' : '#777'} />
              <Text style={[css.text, { color: isActive ? '#007bff' : '#777' }]}>{label}</Text>
            </TouchableOpacity>
          </>
        );
      })}
    </View>
  )
}


const css = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 5
  },
})

export default CustomNavigation