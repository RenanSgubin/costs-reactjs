



import React from "react";
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'
import logo from '../../../img/costs_logo.png'

import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
    return(
        <footer className={styles.footerContainer}>
            <div className={styles.footerContent}>

                    {/*Primeiro content*/}
                    <div className={styles.footerContentLogo}>
                        <span className={styles.logoAndTextContent}>
                            <img src={logo} alt="costs-logo" className={styles.footerLogo}/>
                            Costs
                        </span>
                        <span className={styles.footerContentTexts}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Nam laoreet mauris lectus, sit amet bibendum nulla feugiat eget. 
                            Nam a ornare eros, in luctus arcu. Praesent tincidunt est pulvinar, 
                            molestie augue eu, egestas ex. Nullam non metus erat. Sed ac enim quis 
                            lectus scelerisque tincidunt. Praesent nec tincidunt metus. In non enim elit. 
                            Phasellus quis orci feugiat nunc pulvinar tincidunt vel imperdiet felis. 
                        </span>
                    </div>

                <div className={styles.textsContainer}>

                    {/*Segundo content*/}
                    <div className={styles.footerContents}>
                        <span className={styles.footerTitles}>Contact</span>
                        <span className={styles.footerContentTexts}>
                            <Link to="/" className={styles.headerLinks}>Home</Link>
                            <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                            <Link to="/company" className={styles.headerLinks}>Company</Link>
                            <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                            <Link to="/projects" className={styles.headerLinks}>Projects</Link>
                        </span>
                    </div>

                    {/*Terceiro content*/}
                    <div className={styles.footerContents}>
                        <span className={styles.footerTitles}>Company</span>
                        <span className={styles.footerContentTexts}>
                            <Link to="/" className={styles.headerLinks}>Home</Link>
                            <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                            <Link to="/company" className={styles.headerLinks}>Company</Link>
                            <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                            <Link to="/projects" className={styles.headerLinks}>Projects</Link>
                        </span>
                    </div>

                    {/*Quarto content*/}
                    <div className={styles.footerContents}>
                        <span className={styles.footerTitles}>About us</span>
                        <span className={styles.footerContentTexts}>
                            <Link to="/" className={styles.headerLinks}>Home</Link>
                            <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                            <Link to="/company" className={styles.headerLinks}>Company</Link>
                            <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                            <Link to="/projects" className={styles.headerLinks}>Projects</Link>
                        </span>
                    </div>

                    {/*Quarto content*/}
                    <div className={styles.footerContents}>
                        <span className={styles.footerTitles}>Help</span>
                        <span className={styles.footerContentTexts}>
                            <Link to="/" className={styles.headerLinks}>Home</Link>
                            <Link to="/contact" className={styles.headerLinks}>Contact</Link>
                            <Link to="/company" className={styles.headerLinks}>Company</Link>
                            <Link to="/newproject" className={styles.headerLinks}>New Project</Link>
                            <Link to="/projects" className={styles.headerLinks}>Projects</Link>
                        </span>
                    </div>
                </div>

            </div>

            <span className={styles.IconsContent}>
                <FaGithub/>
                <FaLinkedin/>
            </span>

        </footer>
    )
}

export default Footer