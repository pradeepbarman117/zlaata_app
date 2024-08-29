import { View, Text, StyleSheet, Image, TouchableOpacity,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const CategoriesList = () => {
    const width = Dimensions.get('screen').width.toFixed(0);
    const navigation = useNavigation();
    console.log('width',width)
    return (
        <>
            <View style={css.container}>
                <View style={css.titleFlex}>
                    <View>
                        <Text style={css.title}>Categories</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('Account')}>
                        <View style={css.seeAll}>
                            <Text style={css.seeAllText}>See All</Text>
                            <View style={css.seeAllBox}>
                                <Image source={require('../../../assets/img/icons/Arrow.png')} />
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={css.categoryWrpr}>
                    <View style={css.cardList}>
                        <View style={css.cardListImg}>
                            <Image source={require('../../../assets/img/categories/cardList.png')} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={require('../../../assets/img/categories/cardList.png')} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={require('../../../assets/img/categories/cardList.png')} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={require('../../../assets/img/categories/cardList.png')} style={css.cardImg} />
                        </View>
                        <View style={css.cardHeading}>
                            <View>
                                <Text style={css.cardText}>Clothing</Text>
                            </View>
                            <View style={css.cardCount}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '600',
                                    fontSize: 14
                                }}>109</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.cardList}>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/v/w/5-956-wht-fabbmate-white-original-imahf5mhwndgzy4z.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/c/y/u/-original-imahfxtctjjaejzp.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/5/p/l/-original-imah2c3zmyzggbr2.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/q/g/l/-original-imagsfdvebvyzkxa.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardHeading}>
                            <View>
                                <Text style={css.cardText}>Shoes</Text>
                            </View>
                            <View style={css.cardCount}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '600',
                                    fontSize: 14
                                }}>206</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.cardList}>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/k/i/p/-original-imahfgzubw2pzctg.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/q/q/b/dgn280-women-s-handbag-ladies-purse-27-dgn280bn-messenger-bag-original-imah2z96xydvctn4.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/d/0/o/-original-imahfphremz4zanh.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/5/o/y/women-s-leatherette-handbag-black-chainstrap-black-evs-110-36-original-imahfet93ng2tvbk.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardHeading}>
                            <View>
                                <Text style={css.cardText}>Bags</Text>
                            </View>
                            <View style={css.cardCount}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '600',
                                    fontSize: 14
                                }}>147</Text>
                            </View>
                        </View>
                    </View>
                    <View style={css.cardList}>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/2/d/p/-original-imagrgwwjpbf8zhg.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/c/c/w/1-sk-pg-4078-wyt-brwn-basic-with-day-and-date-display-provogue-original-imah2wff4m8yczey.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/watch/k/w/8/-original-imagpzzgdvqtz46k.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardListImg}>
                            <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/kwmfqfk0/watch/q/h/k/1-es4782-fossil-women-original-imag998fzzpknane.jpeg?q=70' }} style={css.cardImg} />
                        </View>
                        <View style={css.cardHeading}>
                            <View>
                                <Text style={css.cardText}>Watches</Text>
                            </View>
                            <View style={css.cardCount}>
                                <Text style={{
                                    color: '#000',
                                    fontWeight: '600',
                                    fontSize: 14
                                }}>76+</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}



const css = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15
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
    categoryWrpr: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15,
        flexWrap: 'wrap',
        rowGap: 12
    },
    cardList: {
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent:'space-between',
        padding: 10,
        borderRadius: 15,
        flexWrap: 'wrap',
        rowGap: 10,
        width:'49%',
        shadowColor: 'rgba(99, 99, 99, 1)', // The color of the shadow
        shadowOffset: { width: 0, height: 2 }, // The offset of the shadow in X and Y directions
        shadowOpacity: 1, // The opacity of the shadow
        shadowRadius: 8, // The radius of the shadow blur
        elevation: 8, // Required for Android to display the shadow
    },
    cardListImg:{
        width:'47%',
    },
    cardImg: {
        width: '100%',
        height: 74,
        borderRadius: 8,
    },
    cardHeading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    cardText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'black',
    },
    cardCount: {
        fontSize: 14,
        fontWeight: '500',
        color: 'black',
        backgroundColor: '#DFE9FF',
        paddingHorizontal: 18,
        paddingVertical: 5,
        borderRadius: 8
    }
});


export default CategoriesList