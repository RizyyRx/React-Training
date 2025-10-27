import React, { useReducer } from 'react'
import courseReducer from './reducers/courseReducer'
import initialState from './store/initialState'

export default function CoursePage1() {
    const[state, dispatch] = useReducer(courseReducer,initialState)

    const onTitleChange=(event)=>{
        event.preventDefault()
        dispatch({type:'SET_COURSE_TITLE',payload:event.target.value})
    }
    const onClickSave=()=>{
        dispatch({type:'ADD_COURSE'})
    }
    const courseRow=(course,index)=>{
        return <div key={index}>{course.title}</div>
    }
  return (
    <div>
        <h4>list of courses</h4>
        {state.courses.map(courseRow)}
        <h4>Add course</h4>
        <input type='text' value={state.course.title} onChange={onTitleChange}></input>
        <input type='submit' value="Add course" onClick={onClickSave}></input>
    </div>
  )
}
