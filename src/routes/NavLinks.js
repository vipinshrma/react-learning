import React from 'react'
import { Link } from 'react-router-dom'


const NavLinks = () => {
  return (
    <nav>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/about">About</Link></li>
            <li><Link to = "/blog">Blog</Link></li>
            <li><Link to = "/contact">Contact</Link></li>
        </ul>
    </nav>
  )
}

export default NavLinks