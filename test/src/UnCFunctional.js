import React, { useRef } from 'react'

function UnCFunctional() {
    const inputRef = useRef();

    const handleSubmit = ()=>{
        alert(inputRef.current.value);
    }   
  return (
    <div>
        Name:<input type='text' ref={inputRef}></input>
        <button onClick={()=>handleSubmit()}>Submit</button>
      </div>
  )
}

export default UnCFunctional