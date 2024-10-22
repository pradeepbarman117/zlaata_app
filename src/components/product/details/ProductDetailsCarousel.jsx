import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import React, { useState } from 'react'


const { width: screenWidth } = Dimensions.get('window');


const data = [
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/g/l/-original-imagsfdvebvyzkxa.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/o/f/11-394371-puma-white-matte-silver-original-imaghkpf5prhgmkh.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/w/c/11-394371-puma-white-matte-silver-original-imaghkpfbxqzu7na.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/q/g/l/-original-imagsfdvebvyzkxa.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/o/f/11-394371-puma-white-matte-silver-original-imaghkpf5prhgmkh.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/w/c/11-394371-puma-white-matte-silver-original-imaghkpfbxqzu7na.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/m/o/f/11-394371-puma-white-matte-silver-original-imaghkpf5prhgmkh.jpeg?q=70&crop=true'
    },
    {
        image: 'https://rukminim2.flixcart.com/image/832/832/xif0q/shoe/g/w/c/11-394371-puma-white-matte-silver-original-imaghkpfbxqzu7na.jpeg?q=70&crop=true'
    }
];

const ProductDetailsCarousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const renderItem = ({ item }) => {
        return (
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
            </View>
        );
    };

    return (
        <>
            <View style={{flex:1,position:'relative'}}>
                <Carousel
                    width={screenWidth}
                    data={data}
                    renderItem={renderItem}
                    mode="normal"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    onSnapToItem={(index) => setActiveIndex(index)}
                />
                <Pagination data={data} activeIndex={activeIndex} />
            </View>
        </>
    )
}




const Pagination = ({ data, activeIndex }) => {
    return (
        <View style={css.paginationContainer}>
            {data.map((_, index) => (
                <View
                    key={index}
                    style={[
                        css.dot,
                        { backgroundColor: activeIndex === index ? '#0042E0' : '#ccc' },
                        { width: activeIndex === index ? 25 : 10, height: 8 },
                    ]}
                />
            ))}
        </View>
    );
};


const css = StyleSheet.create({
    paginationContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'absolute',
        bottom:12,
        left:0,
        right:0,
        justifyContent:'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});



const styles = StyleSheet.create({
    itemContainer: {
        borderRadius: 8,
        height: 430,
        backgroundColor:'red'
    },
    image: {
        width: '100%',
        height:'100%',
        aspectRatio: 1,
    },
});

export default ProductDetailsCarousel