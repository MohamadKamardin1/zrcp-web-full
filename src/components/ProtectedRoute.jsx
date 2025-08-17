// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

// Replace with your real admin email:
const ADMIN_EMAIL = "sultankvanny@gmail.com";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;
  if (!user || user.email !== ADMIN_EMAIL) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;
