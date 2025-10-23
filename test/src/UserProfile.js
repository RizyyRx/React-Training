import axios from 'axios';
import React, { Component } from 'react'
 
export class UserProfile extends Component {
    constructor(){
        super();
        this.state={
            user:[],
            token:"eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc2MTIwNDg0MywiZXhwIjoxNzYxMjkxMjQzfQ.1Ln9C32BOkxVnK3wgJrkzUstjw95sIDLuvk9TpNK4J-mQZ39UV0nqnSHKT5Gp06t"
        }
    }
    fetchUsers(){
        axios.get("http://localhost:8080/api/admin/get-users",{
            headers:{Authorization:`Bearer ${this.state.token}`}
        })
        .then(response=>{
            this.setState({user:response.data})
        })
        .catch(err=>
            alert("server problem"))
    }
  render() {
      const userInfor=this.state.user.map(u=>{
          return(
          <ul>
           <li>{u.userId}</li>
          <li>{u.username}</li>
          <li>{u.email}</li>
          <li>{u.createdAt}</li>
          </ul>)
      })
    return (
      <div>
          {userInfor}
          <button onClick={()=>this.fetchUsers()}>Fetch User Profiles</button>
 
      </div>
    )
  }
}
 
export default UserProfile
 