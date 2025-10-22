import React,{useState} from 'react'

function Login(props) {
    const[username,setUsername] = useState("")
  return (
    <div>
        <h1>Functional Component</h1>
        <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
        The name is: {username}
    </div>
  )
}

export default Login