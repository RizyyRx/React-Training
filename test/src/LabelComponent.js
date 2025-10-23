import React, { Component } from 'react'
import HocComponent from './HocComponent' //import HocComponent

export class LabelComponent extends Component {

    constructor(props){ // add props to receive data from Hoc
        super(props)
    }

  //Here, access count var and inc count method using the reference names used in Hoc
  render() {
    return (
      <div>
        <h1>LabelComponent</h1>
        <h4>Count Value:{this.props.variablecount}</h4>

        <label onMouseOver={this.props.methodcount}>Hover to increment</label>
      </div>
      
    )
  }
}

export default  HocComponent(LabelComponent) //call through HocComponent