import React, { Component } from 'react'

export class SeatAvailability extends Component {
    constructor(){
        super()
        this.state={
            travelData:[
                {
                    name:"Royal Travels",
                    sd:"Bangalore - Chennai",
                    seats:10
                },
                {
                    name:"SRS Travels",
                    sd:"Coimbatore - Bangalore",
                    seats:0
                },
                {
                    name:"Royal Travels",
                    sd:"Karur - Chennai",
                    seats:7
                }
            ]
        }
    }
  render() {
    const travelTable = this.state.travelData.map((bus)=>{
        return(
            <tr>
                <td>{bus.name}</td>
                <td>{bus.sd}</td>
                <td>{bus.seats}</td>
                <td>{bus.seats > 0 && <span style={{color:"green"}}>Seats Available!</span>}</td>
            </tr>
        )
    })
    return (
    <div>
        <h1>8. Seat Availability</h1>
        <table border="1">
            <thead>
                <tr>
                    <th>Travels Name</th>
                    <th>Source - Destination</th>
                    <th>Available Seats</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {travelTable}
            </tbody>
        </table>
    </div>
    )
  }
}

export default SeatAvailability