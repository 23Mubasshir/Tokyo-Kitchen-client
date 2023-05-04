import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // <-----Regular Sign Un----->
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // <-----Regular SignIn----->
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // <-----Google SignIn----->
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // <-----Github SignIn----->
  const signInWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // <-----Regular SignOut----->
  const logOut = () => {
    return signOut(auth);
  };
  // <-----Observe auth state change----->
  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('auth state change', currentUser);
        setUser(currentUser);
    });
    return () => {
        unsubscribe();
    }
  })


  const authInfo = {
    user,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
