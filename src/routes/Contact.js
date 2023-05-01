import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <>
        <div>Contact</div>
        <Link to = "company">Company</Link>
        <Outlet />
    </>
  )
}

export default Contact