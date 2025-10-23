import { Component } from "react"

const HOCFlower = (OriginalComponent)=>{

    return class extends Component{
        render(){
            return <h1>I am from HOC Flower component</h1>
        }
    }
}

export default HOCFlower;