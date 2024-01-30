import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Privateroute = () => {
  
  let localdata = localStorage.getItem('token');
  const auth = localdata;

  return auth ? <Outlet /> : <Navigate to = "/" />;
};


export default Privateroute;