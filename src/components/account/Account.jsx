import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import ProfileHeader from './components/header/ProfileHeader';
import AccountList from './components/list/AccountList';
// import ProductStories from './components/stories/ProductStories';

const Account = () => {
  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ProfileHeader />
        <ScrollView>
          <AccountList />
          {/* <ProductStories /> */}
        </ScrollView>
      </View>
    </>
  );
};

export default Account;
