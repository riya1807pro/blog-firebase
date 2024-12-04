import { useState } from "react";

function ImageUpload() {
  const [image, setImage] = useState([]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64String = reader.result;
      localStorage.setItem("image", base64String); // Use a string key
      setImage(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleImageLoad = () => {
    const base64String = localStorage.getItem("image");
    if (base64String) {
      // Check if base64String is not null
      const imageBlob = b64toBlob(base64String);
      const ImageURL = URL.createObjectURL(imageBlob);
      setImage(ImageURL);
    }
  };

  const b64toBlob = (b64Data) => {
    const byteString = atob(b64Data.split(",")[1]);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const intArray = new Uint8Array(arrayBuffer); // Correctly declare as Uint8Array
    for (let i = 0; i < byteString.length; i++) {
      // Use let to declare i
      intArray[i] = byteString.charCodeAt(i);
    }
    const blob = new Blob([intArray], {
      type: "image/png",
    });
    return blob;
  };

  return (
    <div>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageLoad}>Load Image</button>
      {image && <img src={image} alt="uploaded image" />}
    </div>
  );
}

export default ImageUpload;
