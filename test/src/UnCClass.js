import React, { Component, createRef } from 'react'

export class UnCClass extends Component {
    constructor(){
        super()
        this.inputRef = createRef();
    }

    handleSubmit(){
        alert(this.inputRef.current.value);
    }
  render() {
    return (
      <div>
        Name:<input type='text' ref={this.inputRef}></input>
        <button onClick={()=>this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}

export default UnCClass