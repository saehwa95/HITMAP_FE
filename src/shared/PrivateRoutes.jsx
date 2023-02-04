import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { getCookie } from "./cookie";

// 'auth' 토큰 없으면 메인(지도)페이지로 이동시켜주는 역할
const PrivateRoutes = () => {
  const authJudge = getCookie("auth");

  return authJudge ? <Outlet /> : <Navigate to="/logInRegister" />;
};

export default PrivateRoutes;
