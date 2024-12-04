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
      alert = "login successfully!!!!";
      console.log({ data });
      dispatch(login({ user: data }));
    } catch (error) {
      alert = "uncessful login";
      console.error("Error signing in with Google............", error);
    }
  };

  return (
    <>
      <button
        className="p-4 m-10 bg-blue-300 border-2 rounded-lg"
        onClick={signInWithGoogle}
      >
        SignUpWithGoogle
      </button>
      ;
    </>
  );
};

export default Login;
