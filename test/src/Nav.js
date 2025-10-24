import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/home">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/photo">Photo</Link>
        <Link to="/user">UserProfile</Link>

      </div>
    )
  }
}

export default Nav