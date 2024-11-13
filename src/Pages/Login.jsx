import React, { useState } from "react";
import { app } from "../Firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth/web-extension";
import { signInWithPopup } from "firebase/auth";

const login = () => {
  // console.log(app);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  // console.log(googleProvider);


  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Signed in successfully with Google");
    } catch (error) {
      console.error("Error signing in with Google............", error);
    }
  };

  return (
    <>
      <button className="p-6 m-10 bg-red-500" onClick={signInWithGoogle}>
        SignUpWithGoogle
      </button>
      ;
    </>
  );
};
export default login;
