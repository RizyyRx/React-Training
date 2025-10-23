import React, { Component } from 'react'

export class Product extends Component {

    constructor(){
        super()
        this.state={
            showQuantity:true,
            productData:[
                {
                    pid:"P101",
                    productName:"Samsung A5",
                    price:18000,
                    quantity:5
                },
                {
                    pid:"P102",
                    productName:"Oppo",
                    price:25000,
                    quantity:7
                },
                {
                    pid:"P103",
                    productName:"POCO M3",
                    price:12000,
                    quantity:10
                },
                {
                    pid:"P104",
                    productName:"Apple 17",
                    price:75000,
                    quantity:3
                }
            ]
        }
    }

    toggleQuantity(){
      this.setState({showQuantity:!this.state.showQuantity})
    }

  render() {
     const productTable = this.state.productData.map((product) => {
      return (
        <tr key={product.pid}>
          <td>{product.pid}</td>
          <td>{product.productName}</td>
          <td>{product.price}{product.price>50000 && <span style={{color:"green"}}>Premium offer</span>}</td>
          {this.state.showQuantity? <td>{product.quantity}</td>:null}
        </tr>
      )
      // in jsx, && means If condition is true → render it(it can be whatever jsx we put there), If condition is false → render nothing
    })
    return (
      <div>
        <h1>Available mobile phones</h1>
        <table border="1" >
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Price (₹)</th>
              {this.state.showQuantity?<th>Quantity</th>:null}
            </tr>
          </thead>
          <tbody>
            {productTable}
          </tbody>
        </table>

        <button onClick={()=>this.toggleQuantity()}>{this.state.showQuantity?"Hide Quantity":"Show quantity"}</button>
      </div>
    )
  }
}

export default Product