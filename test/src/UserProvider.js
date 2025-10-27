import React, { Component } from 'react'
 
import UserContext from './UserContext';
export class UserProvider extends Component {
    constructor(props){
        super(props);
    this.state={
        users:[],
        loading:true,
        error:null
    }  
 }
 componentDidMount(){
     fetch("http://localhost:3500/users")
     .then((response)=>response.json())
     .then((data)=>this.setState({
       users:data,
       loading:false
     })).catch(error=>{
       this.setState({
         error:error.message,
         loading:false
       })
     })
 }
  render() {
    const {users,loading,error}=this.state;
    return (
      <UserContext.Provider value={{users,loading,error}}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}
 
export default UserProvider