import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ProfileHeader = () => {
    const navigation = useNavigation();
    return (
        <View>
        <View style={css.headerWrpr}>
            <View style={css.profile}>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('MyAccount',{
                    screen:'Profile'
                })}>
                    <View style={css.profileImgBox}>
                        <Image source={{uri:"https://play-lh.googleusercontent.com/t2tJJ3PvHpZwSVH20B7zGBqcqMrUMnNpQ8re_BiS6vqdxboDm_RM_pcJvuRY-n8KvGA=w526-h296-rw"}} style={css.profileImage} />
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={css.myActivityText}>Hello, Zlaata !!</Text>
                    <Text style={css.myActivityMobile}>+91 9876543210</Text>
                </View>
            </View>
            <View style={css.profileIcons}>
                <TouchableOpacity style={css.profileIconBox}>
                    <Image source={{uri:"https://i.ibb.co/RyJPSGb/coupon-svgrepo-com.png"}} style={css.profileIconImg} />
                    {/* https://i.ibb.co/mzrpk2R/coupon-svgrepo-com-1.png */}
                </TouchableOpacity>
                <TouchableOpacity style={css.profileIconBox}>
                    <Image source={{uri:"https://i.ibb.co/DYGcMCm/settings-svgrepo-com.png"}} style={css.profileIconImg} />
                    {/* https://i.ibb.co/X2NfGBK/settings-svgrepo-com-1.png */}
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}


const css = StyleSheet.create({
    headerWrpr:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#fff',
        shadowColor: 'rgba(100, 100, 111, 0.5)',
        shadowOffset: { width: 0, height: 7 },  // 0px 7px
        shadowOpacity: 1,  // 0.2
        shadowRadius: 29,  // 29px
        // Android shadow (elevation)
        elevation: 20,  // Adjust as necessary to match the shadow depth
        paddingHorizontal:16,
    },
    profileIcons:{
        flexDirection:'row',
        alignItems:'center',
        columnGap:'5%',
        justifyContent:'flex-end',
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:16,
        columnGap:'5%',
    },
    profileImgBox:{
        width:65,
        height:65,
        backgroundColor:'#fff',
        padding:5,
        borderRadius:50,
        shadowColor: 'rgba(100, 100, 111, 1)',
        shadowOffset: { width: 0, height: 7 },  // 0px 7px
        shadowOpacity: 1,  // 0.2
        shadowRadius: 29,  // 29px
        // Android shadow (elevation)
        elevation: 5,  // Adjust as necessary to match the shadow depth
    },
    profileImage:{
        width:'100%',
        height:'100%',
        borderRadius:50,
    },
    myActivity:{
        backgroundColor:'#004CFF',
        padding:12,
        borderRadius:24,
        width:140,
        alignItems:'center',
    },
    myActivityText:{
        color:'#333',
        fontSize:22,
        fontWeight:'600'
    },
    myActivityMobile:{
        color:'#9B9B9B',
        fontSize:15,
        marginTop:3,
        fontWeight:'500'    
    },
    profileIconBox:{
        backgroundColor:'#E5EBFC',
        padding:10,
        borderRadius:50,
        width:46,
        height:46,
        marginHorizontal:2
    },
    profileIconImg:{
        width:'100%',
        height:'100%',
    }
})

export default ProfileHeader