import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, LayoutAnimation } from 'react-native'
import React, { useState } from 'react';
import ArrowIcon from 'react-native-vector-icons/Entypo';
import RightArrow from 'react-native-vector-icons/AntDesign';
import RupeeIcon from 'react-native-vector-icons/MaterialIcons';
import RatingIcon from 'react-native-vector-icons/FontAwesome';
import ReturnIcon from 'react-native-vector-icons/MaterialIcons';
import Cash from 'react-native-vector-icons/MaterialCommunityIcons';


const ProductDetailsContent = () => {

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapsed = () => {
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
        setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
    };

    return (
        <>
            <View style={css.container}>
                {/***** Product Details ****/}
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
                {/***** Variations ****/}
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
                        <TouchableOpacity activeOpacity={0.8} onPress={toggleCollapsed}>
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
                {/***** Delevery Details & Specifications ****/}
                <View>
                    <View style={{ marginTop: 16 }}>
                        <Text style={variation.heading}>Delivery Details</Text>
                        <View style={spec.deliveryList}>
                            <View style={spec.deliveryBox}>
                                <View style={spec.deliveryBoxText}>
                                    <View style={{ width:65}}>
                                        <Text style={spec.deliveryText}>Standard</Text>
                                    </View>
                                    <View>
                                        <Text style={spec.deliveryDay}>5-7 days</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <RupeeIcon name="currency-rupee" size={16} color={'#333'} />
                                    <Text style={spec.deliveryAmount}>39</Text>
                                </View>
                            </View>
                            <View style={spec.deliveryBox}>
                                <View style={spec.deliveryBoxText}>
                                    <View style={{ width:65}}>
                                        <Text style={spec.deliveryText}>Express</Text>
                                    </View>
                                    <View>
                                        <Text style={spec.deliveryDay}>1-2 days</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                    <RupeeIcon name="currency-rupee" size={16} color={'#333'} />
                                    <Text style={spec.deliveryAmount}>99</Text>
                                </View>
                            </View>
                        </View>
                        <View style={spec.returnPolicy}>
                            <View style={{ flexDirection: 'row', alignItems: 'center',columnGap:10}}>
                                <ReturnIcon name="keyboard-return" size={22} color={'#333'} />
                                <Text style={spec.returnPolicyHeading}>10 days return policy</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center',columnGap:10,marginTop:10}}>
                                <Cash name="cash-check" size={22} color={'#333'} />
                                <Text style={spec.returnPolicyHeading}>Cash On Delivery Available</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginTop: 16 }}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={variation.heading}>Size Guide</Text>
                                <View style={spec.sizeArrow}>
                                    <RightArrow name="arrowright" size={20} color={'white'} />
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 16 }}>
                    <View>
                        <Text style={variation.heading}>Specifications</Text>
                        <Text style={spec.subHeading}>Material</Text>
                        <View style={spec.materialList}>
                            <Text style={spec.materialText}>Cotton 40%</Text>
                            <Text style={spec.materialText}>Nylon 30%</Text>
                            <Text style={spec.materialText}>Cotton 40%</Text>
                            <Text style={spec.materialText}>Cotton 30%</Text>
                            <Text style={spec.materialText}>Cotton 40%</Text>
                            <Text style={spec.materialText}>Cotton 30%</Text>
                        </View>
                    </View>
                </View>
                {/***** Ratings ****/}
                <View>
                    <View style={{ marginTop: 16 }}>
                        <View style={review.title}>
                            <Text style={review.reviewHeading}>Rating & Reviews (2)</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center',columnGap:10}}>
                                    <Text style={review.seeAll}>See All</Text>
                                    <TouchableOpacity activeOpacity={0.8}>
                                        <View style={review.seeAllArrow}>
                                            <RightArrow name="arrowright" size={20} color={'white'} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                        </View>
                        <View style={review.totalRating}>
                            <RatingIcon name="star" size={26} color={'#ECA61B'} />
                            <RatingIcon name="star" size={26} color={'#ECA61B'} />
                            <RatingIcon name="star" size={26} color={'#ECA61B'} />
                            <RatingIcon  name="star-half-full" size={26} color={'#ECA61B'} />
                            <RatingIcon name="star-o" size={26} color={'#ECA61B'} />
                        </View>
                    </View>
                    <View>
                        <View style={{ marginTop: 16 }}>
                            <View style={review.reviewList}>
                                <View style={review.profile}>
                                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7tkp7RwYEvJM0dJ7K91L5ZDQ6lXOJdXDbA&s'}} style={review.profileImg} />
                                </View>
                                <View style={review.reviewContent}>
                                    <View><Text style={review.reviewName}>Veronika</Text></View>
                                    <View style={review.totalRating}>
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon  name="star-half-full" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star-o" size={22} color={'#ECA61B'} />
                                    </View>
                                    <View style={{marginTop:10}}>
                                        <Text style={review.reviewText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 16 }}>
                            <View style={review.reviewList}>
                                <View style={review.profile}>
                                    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz7tkp7RwYEvJM0dJ7K91L5ZDQ6lXOJdXDbA&s'}} style={review.profileImg} />
                                </View>
                                <View style={review.reviewContent}>
                                    <View><Text style={review.reviewName}>Veronika</Text></View>
                                    <View style={review.totalRating}>
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star" size={22} color={'#ECA61B'} />
                                        <RatingIcon  name="star-half-full" size={22} color={'#ECA61B'} />
                                        <RatingIcon name="star-o" size={22} color={'#ECA61B'} />
                                    </View>
                                    <View style={{marginTop:10}}>
                                        <Text style={review.reviewText}>
                                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed ...
                                        </Text>
                                    </View>
                                </View>
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
    },
    materialList:{
        flexDirection:'row',
        columnGap: 8,
        marginTop: 8,
        flexWrap:'wrap',
    },
    materialText:{
        fontSize: 14,
        fontWeight: '400',
        color: '#202020',
        marginTop: 8,
        backgroundColor:'#FFEBEB',
        padding: 8,
        borderRadius: 8,
        fontWeight: '500'
    },
    sizeArrow: {
        backgroundColor: '#004CFF',
        width: 35,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
    },
    deliveryList:{
        marginTop: 8
    },
    deliveryBox:{
        flexDirection:'row',
        columnGap: 8,
        marginTop: 8,
        alignItems: 'center',
        borderWidth:1,
        borderColor:'#004CFF',
        paddingVertical:10,
        paddingHorizontal:15,
        borderRadius: 8,
        justifyContent:'space-between',
    },
    deliveryBoxText:{
        flexDirection:'row',
        columnGap: 12,
        alignItems: 'center',
    },
    deliveryText:{
        fontSize: 14,
        color:'#000000',
        fontWeight:'500'
    },
    deliveryDay:{
        fontSize: 14,
        color: '#004CFF',
        backgroundColor:'#F5F8FF',
        padding:8,
        borderRadius:5,
        fontWeight:'500',
    },
    deliveryAmount:{
        fontSize: 16,
        color: '#000000',
        fontWeight:'500',
    },
    returnPolicy:{
        marginTop: 8,
        // backgroundColor:'#FFEBEB',
        // backgroundColor:'#F9F9F9',
        backgroundColor:'#F5F8FF',
        borderRadius:5,
        padding:10,
    },
    returnPolicyHeading:{
        fontSize: 15,
        fontWeight: '400',
        color: '#202020',
    },
});

const review = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title:{
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
    },
    reviewHeading:{
        fontSize:20,
        fontWeight:'600',
        color:'#000000',
    },
    totalRating:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:10,
        marginTop:10,
    },
    profile:{
        backgroundColor:'#FFFFFF',
        width:60,
        height:60,
        padding:5,
        borderRadius:50,
        shadowColor: 'rgba(99, 99, 99, 0.8)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        elevation: 5,
    },
    profileImg:{
        width:'100%',
        height:'100%',
        borderRadius:50
    },
    reviewList:{
        flexDirection:'row',
        columnGap:12,
        width:"100%",
    },
    reviewName:{
        fontSize:16,
        fontWeight:'500',
        color:'#000000',
    },
    reviewContent:{
        width:'80%',
    },
    reviewText:{
        fontSize:14,
        fontWeight:'400',
        color:'#333',
        marginTop:5,
        lineHeight:20
    },
    seeAll:{
        fontSize:14,
        color:'#333',
        fontWeight:'500',
    },
    seeAllArrow:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#004CFF',
        width:35,
        height:35,
        borderRadius:50,  
    }

});



export default ProductDetailsContent