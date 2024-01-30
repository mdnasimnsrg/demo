import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouteLogin = () => {
  
  let localdata = localStorage.getItem('token');
  const auth = localdata;

  return !auth ? <Outlet /> : <Navigate to = "/dashboard" />;
};

export default PrivateRouteLogin;
