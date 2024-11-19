import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../Firebase";
//import { uploadTask } from "firebase/storage";

export const handleUpload = (image) => {
  if (image) {
    //Create a reference to the Firebase storage bucket
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    const storageRef = ref(storage, "image");

    // 'file' comes from the Blob or File API
    uploadBytes(storageRef, image).then((snapshot) => {
      console.log("Uploaded a blob or file!");
      console.log(snapshot);
    });

    // uploadTask.on(
    //   "state_changed",
    //   (snapshot) => {
    //     // Track the upload progress
    //     const progress = Math.round(
    //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100
    //     );
    //     // setProgress(progress);
    //   },
    //   (error) => {
    //     console.error("Error uploading image:", error);
    //   },
    //   () => {
    //     // Once the image is uploaded, get the download URL
    //     storage
    //       .ref("images")
    //       .child(image.name)
    //       .getDownloadURL()
    //       .then((url) => {
    //         console.log({ url }); // Set the URL of the uploaded image
    //         return url;
    //       });
    //   }
    // );
  }
};
