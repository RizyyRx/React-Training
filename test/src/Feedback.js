import React, { useState } from 'react'
 
export default function FeedBack() {
    const [name,setName]=useState("");
    const [feedback,setFeedback]=useState("");
    const [rating,setRating]=useState("good");
    const [error,setError]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(name.trim()===""){
            setError("Name is required");
            return;
        }
        if(feedback.trim().length<5){
            setError("Feedback should be atleast 5 lines");
            return;
        }
        setError("");
        alert("Thanks for the feedback");
 
    }
  return (
    <div>
        <h2> FeedBack Form</h2>
        <form onSubmit={handleSubmit}>
            <div style={{marginBottom:"10px"}}>
                <label>Name:</label><br/>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            
            </div>
            <div style={{marginBottom:"10px"}}>
                <label>Feedback:</label><br/>
                <textarea rows="3"
                value={feedback}
                onChange={(e)=>setFeedback(e.target.value)}/>
            
            </div>
            <div style={{marginBottom:"10px"}}>
                <label>Rating:</label>
                <select value={rating} onChange={(e)=>setRating(e.target.value)}>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    <option value="poor">Poor</option>
                </select>
            </div>
            {error && <p style={{color:"red"}}>{error}</p>}
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}
 
 