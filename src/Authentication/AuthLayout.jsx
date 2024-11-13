import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout() {
  const navigate = useNavigate;
  const Selector = useSelector(state.auth.status);

  useEffect(() => {
    if (auth.status == true) {
      navigate("/");
      alert("Navigating to home.....");
    } else {
      navigate("/login");
      alert("Navigating to login.....");
    }
  });
}

export default AuthLayout;
