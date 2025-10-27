import React, { Component } from 'react'
import * as courseActions from "./actions/courseActions"
import { connect } from 'react-redux';

export class CoursePage extends Component {
    constructor(props){
        super(props)
        this.state={
            course:{title:""}
        }
    }

    onTitleChange(event){
        event.preventDefault();
        const localCourse = this.state.course;
        localCourse.title = event.target.value; // take input and save it to localCourse var
        this.setState({
            course:localCourse //then update the state 
        })
    }

    onClickSave(event){
        this.props.createCourse(this.state.course); // giving course state to a method createCourse as arg
    }

    // this can be supplied to map function
    courseRow(course, index){
        return <div key={index}>{course.title} </div>
    }
  render() {
    return (
      <div>
        <div>
            <h1>List of courses</h1>
            {this.props.courses.map(this.courseRow)}
        </div>
        <h1>Add CoursePage</h1>
        <label>Enter the course name:</label>
        <input type='text' value={this.state.course.title} onChange={(event)=>this.onTitleChange(event)}></input>
        <input type='submit' value='Add Course' onClick={(event)=>this.onClickSave(event)}></input>
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        courses:state.courses
    }
}

function mapActionsToProps(dispatch){
    return{
        createCourse:(course)=>dispatch(courseActions.createCourse(course))
    }
}

export default connect(mapStateToProps, mapActionsToProps)(CoursePage);