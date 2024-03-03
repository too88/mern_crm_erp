import { Routes, Route, Navigate } from "react-router-dom";

import Login from "@/pages/Auth/Login";
import Register from "@/pages/Auth/Register";
import Verify from "@/pages/Auth/Verify";

export default function AuthRouter() {
  return (
    <Routes>
      <Route element={<Register />} path="/" />
      <Route element={<Login />} path="/login" />
      <Route element={<Navigate to="/login" replace />} path="/logout" />
      <Route element={<Register />} path="/register" />
      <Route element={<Verify />} path="/verify/:userId/:emailToken" />

    </Routes>
  );
}
