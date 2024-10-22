import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useRef, useState} from 'react';
import globleCSS from './phoneNumberCSS';
import CustomOTPInput from './CustomOTPInput';
import AuthShapes from '../common/shapes/AuthShapes';

const VerifyOTP = ({navigation}) => {
  return (
    <>
      <View style={css.container}>
        {/* Heading */}
        <View style={{marginBottom: 20}}>
          <Text style={globleCSS.title}>Verify OTP</Text>
          <Text style={globleCSS.subtitle}>
            You're almost there.! Please enter OTP. &nbsp;
            <Text onPress={() => navigation.goBack()} style={css.changeNumber}>
              Change Number
            </Text>
          </Text>
        </View>
        {/* OTP */}
        <View style={css.otpWrpr}>
          <CustomOTPInput />
        </View>
        {/* Buttons */}
        <View>
          <TouchableOpacity style={css.verifyBtn}>
            <Text style={css.verifyText}>Verify</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={globleCSS.cancelText}
              onPress={() => navigation.goBack()}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
        <AuthShapes />
      </View>
    </>
  );
};

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  otpWrpr: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '5%',
    marginBottom: 30,
  },
  input: {
    width: 50,
    height: 50,
    backgroundColor: '#F2F5FE',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  verifyBtn: {
    backgroundColor: '#004CFF',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  changeNumber: {
    fontWeight: '500',
    color: '#004CFF',
  },
});

export default VerifyOTP;
