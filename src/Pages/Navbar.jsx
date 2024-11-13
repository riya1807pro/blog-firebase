// import "./Navbar.css";
import { Navigate, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Get the navigate function from the hook
  const navigate = useNavigate();

  return (
    <>
      <div className="w-11/12 h-10 mx-auto">
        <div className="flex items-center justify-between border-b-4 border-b-red-600 ">
          <div className="">
            <span
              onClick={() => {
                navigate("/");
              }}
              className=""
            >
              <img
                src=""
                alt=""
                className="rounded-full object-cover w-10 h-10  border-red-500 m-0.5 border-2 "
              />
            </span>
          </div>

          <div className="flex items-center">
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/About");
              }}
            >
              About
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/Contact");
              }}
            >
              Contact
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/Setting");
              }}
            >
              <span className="material-symbols-outlined">settings</span>
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/Login");
              }}
            >
              login
            </h3>
            <h3
              className="px-4 py-2 border-2 text-lg hover:scale-105 hover:underline"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Sign-up
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
