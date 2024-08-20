import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination';

const { width: screenWidth } = Dimensions.get('window');


const data = [
    {
        image: 'https://static.vecteezy.com/system/resources/previews/002/006/775/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'
    },
    {
        image: 'https://static.vecteezy.com/system/resources/previews/002/006/775/non_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg'
    },
    {
        image: 'https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg'
    }
];

const Carousels = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                {/* Check if image is a local resource or a URL */}
                {typeof item.image === 'string' ? (
                    <Image source={{ uri: item.image }} style={styles.image} />
                ) : (
                    <Image source={item.image} style={styles.image} />
                )}
            </View>
        );
    };

    return (
        <>
            <View style={{flex:1,height:180}}>
                <Carousel
                    width={screenWidth}
                    data={data}
                    renderItem={renderItem}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
                <Pagination data={data} activeIndex={activeIndex} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 8,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 12,
    },
});



export default Carousels;