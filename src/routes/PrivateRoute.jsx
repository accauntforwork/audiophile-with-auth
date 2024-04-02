import React from "react";
import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, path }) => {
  const isLoggedIn = localStorage.getItem("user");

  if (!isLoggedIn) {
    // Redirect to login if not logged in
    return <Navigate to="/login" replace state={{ from: path }} />;
  }

  return <Route path={path} element={element} />;
};

export default PrivateRoute;
