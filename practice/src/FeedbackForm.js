import React, { Component } from 'react';

class FeedbackForm extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      rating: '',
      comments: '',
      submitted: false
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ submitted: true });
  };

  render() {
    const { name, rating, comments, submitted } = this.state;

    return (
      <div>
        <h1>11. Restaurant Feedback Form</h1>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name: </label>
                <input type="text" value={name} onChange={this.handleChange} required/>
            </div>

            <div>
                <label>Rating: </label>
                <input type="number" value={rating} onChange={this.handleChange} min="1" max="5" required />
            </div>

            <div>
                <label>Comments: </label>
                <textarea name="comments" value={comments} onChange={this.handleChange} required></textarea>
            </div>


          <button type="submit">Submit Feedback</button>
        </form>

        {submitted && (
          <div>
            <h2>Submitted Feedback</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Rating:</strong> {rating}</p>
            <p><strong>Comments:</strong> {comments}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FeedbackForm;
