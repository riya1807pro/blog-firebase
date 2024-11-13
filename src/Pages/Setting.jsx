import React from 'react';

const Setting = () => {
  return (
    <div>
      <h1>Setting Page</h1>
      <div className="profile">
        <h2>Profile</h2>
        <p>Username: John Doe</p>
        <p>Email: johndoe@example.com</p>
      </div>
      <div className="options">
        <h2>Options</h2>
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      </div>
    </div>
  );
};

export default Setting;