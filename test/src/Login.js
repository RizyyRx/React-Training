import React,{useState} from 'react'
import Dashboard from './Dashboard';

function Login(props) {
    const[username,setUsername] = useState("")
    const isLoggedIn = false;

  if(isLoggedIn){
    return <Dashboard></Dashboard>
  } else{
      return (
      <div>
          <h1>Functional Component</h1>
          <input type='text' value={username} onChange={(event)=>setUsername(event.target.value)}></input>
          The name is: {username}
      </div>
    )
}
}

export default Login