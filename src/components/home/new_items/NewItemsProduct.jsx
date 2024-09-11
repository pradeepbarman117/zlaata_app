import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { View, Text, TouchableOpacity, Image,} from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';


const NewItemsProduct = ({product,css}) => {
  const redirect = useNavigation();

  const {product_image:{image}} = product
  const imageUrlArray = JSON.parse(image);

  return (
    <>
        <TouchableOpacity activeOpacity={0.5} onPress={()=>{
            redirect.navigate('ProductDetails')
        }}>
            <View style={css.cardsList}>
                <Image source={{ uri: `${imageUrlArray[0]}`}} style={css.cardImg} />
                <View style={css.cardInfo}>
                    <Text style={css.cardTitle} numberOfLines={2} ellipsizeMode="tail">{product.product.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                        <Icons name="currency-rupee" style={css.cardRupee} />
                        <Text style={css.cardPrice}>17,00</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    </>
  )
}

export default NewItemsProduct