import { Component } from "react"

// Hoc Component takes original component as input 
// here, OriginalComponent is a var, as this HocComponent can be used by any other component (It can be reused)
const HocComponent=(OriginalComponent)=>{
    return class extends Component{
        constructor(){
            super()
            this.state={ 
                count:0 // define count state var
            }
        }

        // inc count method
        incrementCount(){
            this.setState({
                count:this.state.count+1
            })
        }

        // return the org comp with count var and inc count method
        render(){
            return <OriginalComponent variablecount={this.state.count}
             methodcount={()=>this.incrementCount()}/>
        }
    }
}

export default HocComponent;