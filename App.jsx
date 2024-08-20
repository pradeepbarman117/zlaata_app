import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from './src/navigation/auth/AuthProvider';
import AuthStack from './src/navigation/stack/AuthStack';
import AppStacks from './src/navigation/app/AppStack';

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppContainer />
      </AuthProvider>
    </>
  )
};


const AppContainer = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {
        (user == null || user == undefined) ? (
          <AuthStack />
        ) : (
          <AppStacks />
        )
      }
    </>
  )
}

export default App