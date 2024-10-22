import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const WelcomeScreen = ({navigation}) => {

  return (
    <>
      <View style={styles.container}>
        {/* <View style={styles.container}> */}
          {/* Shopping Bag Icon */}
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/img/welcom/shopping.png')}
              style={styles.icon}
            />
          </View>
          {/* Title */}
          <Text style={styles.title}>Zlaata</Text>
          {/* Subtitle */}
          <Text style={styles.subtitle}>
            Zlaata for Women brings the {'\n'} best aesthetic sense of beauty.
          </Text>
          <TouchableOpacity style={styles.loginBtn} activeOpacity={0.8} onPress={() => navigation.navigate('PhoneNumber')}>
            <Text style={{color: '#F3F3F3', fontSize: 18}}>
              Let's Get Started
            </Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
    padding: 20,
    marginBottom: 20,
  },
  icon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
    lineHeight: 20,
  },
  loginBtn: {
    backgroundColor: '#004CFF',
    borderRadius: 8,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    position: 'absolute',
    bottom: 50,
  },
});

export default WelcomeScreen;
