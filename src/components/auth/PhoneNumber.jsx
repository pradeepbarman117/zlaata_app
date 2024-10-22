import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import globleCSS from './phoneNumberCSS';
import AuthShapes from '../common/shapes/AuthShapes';

const PhoneNumber = ({ navigation }) => {
  const [value, setValue] = useState('');

  const handleInput = (value) => {
    if (value.length <= 10) {
      setValue(value);
    }
  };

  const handleSubmitPhoneNumber = () => {
    if (value.length !== 10) {
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid 10-digit phone number .. .. ..',
        text1Style: { fontSize: 16 },
        visibilityTime: 2000,
      });
      return;
    }
    Toast.show({
      type: 'success',
      text1: 'OTP sent to your number .. .. ..',
      text1Style: { fontSize: 16 },
      swipeable: true,
      visibilityTime: 2000,
      onHide: () => navigation.navigate('OTP'),
    });
    setValue('');
  };

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={globleCSS.title}>Login</Text>
          <Text style={globleCSS.subtitle}>
            Good to see you back! <Icon name="heart" size={16} color="black" />
          </Text>

          <View>
            <View style={styles.inputWrpr}>
              <View style={styles.countryCode}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#000' }}>
                  +91
                </Text>
              </View>
              <TextInput
                placeholder="6264871823"
                placeholderTextColor="#cfcfcf"
                keyboardType="numeric"
                style={styles.inputBox}
                value={value}
                onChangeText={handleInput}
                maxLength={10}
              />
            </View>
          </View>

          {/* CTA */}
          <View>
            <TouchableOpacity
              style={globleCSS.button}
              activeOpacity={0.8}
              onPress={handleSubmitPhoneNumber}>
              <Text style={globleCSS.buttonText}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text
                style={globleCSS.cancelText}
                onPress={() => navigation.goBack()}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Images  */}
        <AuthShapes/>
       
      </View>
      <Toast />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    position: 'relative',
  },
  inputWrpr: {
    backgroundColor: '#F2F5FE',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    fontSize: 16,
    color: '#000',
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  inputBox: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  countryCode: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export default PhoneNumber;
