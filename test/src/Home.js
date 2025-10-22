import React, { Component } from 'react'

export class Home extends Component {
  constructor(props){ //props are used to send data from one component to another(i.e sent from parent to child)
    super(props)
  }

  render() {
    return (
        <>
        <div>Home</div>
        <h1>Movie Name:</h1>{this.props.moviename}
        <h1>Actor Name:</h1>{this.props.actorname}
        <h1>without attribute:</h1>{this.props.children}
      </>
    )
  }
}

export default Home