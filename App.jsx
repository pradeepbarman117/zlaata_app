import React, {useContext, useEffect} from 'react';
import AuthProvider, {AuthContext} from './src/navigation/auth/AuthProvider';
import AuthStack from './src/navigation/stack/AuthStack';
import AppStacks from './src/navigation/app/AppStack';
import {QueryClientProvider} from '@tanstack/react-query';
import queryClient from './src/services/query/queryClient';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
const App = () => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <AppContainer />
          </AuthProvider>
        </QueryClientProvider>
      </Provider>
    </>
  );
};

const AppContainer = () => {
  const {user} = useContext(AuthContext);
  console.log('user App',user)

  return <>{!user ? <AuthStack /> : <AppStacks />}</>;
};

export default App;
