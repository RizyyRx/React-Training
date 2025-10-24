import React from 'react'
import { useNavigate } from 'react-router-dom'

function SignIn() {
  const navigate = useNavigate();
  const handleLogin = ()=>{
    localStorage.setItem("auth","true");
    navigate("/user")
  }
  return (
    <div>SignIn
      <button onClick={handleLogin}>Click</button>
    </div>
  )
}

export default SignIn