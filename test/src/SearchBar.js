import React, { Component } from 'react'

export class SearchBar extends Component {
    constructor(props){
        super(props)
        this.state={    //state is a keyword, where we can have values inside it and update it using setState
            name:"", //Initially its empty
            mobileNumber:""
        }
    }

    changeName(event){
        this.setState({name:event.target.value}) // this will update the value of message in state
        
    }
    // setState will reload the render() with updated message value
    //event.target.value means the value in the text box, event means what event is provoked now? for exa, its onChange from textbox

    changeNumber(event){
        this.setState({mobileNumber:event.target.value})
    }

  render() {
    return (
      <div>
        Searchbar <br />
        <input type="text" value={this.state.name} onChange={(event)=>this.changeName(event)}></input> <br />
        <input type="text" value={this.state.mobileNumber} onChange={(event)=>this.changeNumber(event)}></input> <br />
        current value of Name: {this.state.name} <br />
        current value of Mobile Number:  {this.state.mobileNumber} <br />
        {/* <button onClick={()=>this.changeMessage()}>Change message</button> */}
        {/* button click will call the changeMessage func that will update the state */}
      </div>
    )
  }
}

export default SearchBar