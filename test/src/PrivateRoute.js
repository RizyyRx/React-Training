import React from 'react'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const isAuth = localStorage.getItem("auth");
  return (
    isAuth?children:<Navigate to="/" replace/>
  )
}

export default PrivateRoute