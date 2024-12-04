// import React, { useState } from "react";

// // const Contact = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     // Send the form data to your backend server
// //     try {
// //       const response = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify({ name, email, message }),
// //       });
// //       if (response.ok) {
// //         // Handle successful submission
// //         console.log("Message sent successfully!");
// //         // Reset form fields
// //         setName("");
// //         setEmail("");
// //         setMessage("");
// //       } else {
// //         // Handle errors
// //         console.error(
// //           "message cant send ,Error sending message:",
// //           response.status
// //         );
// //       }
// //     } catch (error) {
// //       console.error("Error sending message:", error);
// //     }
// //   };

// //   return (
// //     <div className="container mt-5">
// //       <h1 className="text-center mb-4">Contact Us</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label htmlFor="name">Name:</label>
// //           <input
// //             type="text"
// //             className="form-control"
// //             id="name"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="email">Email:</label>
// //           <input
// //             type="email"
// //             className="form-control"
// //             id="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label htmlFor="message">Message:</label>
// //           <textarea
// //             className="form-control"
// //             id="message"
// //             rows="5"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             required
// //           ></textarea>
// //         </div>
// //         <button type="submit" className="btn btn-primary">
// //           Send
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// export default Contact;
import React from "react";

function Contact() {
  return (
    <div className="bg-orange-100 items-center row content-center ">
      <p className="text-3xl font-black place-self-center decoration-double decoration-current text-center font-mono">
        Contact us:
      </p>
      <div className="place-self-center border-zinc-600 min-w-12 w-2/3 min-h-12 px-5 m-5 bg-slate-100 rounded-xl border-2 ">
        Connect with Instagram
      </div>
      <div className="place-self-center border-zinc-600 min-w-12 w-2/3 min-h-12 px-5 m-5 bg-slate-100 rounded-xl border-2 ">
        Connect with Instagram
      </div>
      <div className="place-self-center border-zinc-600 min-w-12 w-2/3 min-h-12 px-5 m-5 bg-slate-100 rounded-xl border-2 ">
        Connect on twitter
      </div>
      <span></span>
      <span className="text-lg m-10 mb-28 font-extralight right decoration-double decoration-current text-center font-mono">
        Phone no. <span>9034******</span>
      </span>
    </div>
  );
}

export default Contact;
