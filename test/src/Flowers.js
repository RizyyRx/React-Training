import React, { Component } from 'react'
import HOCFlower from './HOCFlower'

export class Flowers extends Component {
  render() {
    return (
      <div>
        <h1>I am from flowers component</h1>
      </div>
    )
  }
}

export default HOCFlower(Flowers)