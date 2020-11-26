import { createContext } from 'react';

export const AuthContext = createContext({
  status: 'PENDING',
  isLoading: false,
  token: null,
  session: {},
  setAuthData: () => null,
});

export default AuthContext;
