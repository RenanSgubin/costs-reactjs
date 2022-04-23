

import React from "react";
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import logo from '../../../img/costs_logo.png';


function NavBar() {
    return(
       
        <nav className={styles.navHeader}>
            <Link to="/">
                <img src={logo} alt="Costs" className={styles.costsLogo}/>
            </Link>
            <ul className={styles.ulHeader}>
                <Link to="/" className={styles.headerLinks}>Home</Link>
                <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                <Link to="/company" className={styles.headerLinks}>Company</Link>
                <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                <Link to="/projects" className={styles.headerLinks}>Projects</Link>
            </ul>
        </nav>
    )
}

export default NavBar