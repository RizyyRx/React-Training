import React from 'react'

function ListBooks(props) {
    const listItemStyle = {
        border: '1px solid #333',
        padding: '10px',
        marginBottom: '10px',
        backgroundColor: '#b5771aff'
    };
  return (
    <div>
        <h1>3. List of Books</h1>
        <ul>
            {props.details.map((book)=>(
                <li style={listItemStyle}>{book.title} by {book.author} on {book.yearPublished}</li>
            ))}
        </ul>
    </div>
  )
}

export default ListBooks