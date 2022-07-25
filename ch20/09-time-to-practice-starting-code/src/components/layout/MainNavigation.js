import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "./MainNavigation.module.css"

const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.logo} to="/quotes">Great Quotes</NavLink>
      <nav className={styles.nav}>
        <ul>
          <li><NavLink to="/quotes" activeClassName={styles.active}>All Quotes</NavLink></li>
          <li><NavLink to="/new-quote" activeClassName={styles.active}>Add a Quotes</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation