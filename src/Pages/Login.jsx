import React, { useState } from "react";
import { app, storage } from "../Firebase";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../Authentication/Store/AuthSlice";
const Login = () => {
  // console.log(storage);
  // console.log(app);
  const auth = getAuth(app);

  const googleProvider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  // console.log(googleProvider);

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      console.log({ res });
      const data = {
        username: res.user.displayName,
        email: res.user.email,
        profileImg: res.user.photoURL,
      };
      console.log({ data });
      dispatch(login({ user: data }));

      alert("Signed in successfully with Google");
    } catch (error) {
      console.error("Error signing in with Google............", error);
    }
  };

  return (
    <>
      <button className="p-6 m-10 bg-red-400" onClick={signInWithGoogle}>
        SignUpWithGoogle
      </button>
      ;
    </>
  );
};

export default Login;
