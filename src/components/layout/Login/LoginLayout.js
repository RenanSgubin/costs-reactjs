



import React from 'react'

import { Link } from 'react-router-dom';

import styles from './Login.module.css'

import { FaGoogle, FaFacebookF } from "react-icons/fa";

function LoginLayout() {

    return(
        <section className={styles.LoginContainer} data-aos="fade-up">
            <div className={styles.skewDiv}></div>
            <div className={styles.Login}>
                <span className={styles.borderTop}></span> 

                <div className={styles.LoginInputsContent}>
                    <h2 className={styles.LoginInputsContentTitles}>Log in With</h2>

                    <span className={styles.GoogleFacebookButtonsContent}>
                        <button className={styles.GoogleFacebookButtons}>
                            <FaGoogle style={{ fill: '#dddcdc', fontSize: '1.7rem' }}/> <h5>Google</h5>
                        </button>

                        <button className={styles.GoogleFacebookButtons}>
                            <FaFacebookF style={{ fill: '#dddcdc', fontSize: '1.7rem' }}/> <h5>Facebook</h5>
                        </button>
                    </span><br></br>

                    <h2 className={styles.LoginInputsContentTitles}>Or</h2><br></br>


                    {/* Login e Senha */}
                    <span className={styles.LoginInputsFlex}>
                        <label>Email</label>
                        <input type="text" className={styles.LoginInputs} id="login-input" name="#" placeholder='Enter your Email'/>
                    </span><br></br>

                    <span className={styles.LoginInputsFlex}>
                        <label>Password</label>
                        <input type="password" className={styles.LoginInputs} id="psw-input" name="#" placeholder='Enter your Password'/>
                    </span><br></br><br></br>

                    <button className={styles.LoginButton}>Log In</button><br></br>

                    <span className={styles.toRegister}>
                        Don't have an account?&nbsp;<Link to="/register" >Sign Up</Link>
                    </span>

                </div>

                <span className={styles.borderBottom}></span>

            </div>
        </section>
    )

}

export default LoginLayout