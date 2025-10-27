import React, { Component } from 'react'

export class TripCard extends Component {
    constructor(props){
        super(props)
        this.state={
            showDetails: false
        };
    }

    toggleDetails = () => {
        this.setState({ showDetails: !this.state.showDetails });
    };

  render() {
     return (
      <div>
        <h1>2. Trip Cards</h1>
        {this.props.details.map((trip, index) => (
          <div key={index}>
            <h2>Destination: {trip.destination}</h2>
            {this.state.showDetails && (
              <div>
                <p>Date: {trip.date}</p>
                <p>Cost: {trip.cost}</p>
              </div>
            )}
          </div>
        ))}
        <button onClick={this.toggleDetails}>
            {this.state.showDetails ? 'Hide Details' : 'Show Details'}
        </button>
      </div>
    )
  }
}

export default TripCard