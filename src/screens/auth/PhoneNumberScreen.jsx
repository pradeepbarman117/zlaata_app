import {
  View,
  Text,
  KeyboardAvoidingViewComponent,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import PhoneNumber from '../../components/auth/PhoneNumber';

const PhoneNumberScreen = ({navigation}) => {
  return (
    <>
      <PhoneNumber navigation={navigation} />
    </>
  );
};

export default PhoneNumberScreen;
