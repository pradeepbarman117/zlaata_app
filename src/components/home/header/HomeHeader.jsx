import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const HomeHeader = () => {
    return (
        <>
            <View style={css.container}>
                <View style={{width:"30%"}}>
                    <Image source={require('../../../assets/img/icons/logo.png')} style={css.logo} />
                </View>
                <View style={css.container.childRight}>
                    <View style={{width:"70%"}}>
                        <TextInput placeholder='Type something....' />
                    </View>
                    <View>
                        <Icon name="search1" size={22} width={20} color={'#0042E0'} />
                    </View>
                </View>
            </View>
        </>
    )
}



const css = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:15,
        columnGap:10,
        justifyContent: 'space-between',
        backgroundColor:"white",
        childLeft: {},
        childRight: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            columnGap: 10,
            width: '67%',
            maxWidth: 320,
            backgroundColor: "#F8F8F8",
            paddingVertical: 5,
            paddingLeft:20,
            paddingRight:30,
            borderRadius: 25,
        },
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color:"#202020",
    },
    input: {
        width: '80%',
        height: '100%',
    },
    logo:{
        width:110,
        height:80,
        resizeMode:'contain'
    }
});



export default HomeHeader