import React from 'react'
import Dashboard from './Dashboard';
import Login from './Login';
import Product from './Product';

function MoveOn({userRole}) {
    let content;
    switch(userRole){
        case 'admin':
            content=<Product/>
            break;
        case 'user':
            content=<Dashboard/>
            break;
        default:
            content=<Login/>
    }
  return (
    <div>{content}</div>
  )
}

export default MoveOn