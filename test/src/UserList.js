import React, { Component } from 'react'
import UserContext from './UserContext'
 
export class UserList extends Component {
    static contextType=UserContext;
 
    render() {
    const {users,loading,error}=this.context;
    if(loading) return <p>Loading users....</p>
    if(error) return <p> Error:{error}</p>
    return(
        <ul>
            {users.map((user)=>(
                <li key={user.id}>
                    {user.username}-{user.email}
                </li>
            ))}
        </ul>
    )
  }
}
 
export default UserList