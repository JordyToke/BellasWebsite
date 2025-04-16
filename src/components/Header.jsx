import React from "react";
import { NavLink } from "react-router";
import styles from "./Header.module.css";

const Routes = {};

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navList}>
        <li>
          <NavLink to="work" className={({isActive}) => isActive ? styles.active : styles.navLink}>work</NavLink>
        </li>
        <li>
          <NavLink to="biography" className={({isActive}) => isActive ? styles.active : styles.navLink}>biography</NavLink>
        </li>
        <li>
          <NavLink to="studio" className={({isActive}) => isActive ? styles.active : styles.navLink}>studio</NavLink>
        </li>
        <li>
          <NavLink to="contact" className={({isActive}) => isActive ? styles.active : styles.navLink}>contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={({isActive}) => isActive ? styles.active : styles.navLink}>
        <h1>Erratica</h1>
      </NavLink>
      <NavBar />
    </header>
  );
};

export default Header;
