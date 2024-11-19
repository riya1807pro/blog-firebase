import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { handleUpload } from "../utils/imageStore";

const Blog = ({ posts, setPosts }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { post } = location.state || {};
  const [title, setTitle] = useState(post ? post.title : "");
  const [content, setContent] = useState(post ? post.content : "");
  const [file, setFile] = useState(post ? post.file : "");
  const [filePreview, setFilePreview] = useState("");

  const ref = useRef();

  // useEffect(() => {}, []);

  // function storeImageInLocalStorage(file) {
  //   const reader = new FileReader();

  //   reader.onloadend = function () {
  //     // The result is a Data URL
  //     localStorage.setItem("imageKey", reader.result);
  //     console.log("Image stored in local storage");
  //   };

  //   // Read the file as a Data URL
  //   reader.readAsDataURL(file);
  // }
  // const handleTitleChange =};

  // const handleContentChange = (event) => {
  //   setContent(event.target.value);
  // };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
    if (selectedFile) {
      setFilePreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title || !content) {
      alert("Title and content are required!");
      return;
    }
    const img = handleUpload(file);
    setPosts([...posts, { title, content, file: img }]);
    // console.log([[...posts, { title, content, file }]]);
    localStorage.setItem(
      "posts",
      JSON.stringify([...posts, { title, content, file: img }])
    );
    setTitle("");
    setContent("");
    // setFile(null);
    // setFilePreview("");
    navigate("/");
  };

  // useEffect(() => {
  //   return () => {
  //     if (filePreview) {
  //       URL.revokeObjectURL(filePreview);
  //     }
  //   };
  // }, [filePreview]);

  return (
    <div className="mt-10 bg-slate-300 min-h-max flex flex-col justify-center items-center">
      <form
        className="flex flex-col border-2 border-teal-400 w-10/12  overflow-hidden rounded-xl px-5 py-10 space-y-5"
        onSubmit={handleSubmit}
      >
        <div>
          <input
            className="border border-teal-500 rounded-lg px-5 py-3 bg-teal-200 active:bg-teal-300 hover:scale-105"
            placeholder="Title"
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            // ref={ref}
            autoFocus={true}
          />
        </div>
        <div>
          <textarea
            className="border border-teal-500 rounded-lg px-5 py-3 bg-teal-200 overflow-auto active:bg-teal-300 hover:scale-105"
            placeholder="Content"
            id="content"
            value={content}
            onChange={(event) => setContent(event.target.value)}
            rows={3}
            cols={30}
          />
        </div>
        <div>
          <input
            className="border border-teal-500 rounded-lg px-5 py-3 bg-teal-200 active:bg-teal-400 active:scale-105"
            placeholder="Add a file"
            type="file"
            id="file"
            onChange={handleFileChange}
          />
          {/* {filePreview && (
            <img src={filePreview} className="w-20 h-20 object-cover" />
          )} */}
        </div>
        <button
          className="border w-20 border-green-500 rounded-lg px-2 py-1 bg-green-200 overflow-auto hover:bg-green-300 hover:scale-105"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Blog;
