import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        <ul>
            <Link to='/index'>
            <li>Index page</li>
            </Link>
            <Link to='/products'>
            <li>products page</li>
            </Link>
            <Link to='/cart'>
            <li>cart page</li>
            </Link>
            <Link to='about'>
            <li>About page</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navbar