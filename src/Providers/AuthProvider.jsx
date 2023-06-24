import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState({});


  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //User info 

  const userInfo = (displayName, photoURL) => {
    return updateProfile (auth,displayName,photoURL);
  };

  //Login or SignUP 

  const loginUser = (email,password) => {
     return signInWithEmailAndPassword (auth,email,password)
  }


  //SignOut 

   const logout =  () => {
    return signOut(auth);
   }


  useEffect (() => {
    const unSubscribe = onAuthStateChanged(auth,
        (loggedInUser) => {
        setUser(loggedInUser);
    });
    return () => {
        unSubscribe();
    }
  },[])
  const authInfo = { registerUser, user , userInfo, logout , loginUser };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
