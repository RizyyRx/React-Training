import React, { Component } from 'react'

export class OrderButton extends Component {
    constructor(){
        super()
        this.state = {
          isOrderPlaced:false
        }
    }

    placeOrder = ()=>{
        this.setState({isOrderPlaced:!this.state.isOrderPlaced})
    }

  render() {
    return (
      <div>
        <h1>7. Order Button</h1>
        <button onClick={this.placeOrder}>Place order</button>
        {this.state.isOrderPlaced && <p>Order placed!</p>}
      </div>
    )
  }
}

export default OrderButton