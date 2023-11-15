import React from "react";
import { useNavigate } from "react-router-dom";
import { getLocalStorageItem } from "./storage";

const AdminAuthGuard = ({ element, children }) => {
  const navigate = useNavigate();

  const isAuthenticated = () => {
    // Check the user's authentication status here.
    // You can use local storage or any other method to determine if the user is authenticated.
    const getData = JSON.parse(getLocalStorageItem());
    if (getData?.account === 'superAdmin') {
      return true;
    } else {
      return false;
    }
  };``

  if (!isAuthenticated()) {
    navigate("/login/admin");
  }
  console.log(isAuthenticated());
  return children;
};

export default AdminAuthGuard;
