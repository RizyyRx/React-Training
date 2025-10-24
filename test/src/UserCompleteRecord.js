import axios from 'axios';
import React, { useDebugValue, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function UserCompleteRecord() { 
  const {id}=useParams();
  const [user,setUser]=useState("");
    useEffect(()=>{
        axios.get('http://localhost:3500/users/'+id)
        .then(res=>setUser(res.data))
        .catch(err=>alert("no record found"));
    })

  return (
    <div>UserCompleteRecord : The user detail:{user.id}
    {user.name}
    {user.email}
    {user.username}
    {user.phone}
    {user.website}
    </div>
  )
}

export default UserCompleteRecord