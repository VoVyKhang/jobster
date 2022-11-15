import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import React from "react";

function ProtectedUser({ children }) {
  const { user } = useSelector((store) => store.user);

  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
}

export default ProtectedUser;
