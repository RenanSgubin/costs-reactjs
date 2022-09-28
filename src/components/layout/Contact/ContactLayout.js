

import React from 'react'

import styles from './Contact.module.css'

import contactWallpaper from '../../../img/contact-wallpaper.jpg'

import { FaUserAlt, FaVoicemail, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactLayout() {

    return(
        <section className={styles.ContactContainer}>  
            <div className={styles.ContactContent} data-aos="fade-up">

                <div className={styles.ContactLeftDiv}>
                    <div className={styles.ContactLeftDivTextsContent}>
                        <span><FaUserAlt style={{ fill: 'rgb(206, 206, 206)', marginRight: '13px'}}/>Name</span>
                        <h4>Lorem Ipsum Dolor Alemet</h4><br></br>

                        <span><FaVoicemail style={{ fill: 'rgb(206, 206, 206)', marginRight: '13px'}}/>Email</span>
                        <h4>Lorem Ipsum Dolor Alemet</h4><br></br>

                        <span><FaPhoneAlt style={{ fill: 'rgb(206, 206, 206)', marginRight: '13px'}}/>Phone</span>
                        <h4>Lorem Ipsum Dolor Alemet</h4><br></br>

                        <span><FaMapMarkerAlt style={{ fill: 'rgb(206, 206, 206)', marginRight: '13px'}}/>Lorema</span>
                        <h4>Lorem Ipsum Dolor Alemet</h4>
                    </div>
                    <img src={contactWallpaper} alt="black wallpaper" className={styles.ContactWallpaper}/>
                </div>

                <div className={styles.ContactRightDiv}>

                <span className={styles.RegisterTitle}>
                   <span className={styles.RegisterTitleContent}><h3>Contact Us</h3></span>
                </span>

                <div className={styles.RegisterInputsContent}>
                    <div className={styles.InputsContent}>
                        
                        {/* Login e Senha */}

                        <span className={styles.RegisterInputsFlex}>
                            <label>Full Name</label>
                            <input type="text" className={styles.RegisterInputs} name="#" placeholder='Enter your Password'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Email</label>
                            <input type="email" className={styles.RegisterInputs} name="#" placeholder='Enter your Email'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Description</label>
                            <textarea className={styles.RegisterInputs} name="#" placeholder='Enter your Email'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Phone Number</label>
                            <input type="number" className={styles.RegisterInputs} placeholder='Confirm your Password'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlexSelect}>
                            <label>Type </label>
                            <select name="select" className={styles.RegisterInputs}>
                                <option value="software-developer" selected>Lorem</option>
                                <option value="student">Ipsum</option>
                                <option value="teacher">Dolor</option>
                            </select>
                        </span><br></br>

                        <button className={styles.RegisterButton}>
                            Send
                        </button>
                    </div>
                </div>

                </div>
            </div>
        </section>
    )

}

export default ContactLayout