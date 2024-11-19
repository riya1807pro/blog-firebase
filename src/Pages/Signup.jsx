import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Signup() {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.auth);
  console.log(selector);
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  // const handleSubmit = () => {
  //   preventDefault;
  //   signUp();
  // };

  // const signUp = () => {
  //   if (Password.length < 6) {
  //     alert("Password must be of 6 words");
  //     // return;
  //   }
  //   const auth = getAuth;
  //   createUserWithEmailAndPassword(auth, Email, Password)
  //     .then((userCredential) => {
  //       //signed in.....
  //       const user = userCredential.user;
  //       console.log(user);
  //       alert("new user created");
  //     })
  //     .catch((error) => {
  //       console.log("error found", error);
  //     });
  // };

  // const googleAuth = () => {};

  return (
    <div>
      <h2 className="center font-black">Create New User</h2>
      <form method="get">
        <label htmlFor="Email">Email: </label>
        <input
          type="email"
          placeholder="Enter your Email"
          onChange={(e) => {
            setEmail(e.target.value);

            // Call setPassword as a function
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Enter your Password"
          onChange={(e) => {
            setPassword(e.target.value);

            // Call setPassword as a function
          }}
        />
        <button
          type="submit"
          onClick={() => {
            handleSubmit();
            console.log("Email: ", Email, "Password: ", Password);
          }}
        >
          Create User
        </button>
      </form>
    </div>
  );
}

export default Signup;
