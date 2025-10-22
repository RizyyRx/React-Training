import React, { Component } from 'react'

export class ButtonComponent extends Component {

    constructor(){
        super()
        this.state={
            count:0
        }
    }

    incrementCount(){
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    return (
      <div>
        <h1>ButtonComponent</h1>
        <h4>Count Value:{this.state.count}</h4>

        <button onClick={()=>this.incrementCount()}>click to increase count</button>
      </div>
    )
  }
}

export default ButtonComponent