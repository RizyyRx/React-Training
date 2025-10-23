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

    saveUser(){
        const body={
            "id": 12,
            "name": "Graham Bel",
            "username": "Bel",
            "email": "bel@april.biz",
            "address": {
              "street": "Kulas Light",
              "suite": "Apt. 557",
              "city": "Gwenborough",
              "zipcode": "92998-3875",
              "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
              }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
              "name": "Romaguera-Crona",
              "catchPhrase": "Multi-layered client-server neural-net",
              "bs": "harness real-time e-markets"
            }
          }
          axios.post("http://localhost:3500/users",body)
          .then(res=>alert("record Saved"))
          .catch(err=>alert("check the data"))
 
    }

    putUser(){
        const body={
            "id": 1,
            "name": "Leanne Graham",
            "username": "Bret",
            "email": "Sincere@april.biz",
            "address": {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
                }
            },
            "phone": "1-770-736-8031 x56442",
            "website": "hildegard.org",
            "company": {
                "name": "Romaguera-Crona",
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
            }
        }


          axios.put("http://localhost:3500/users/1",body)
          .then(res=>alert("record updated using put"))
          .catch(err=>alert("check the data"))
 
    }

    patchUser(){
        const body={
            "name": "Marcus Howell"
          }
          axios.patch("http://localhost:3500/users/2",body)
          .then(res=>alert("record updated using patch"))
          .catch(err=>alert("check the data"))
 
    }

    deleteUser(){
          axios.delete("http://localhost:3500/users/11")
          .then(res=>alert("record deleted"))
          .catch(err=>alert("check the data"))
 
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
          <button onClick={()=>this.saveUser()}>save User </button>
          <button onClick={()=>this.putUser()}>put User </button>
          <button onClick={()=>this.patchUser()}>patch User </button>
          <button onClick={()=>this.deleteUser()}>delete User </button>
 
      </div>
    )
  }
}
 
export default UserProfile
 