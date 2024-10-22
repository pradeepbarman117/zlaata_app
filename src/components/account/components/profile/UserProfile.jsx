import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import FeatherIcons from 'react-native-vector-icons/Feather';

const UserProfile = () => {

    const [isDisabled, setIsDisabled] = useState(true);
    const [inputValue, setInputValue] = useState({
        name: 'Pradeep Kumar',
        email: 'pradeep@kumar.com',
        telephone: '+91 1234567890',
    });



    const handleInputValue = (name,value) => {    
        const updatedValue = {
            ...inputValue,
            [name]: value
        }
        setInputValue(updatedValue)

        const checkIfChanged = Object.keys(inputValue).some((key) => updatedValue[key] !== inputValue[key]);
        setIsDisabled(!checkIfChanged);
    }

    return (
        <View style={css.container}>
            <View style={css.profile}>
                <View style={css.profileImgBox}>
                    <Image source={{uri:"https://play-lh.googleusercontent.com/t2tJJ3PvHpZwSVH20B7zGBqcqMrUMnNpQ8re_BiS6vqdxboDm_RM_pcJvuRY-n8KvGA=w526-h296-rw"}} style={css.profileImage} />
                    <View style={css.cameraIcon}>
                        <FeatherIcons name="camera" size={32} color="#004CFF" />
                    </View>
                </View>
            </View>
            <View style={css.inputContainer}>
                <Text style={css.label}>Name</Text>
                <TextInput placeholder='Name' style={css.inputField} onChangeText={(text)=>handleInputValue('name',text)}  value={inputValue.name} />

                <Text style={css.label}>Email</Text>
                <TextInput placeholder='Email' style={css.inputField} onChangeText={(text)=>handleInputValue('email',text)}  value={inputValue.email} />

                <Text style={css.label}>Telephone</Text>
                <TextInput placeholder='Telephone' style={css.inputField} onChangeText={(text)=>handleInputValue('telephone',text)}  value={inputValue.telephone} />
            </View>
            <View style={css.saveBtnWrpr}>
                <TouchableOpacity activeOpacity={0.8} style={[css.saveBtnContainer, isDisabled && css.disabledSaveBtn]} disabled={isDisabled}>
                    <Text style={css.saveBtn}>Cancle</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.8} style={[css.saveBtnContainer, isDisabled && css.disabledSaveBtn]} disabled={isDisabled}>
                    <Text style={css.saveBtn}>Save</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


const css = StyleSheet.create({
    container:{
        padding:16,
        backgroundColor:'white',
        flex:1,
    },
    profile:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#F1F4FE',
        paddingVertical:10,
        borderRadius:10,
    },  
    profileImgBox:{
        width:120,
        height:120,
        backgroundColor:'#fff',
        padding:8,
        borderRadius:60,
        shadowColor: 'rgba(100, 100, 111, 1)',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 29,
        elevation: 5,
    },
    profileImage:{
        width:'100%',
        height:'100%',
        borderRadius:50,
    },
    cameraIcon:{
        position:'absolute',
        top:-10,
        right:-15,
        backgroundColor:'#fff',
        padding:8,
        borderRadius:60,
        shadowColor: 'rgba(100, 100, 111, 1)',
        shadowOffset: { width: 0, height: 7 },
        shadowOpacity: 1,
        shadowRadius: 29,
        elevation: 5,
    },
    inputContainer: {
        marginTop: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
        color: '#333',
    },
    inputField:{
        backgroundColor:'#F1F4FE',
        borderRadius:10,
        padding:10,
        marginVertical:10,
    },
    saveBtnWrpr:{
        flexDirection:'row',
        justifyContent:'space-between',
        columnGap:10,
    },
    saveBtnContainer:{
        backgroundColor:'#004CFF',
        padding:10,
        borderRadius:10,
        marginTop:20,
        flex:1,
    },
    disabledSaveBtn: {
        backgroundColor: '#a0c1ff', // Faded color for disabled state
    },
    saveBtn:{
        color:'white',
        textAlign:'center',
        fontSize:16,
        fontWeight:'600',
    }
});

export default UserProfile;
