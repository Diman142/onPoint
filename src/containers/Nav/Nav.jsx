import classes from './Nav.module.css'
import React from 'react'

const Nav = ({activePage}) => {

  return (
    <nav className={classes.Nav}>
      <ul className={classes.NavList}>
        <li className={classes.NavListItem}> <a className={classes.NavListLink}></a></li>
        <li className={classes.NavListItem}> <a className={classes.NavListLink}></a></li>
        <li className={classes.NavListItem}> <a className={classes.NavListLink}></a></li>
      </ul>
    </nav>
  )

}

export default Nav
