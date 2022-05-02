

import React, { useState } from "react";
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';
import logo from '../../../img/costs_logo.png';

import HiddenMenu from "../HiddenMenu/HiddenMenu";


function NavBar() {
    return(
       
        <nav className={styles.navHeader}>
            <Link to="/">
                <div className={styles.navHeaderLogoContent}>
                    <img src={logo} alt="Costs" className={styles.costsLogo}/>
                    <h4>|</h4>
                    <h4>Costs</h4>
                </div>
            </Link>
            <ul className={styles.ulHeader}>
                <Link to="/" className={styles.headerLinks}>Home</Link>
                <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                <Link to="/faq" className={styles.headerLinks}>Company</Link>
                {/*<Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                <Link to="/projects" className={styles.headerLinks}>Projects</Link>*/}
                <div className={styles.headerLinksLoginRegisterContent}>
                    <Link to="/login" className={styles.headerLinksLogin}>Login</Link>
                    <Link to="/register" className={styles.headerLinksRegister}>Register</Link>
                </div>
            </ul>

            <HiddenMenu/>

        </nav>
    )
}

export default NavBar