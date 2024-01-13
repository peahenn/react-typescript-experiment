// contexts/AuthContext.tsx

import React, { useContext, useState, useEffect, ReactNode } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextValue {
  currentUser: any; // Replace 'any' with the actual type of your user object
  signup: (email: string, password: string) => Promise<any>;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const auth = getAuth();
  const [currentUser, setCurrentUser] = useState<any>(); // Replace 'any' with the actual type of your user object

  function signup(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, [auth]);

  const value: AuthContextValue = {
    currentUser,
    signup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
