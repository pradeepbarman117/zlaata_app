import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useRef, useState} from 'react';
import {setUser} from '../../redux/slice/auth/authSlicer';
import {useDispatch} from 'react-redux';

const CustomOTPInput = () => {
  const dispatchUser = useDispatch();
  const [OTP, setOTP] = useState(['', '', '', '']);
  const [editable, setEditable] = useState([true, false, false, false]);
  const inputRefs = useRef([]);

  const handleOTP = (text, index) => {
    const newOTP = [...OTP];
    newOTP[index] = text;
    setOTP(newOTP);

    // Automatically move to next input field if a digit is entered
    if (text && index < inputRefs.current.length - 1) {
      const newEditable = [...editable];
      newEditable[index + 1] = true; // Enable the next input
      setEditable(newEditable);
      // Move to the next input
      setTimeout(() => {
        inputRefs.current[index + 1].focus();
      }, 50);
    }

    if (newOTP.every(x => x.length > 0)) {
      let assembledOTP = newOTP.join('');
      if (assembledOTP === '1234') {
        dispatchUser(setUser(true));
        console.log('called');
      }
    }
  };
  const handleBackspace = (key, index, text) => {
    if (key === 'Backspace' && index > 0) {
      inputRefs.current[index - 1].focus();
      const disableInput = [...editable];
      disableInput[index + 1] = false;
      setEditable(disableInput);
    }
  };

  return (
    <View style={css.otpWrpr}>
      {OTP.map((digit, index) => {
        return (
          <TextInput
            key={index}
            keyboardType="number-pad"
            ref={el => (inputRefs.current[index] = el)}
            style={css.input}
            onChangeText={text => handleOTP(text, index)}
            value={digit}
            maxLength={1}
            onKeyPress={({nativeEvent: {key, text}}) =>
              handleBackspace(key, index, text)
            }
            editable={editable[index]} // Enable only the first or if the previous input is filled
            autoFocus={index === 0}
          />
        );
      })}
    </View>
  );
};

const css = StyleSheet.create({
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
export default CustomOTPInput;

