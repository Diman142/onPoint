import classes from './Nav.module.css'
import React, {useEffect, useRef} from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({activePage = 1}) => {

  let navLink1 = useRef(null)
  let navLink2 = useRef(null)
  let navLink3 = useRef(null)

  useEffect(() => {
    if(activePage === 1){
      navLink1.current.classList.add('activeLink')
    } else if(activePage === 2){
      navLink2.current.classList.add('activeLink')
    } else {
      navLink3.current.classList.add('activeLink')
    }
  }, [activePage])

  return (
    <nav className={classes.Nav} id="nav">
      <ul className={classes.NavList} id="navList">
        <li className={classes.NavListItem}>
          <NavLink
            ref={navLink1}
            to="/"
            className={classes.NavListLink}
          >
          </NavLink>
       </li>
        <li className={classes.NavListItem}>
          <NavLink
            ref={navLink2}
            to="/"
            className={classes.NavListLink}
            >
          </NavLink>
        </li>
        <li className={classes.NavListItem}>
        <NavLink
          ref={navLink3}
          to="/"
          className={classes.NavListLink}
          >
        </NavLink>
        </li>
      </ul>
    </nav>
  )

}

export default Nav
