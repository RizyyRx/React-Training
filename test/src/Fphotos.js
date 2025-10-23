import axios from 'axios';
import React, { useEffect, useState } from 'react'
 
function FPhotos() {
    const[photos,setPhotos]=useState([]);
    const [count,setCount]=useState(0);
 
    useEffect(()=>{
 
        axios.get("http://localhost:3500/photos")
        .then(response=>{
            setPhotos(response.data);
            console.log(response.data)
        })
        .catch(err=>alert("error in loading the photos"))
    },[count])
    const photoDetail=photos.map(u=>{
        return(
        <ul>
         <li>{u.id}</li>
        <li>{u.title}</li>
        <li><img src={u.thumbnailUrl}></img></li>
        <li>{u.url}</li>
        </ul>)
    })
   
  return (
    <div>
        {count}
        <button onClick={()=>setCount(count+1)}>increment count</button>
    {photoDetail}
</div>
  )
}
 
export default FPhotos;
 