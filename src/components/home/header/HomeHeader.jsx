import { View, Text, TextInput, StyleSheet, Image,Dimensions } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';


const realWidth = Dimensions.get('screen').width.toFixed(0);
const HomeHeader = () => {
    

    return (
        <>
            <View style={css.container}>
                <View style={{ width: "30%" }}>
                    <Image source={require('../../../assets/img/icons/logo.png')} style={css.logo} />
                </View>
                <View style={css.container.childRight}>
                    <View style={{ flex:1 }}>
                        <TextInput placeholder='Type something....'  style={css.input}/>
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
        paddingHorizontal: 15,
        columnGap: 10,
        justifyContent: 'space-between',
        backgroundColor: "white",
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
            paddingLeft: 20,
            paddingRight: 30,
            borderRadius: 25,
        },
        shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
        shadowOpacity: 1, // The opacity of the shadow
        shadowRadius: 8, // The radius of the shadow blur
        elevation: 8, // Required for Android to display the shadow
    },
    title: {
        fontSize: 22,
        fontWeight: '500',
        color: "#202020",
    },
    input: {
        width: '100%',
        maxHeight:realWidth > 400 ? 74 : 45
    },
    logo: {
        width: '100%',
        aspectRatio:1,
        resizeMode: 'contain'
    }
});



export default HomeHeader