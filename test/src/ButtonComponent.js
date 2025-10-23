import React, { Component } from 'react'
import HocComponent from './HocComponent'

export class ButtonComponent extends Component {

    constructor(props){
        super(props)
    }

  render() {
    return (
      <div>
        <h1>ButtonComponent</h1>
        <h4>Count Value:{this.props.variablecount}</h4>

        <button onClick={this.props.methodcount}>click to increase count</button>
      </div>
    )
  }
}

export default  HocComponent(ButtonComponent)