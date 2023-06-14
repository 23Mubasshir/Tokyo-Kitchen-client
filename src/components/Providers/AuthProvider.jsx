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
  updateProfile,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // <-----Regular Sign Up----->
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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    // stop observing while unmounting
    return () => {
      unsubscribe();
    };
  }, []);
  // <-----Add photo and name----->
  const userProfileUpdating = (name, photo) => {
    return updateProfile(auth.user, {
      displayName: {name},
      photoURL: {photo},
    }).then((result) => {
      setUser(result.user);
    }).catch((error) => {
      console.log("Error while updating");
    });
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    signInWithGithub,
    logOut,
    userProfileUpdating,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
