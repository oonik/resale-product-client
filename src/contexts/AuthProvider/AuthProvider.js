import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../../components/firebase/firebase.config';

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(true);

    const createUserWithEmail = (email, password)=>{
          setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password)=>{
          setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

   useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
          setUser(currentUser);
          setLoading(false);
       })
       return ()=> unsubscribe();
   },[])

    const authInfo = {
         createUserWithEmail,
         loginUser,
         user, 
         loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;