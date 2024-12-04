import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login";
import { logout } from "../Authentication/Store/AuthSlice";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { app } from "../Firebase";

const Navbar = () => {
  // Get the navigate function from the hook
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const setProfileImg = user?.profileImg;
  const setUserName = user?.username;
  const auth = getAuth(app);
  const google = new GoogleAuthProvider();
  const handlelogout = async () => {
    const googleLogout = await signOut(auth);
    console.log(googleLogout);
    dispatch(logout());
  };

  return (
    <>
      <div className="w-11/12 h-10 mx-auto">
        <div className="flex items-center justify-between border-b-4 border-b-red-600 ">
          <div className="">
            <span
              onClick={() => {
                navigate("/");
              }}
              className="flex items-center justify-between"
            >
              <img
                src={setProfileImg}
                alt=""
                className="rounded-full object-cover w-10 h-10  border-red-500 m-0.5 border-2 "
              />
              <h2 className="text-zinc-500 font-bold m-5">
                {setUserName ? setUserName : "BlogApp"}
              </h2>
            </span>
          </div>
          <div className="flex items-center">
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline hover:bg-slate-100"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:bg-slate-100 hover:underline"
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:bg-slate-100 hover:underline"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </h3>
            {user ? (
              <h3
                className="px-4 py-2 border-2 text-lg hover:scale-105 hover:bg-slate-100 hover:underline"
                onClick={handlelogout}
              >
                Logout
              </h3>
            ) : (
              <h3
                className="px-4 py-2 border-2 text-lg hover:scale-105 hover:bg-slate-100 hover:underline"
                onClick={() => {
                  navigate("/Login");
                }}
              >
                login
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
