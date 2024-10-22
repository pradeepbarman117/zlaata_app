import React, { createContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const getUser = useSelector((state) => state.auth.user);
  const [user,setUser] = useState(getUser);
  console.log('getUser',getUser)
  useEffect(() => {
    setUser(getUser);
  }, [getUser]);

  return (
    <AuthContext.Provider value={{ user}}>
      {children}
    </AuthContext.Provider>
  );s
};

export default AuthProvider;
export { AuthContext };