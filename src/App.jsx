import "./App.css";
import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Blog from "./Pages/Blog";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Pages/Navbar";
import Setting from "./Pages/Setting";
import Login from "./Pages/Login";
import Footer from "./Pages/Footer";
import Contact from "./Pages/Contact";
import Signup from "./Pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./Authentication/Store/AuthSlice";
const App = () => {
  const [posts, setPosts] = useState([]);
  const dispatch = useDispatch();
  const { user, status } = useSelector((state) => state.auth);
  console.log({ user });
  // const data = {
  //   username: "dev",
  //   email: "dev123@gmail.com",
  // };
  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("posts"));
    // console.log({ storedPosts });

    if (storedPosts) {
      // setPosts(JSON.parse(storedPosts));
      setPosts(storedPosts);
    }
    // dispatch(login({ user: data }));
    // dispatch(logout());
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/blog"
          element={<Blog posts={posts} setPosts={setPosts} />}
        />
        <Route path="/" element={<Home posts={posts} setPosts={setPosts} />} />{" "}
        {/* Pass props to Home */}
        <Route path="/About" element={<About />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
