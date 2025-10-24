import axios from 'axios'
import React, { Component } from 'react'

export class Photos extends Component {
    constructor(){
        super()
        this.state={photos:[]}
    }
     componentDidMount(){
        axios.get("http://localhost:3501/photos")
        .then(response=>this.setState({photos:response.data}))
        .catch(err=>alert("error in loading the photos"))
    }

    render() {
        const { photos } = this.state
        return (
             <div>
                {photos.map(photo => (
                    <div key={photo.id}>
                        <p>Album ID: {photo.albumId}</p>
                        <p>ID: {photo.id}</p>
                        <p>Title: {photo.title}</p>
                        <img src={photo.url} alt={photo.title} />
                        <hr />
                    </div>
                ))}
            </div>
        )
    }
}

export default Photos