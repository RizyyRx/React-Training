import React from 'react'

function MenuList(props) {
  return (
    <div>
        <h1>1. Menu List</h1>
        <ul>
            {props.dishes.map((dish)=>(
                <li>{dish.name} - {dish.price}</li>
            ))}
        </ul>
    </div>
  )
}

export default MenuList