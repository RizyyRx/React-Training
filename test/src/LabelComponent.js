import React, { Component } from 'react'

export class LabelComponent extends Component {

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
        <h1>LabelComponent</h1>
        <h4>Count Value:{this.state.count}</h4>

        <label onMouseOver={()=>this.incrementCount()}>Hover to increment</label>
      </div>
      
    )
  }
}

export default LabelComponent