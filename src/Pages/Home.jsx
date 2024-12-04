import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDatabase } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../Authentication/Store/AuthSlice";
import ImageUpload from "../Components/ImageUpload";

const Home = ({ posts, setPosts }) => {
  const db = getDatabase();
  console.log({ home: posts });
  const theme = useSelector((state) => state.auth.theme);
  console.log({ theme });
  const confirm_delete = (index) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter((_, i) => i !== index);
      setPosts(updatedPosts);
      alert("post deleted!");
    } else {
      console.log("post not deleted");
    }
  };

  const edit_post = (index) => {
    const editedPosts = posts.map((post, i) => {
      alert("want to eduting.....");
      navigate("/blog", { state: { post: post, index: index } });
      if (i === index) {
        return { ...post, isEditable: true }, setPosts(editedPosts);
      } else {
        return post;
      }
    });
  };

  const dispatch = useDispatch();

  // const handleImage = (file) => {
  //   console.log({ image: file });
  //   return URL.createObjectURL(file);
  // };
  const navigate = useNavigate();
  return (
    <div className="mt-10 h-full w-12/12 bg-orange-50 ">
      <h1 className="text-3xl text-center font-mono mb-3 font-black">
        Home Page
      </h1>
      <h2 className="text-2xl  text-center font-mono font-medium">
        Blog Posts
      </h2>
      <div>
        {" "}
        <button
          className="py-2 px-4 border-black rounded-lg ml-72 mt-8 bg-yellow-900 text-white border-2  hover:scale-105  hover:bg-gradient-to-r transition-all duration-200 hover:bg-yellow-700 hover:to-green-500"
          onClick={() => navigate("/blog")}
        >
          Create New Post
        </button>
      </div>
      <div className="mb-20"></div>
      <ul className="mb-20 space-y-300 " style={{ marginBottom: "100px" }}>
        {posts &&
          posts?.map((post, index) => {
            return (
              <li key={index}>
                <div
                  className={`
                  ${theme === "light" ? "bg-yellow-700" : " bg-yellow-600"}
                  h-auto w-200 p-4 bg-blue-600 m-5 border-spacing-6 rounded-lg`}
                >
                  <h1
                    className={`${
                      theme === "light" ? "text-black" : " text-white"
                    }text-lg px-6 mb-6 text-white font-extrabold`}
                  >
                    {post?.title}
                  </h1>
                  <p
                    className={`${
                      theme === "light" ? "text-black" : "text-white"
                    } px-6 text-sm text-white font-mono font-medium`}
                  >
                    {post?.content}
                  </p>
                </div>
                {/* {post?.file !== null && (
                  <img
                    src={URL.createObjectURL(post.file)}
                    alt={`Post file ${index}`}
                  />
                )} */}
                <button
                  className={`${
                    theme === "light" ? "bg-green-900" : "bg-green-600"
                  } text-gray-900 font-size-6 ml-6 px-4 border-2 rounded-lg   bg-green-600 border-black-800`}
                  onClick={() => {
                    edit_post(index);
                  }}
                >
                  Edit
                </button>
                <button
                  className={`${
                    theme === "light" ? "bg-red-900" : "bg-red-600"
                  } mt-2 mb-10 text-gray-900 font-size-6 ml-6 px-4 border-2 rounded-lg bg-green-600 border-black-800
                `}
                  onClick={() => {
                    confirm_delete(index);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          })}
      </ul>
      <div
        className={`${
          theme === "dark" ? "bg-white" : "bg-gray-600"
        } h-80 w-full border border-green-500`}
      ></div>

      {/* <button
        className="absolute top-10 right-10 w-10 h-10 bg-green-500 hover:bg-green-600 rounded-2xl"
        onClick={() =>
          dispatch(changeTheme({ theme: theme === "light" ? "dark" : "light" }))
        }
      >
        {theme}
      </button> */}
    </div>
  );
};

export default Home;
