import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const ProtectedRoute = () => {
  let { isLogin } = useAuthContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default ProtectedRoute;
