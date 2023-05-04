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
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  // <-----Regular Sign Un----->
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // <-----Regular SignIn----->
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // <-----Google SignIn----->
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  // <-----Github SignIn----->
  const signInWithGithub = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  // <-----Regular SignOut----->
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  // <-----Observe auth state change----->
  useEffect( ()=>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });
    // stop observing while unmounting
    return () => {
        unsubscribe();
    }
  })


  const authInfo = {
    user,
    loading,
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
