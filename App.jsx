import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import AuthProvider, { AuthContext } from './src/navigation/auth/AuthProvider';
import AuthStack from './src/navigation/stack/AuthStack';
import AppStacks from './src/navigation/app/AppStack';
import { QueryClientProvider } from '@tanstack/react-query'
import queryClient from './src/services/query/queryClient';
const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppContainer />
          </AuthProvider>
      </QueryClientProvider>
    </>
  )
};


const AppContainer = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {
        (!user) ? (
          <AuthStack />
        ) : (
          <AppStacks />
        )
      }
    </>
  )
}

export default App