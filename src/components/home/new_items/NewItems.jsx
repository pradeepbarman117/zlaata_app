import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const NewItems = () => {
    const redirect = useNavigation();
    return (
        <>
            <View style={css.container}>
                <View style={css.titleFlex}>
                    <View>
                        <Text style={css.title}>New Items</Text>
                    </View>
                    <TouchableOpacity onPress={() => redirect.navigate('Account')}>
                        <View style={css.seeAll}>
                            <Text style={css.seeAllText}>See All</Text>
                            <View style={css.seeAllBox}>
                                <Image source={require('../../../assets/img/icons/Arrow.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={css.cards}>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                            redirect.navigate('ProductDetails')
                        }}>
                            <View style={css.cardsList}>
                                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/v/w/5-956-wht-fabbmate-white-original-imahf5mhwndgzy4z.jpeg?q=70' }} style={css.cardImg} />
                                <View style={css.cardInfo}>
                                    <Text style={css.cardTitle}>Lorem ipsu dolor sit amet consectetur.</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name="currency-rupee" style={css.cardRupee} />
                                        <Text style={css.cardPrice}>17,00</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                            redirect.navigate('ProductDetails')
                        }}>
                            <View style={css.cardsList}>
                                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/g/l/-original-imagsfdvebvyzkxa.jpeg?q=70' }} style={css.cardImg} />
                                <View style={css.cardInfo}>
                                    <Text style={css.cardTitle}>Lorem ipsu dolor sit amet consectetur.</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name="currency-rupee" style={css.cardRupee} />
                                        <Text style={css.cardPrice}>2,999</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                            redirect.navigate('ProductDetails')
                        }}>
                            <View style={css.cardsList}>
                                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/5/o/y/women-s-leatherette-handbag-black-chainstrap-black-evs-110-36-original-imahfet93ng2tvbk.jpeg?q=70' }} style={css.cardImg} />
                                <View style={css.cardInfo}>
                                    <Text style={css.cardTitle}>Lorem ipsu dolor sit amet consectetur.</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name="currency-rupee" style={css.cardRupee} />
                                        <Text style={css.cardPrice}>3,000</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
                            redirect.navigate('ProductDetails')
                        }}>
                            <View style={css.cardsList}>
                                <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/kwmfqfk0/watch/q/h/k/1-es4782-fossil-women-original-imag998fzzpknane.jpeg?q=70' }} style={css.cardImg} />
                                <View style={css.cardInfo}>
                                    <Text style={css.cardTitle}>Lorem ipsu dolor sit amet consectetur.</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Icons name="currency-rupee" style={css.cardRupee} />
                                        <Text style={css.cardPrice}>17,00</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}


const css = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
    },
    titleFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        color: '#202020',
        fontSize: 18,
        fontWeight: '600',
    },
    seeAll: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 15,
    },
    seeAllText: {
        fontSize: 14,
        fontWeight: '500'
    },
    seeAllBox: {
        backgroundColor: '#004CFF',
        width: 35,
        height: 35,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        cursor: 'pointer'
    },
    cards: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        columnGap:10,
        marginBottom: 20,
    },
    cardsList: {
        backgroundColor: 'white',
        padding: 6,
        width: 130,
        borderRadius: 10,
        shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
        shadowOpacity: 1, // The opacity of the shadow
        shadowRadius: 8, // The radius of the shadow blur
        elevation: 8, // Required for Android to display the shadow
    },
    cardImg: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 10
    },
    cardInfo: {
        padding: 6,
    },
    cardTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: 'black',
    },
    cardRupee: {
        fontSize: 16,
        color: 'black',
        verticalAlign: 'middle',
    },
    cardPrice: {
        fontSize: 16,
        fontWeight: '600',
        color: '#202020',
    }
})

export default NewItems