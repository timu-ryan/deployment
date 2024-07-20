import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <div>
        <nav>
            <NavLink className="nav-link" to="/">main page</NavLink>
            <NavLink className="nav-link" to="/info">info</NavLink>
            <NavLink className="nav-link" to="/contacts">contacts</NavLink>
        </nav>
    </div>
  )
}

export default Navigation