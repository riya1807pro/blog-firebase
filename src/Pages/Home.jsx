import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import "./blog.css";

const Home = ({ posts, setPosts }) => {
  console.log({ home: posts });

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

  const handleImage = (file) => {
    console.log({ image: file });
    return URL.createObjectURL(file);
  };
  const navigate = useNavigate();
  return (
    <div className="mt-20 h-full w-11/12 bg-slate-200 ">
      <h1 className="text-lg font-medium text-center">Home Page</h1>
      <h2 className="text-lg font-medium text-center">Blog Posts</h2>
      <button
        className="py-2 px-4 border-black border rounded-lg ml-10 hover:scale-105 hover:bg-gradient-to-r transition-all duration-200 hover:bg-red-500 hover:to-green-500"
        onClick={() => navigate("/blog")}
      >
        Create New Post
      </button>
      <div className="mb-20"></div>
      <ul className="mb-20 space-y-10 " style={{ marginBottom: "100px" }}>
        {posts &&
          posts?.map((post, index) => {
            return (
              <li key={index}>
                <h3>{post?.title}</h3>
                <p>{post?.content}</p>
                {/* {post?.file !== null && (
                  <img
                    src={URL.createObjectURL(post.file)}
                    alt={`Post file ${index}`}
                  />
                )} */}
                <button
                  className="edit"
                  onClick={() => {
                    edit_post(index);
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete"
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
    </div>
  );
};

export default Home;
