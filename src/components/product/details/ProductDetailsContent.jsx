import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, LayoutAnimation } from 'react-native'
import React, { useState } from 'react';
import ArrowIcon from 'react-native-vector-icons/Entypo';

const ProductDetailsContent = () => {

    const [isCollapsed, setIsCollpsed] = useState(true);

    const isOpenedSize = (e) => {
        LayoutAnimation.configureNext({
            duration: 100,
            create: {
                type: 'easeInEaseOut',
                property: 'opacity',
            },
            update: {
                type: 'easeInEaseOut',
                property: 'opacity',
            },
        });
        setIsCollpsed(!isCollapsed);
    }
    // FFEBEB
    return (
        <>
            <View style={css.container}>
                <View>
                    <Text style={css.desc}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam arcu mauris, scelerisque eu mauris id, pretium pulvinar sapien.
                    </Text>
                    <View style={css.priceWrpr}>
                        <View style={css.currentPrice}>
                            <Text style={css.priceText}>₹</Text>
                            <Text style={css.priceText}>999</Text>
                        </View>
                        <View style={css.originalPrice}>
                            <Text style={[css.priceText, { fontSize: 18, color: '#707070', textDecorationLine: 'line-through' }]}>₹</Text>
                            <Text style={[css.originalPriceText, { textDecorationLine: 'line-through', color: '#707070' }]}>1999</Text>
                        </View>
                        <Text style={css.discountPercent}>20%</Text>
                    </View>
                </View>
                <View>
                    <View style={variation.container}>
                        <View style={{ flexDirection: 'row', columnGap: 30, alignItems: 'center' }}>
                            <View>
                                <Text style={variation.heading}>Variations</Text>
                            </View>
                            <View style={{ flexDirection: 'row', columnGap: 10, }}>
                                <TouchableOpacity style={variation.button} activeOpacity={0.6}>
                                    <Text style={variation.button.text}>Light Blue</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={variation.button} activeOpacity={0.6}>
                                    <Text style={variation.button.text}>L</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity activeOpacity={0.8} onPress={isOpenedSize}>
                            <View style={[variation.seeMore,
                            isCollapsed && {
                                transform: 'rotate(180deg)',
                            }
                            ]}
                            >
                                <ArrowIcon name='chevron-down' size={20} color={'white'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    {
                        isCollapsed && (
                            <ScrollView horizontal>
                                <View style={{ marginTop: 15, flexDirection: 'row', columnGap: 10 }}>
                                    <TouchableOpacity style={[variation.sizes, variation.sizes.active]}>
                                        <Text style={variation.sizes.text}>XS</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>S</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>M</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>L</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>XL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>XXL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>XL</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={variation.sizes}>
                                        <Text style={variation.sizes.text}>XXL</Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        )
                    }
                    <View style={{ marginTop: 15 }}>
                        <ScrollView horizontal>
                            <View style={{ flexDirection: 'row', width: '100%', columnGap: 12 }}>
                                <View style={variation.imageList}>
                                    <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/j/i/f/-original-imahfhjsytwksyaz.jpeg?q=70' }} style={{ width: 80, height: 80 }} />
                                </View>
                                <View style={variation.imageList}>
                                    <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/s/u/n/-original-imagtbtfb6zn5n4v.jpeg?q=70' }} style={{ width: 80, height: 80 }} />
                                </View>
                                <View style={variation.imageList}>
                                    <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/3/o/n/-original-imagrzq9ntr8mbwx.jpeg?q=70' }} style={{ width: 80, height: 80 }} />
                                </View>
                                <View style={variation.imageList}>
                                    <Image source={{ uri: 'https://rukminim2.flixcart.com/image/612/612/l407mvk0/shoe/r/r/g/-original-imagezy54ngn8hfh.jpeg?q=70' }} style={{ width: 80, height: 80 }} />
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={{ marginTop: 16 }}>
                    <View>
                        <Text style={variation.heading}>Specifications</Text>
                        <Text style={spec.subHeading}>Material</Text>
                        <View>
                            <Text>Cotton 40%</Text>
                            <Text>Nylon 30%</Text>
                            <Text>Cotton 40%</Text>
                            <Text>Cotton 30%</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}


const css = StyleSheet.create({
    container: {
        paddingVertical: 20,
        paddingHorizontal: 12,
    },
    desc: {
        fontSize: 16,
        color: '#333',
        fontWeight: '400',
    },
    priceWrpr: {
        marginTop: 10,
        flexDirection: 'row',
        columnGap: 12,
        alignItems: 'center',
    },
    originalPrice: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    originalPriceText: {
        fontSize: 18,
        fontWeight: '500',
    },
    currentPrice: {
        columnGap: 3,
        flexDirection: 'row',
    },
    priceText: {
        fontSize: 22,
        color: '#000',
        fontWeight: '500',
    },
    discountPercent: {
        fontSize: 14,
        backgroundColor: '#FF5790',
        paddingHorizontal: 8,
        paddingVertical: 3,
        color: 'white',
        fontWeight: '600',
        borderRadius: 6,
    },
});

const variation = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 15,
    },
    heading: {
        color: '#000',
        fontWeight: '600',
        fontSize: 20
    },
    button: {
        backgroundColor: '#F9F9F9',
        borderRadius: 5,
        text: {
            color: '#000000',
            paddingHorizontal: 20,
            paddingVertical: 8,
        }
    },
    seeMore: {
        backgroundColor: '#004CFF',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    imageList: {
        backgroundColor: '#F9F9F9',
        padding: 8,
        borderRadius: 5,
    },
    sizes: {
        width: 50,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F9F9',
        text: {
            color: '#000000',
        },
    }
});


const spec = StyleSheet.create({
    subHeading: {
        fontSize: 16,
        fontWeight: '500',
        color: '#202020',
        marginTop: 8
    }
});

export default ProductDetailsContent