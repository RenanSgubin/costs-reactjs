

import React from "react";

import { Link } from 'react-router-dom'

import styles from './HiddenMenu.module.css'


function HiddenMenu() {

    let auxHidden = 0;

    function showHiddenMenu() {

        document.getElementsByClassName(styles.HiddenMenu)[0].style.right = "0%";
        auxHidden++;

        if(auxHidden === 2) {
            document.getElementsByClassName(styles.HiddenMenu)[0].style.right = "-100%";
            auxHidden = 0;
       }
    }

    return(

        <section className={styles.HiddenMenuContainer}>

            <div className={styles.HambMenu} onClick={showHiddenMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={styles.HiddenMenu}>
                <Link to="/" className={styles.headerLinks}>Home</Link>
                <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                <Link to="/company" className={styles.headerLinks}>Company</Link>
                <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                <Link to="/projects" className={styles.headerLinks}>Projects</Link>
                <div className={styles.headerLinksLoginRegisterContent}>
                    <Link to="/" className={styles.headerLinksLogin}>Login</Link>
                    <Link to="/" className={styles.headerLinksRegister}>Register</Link>
                </div>
            </ul>

        </section>


    )

}

export default HiddenMenu
