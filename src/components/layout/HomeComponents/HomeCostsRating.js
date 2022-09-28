

import React from "react";
import styles from './HomeCostsRating.module.css'

import { FaStar } from 'react-icons/fa'

import Person1 from '../../../img/person_1.jpg';
import Person2 from '../../../img/person_2.png';
import Person3 from '../../../img/person_3.jpg';
import Person4 from '../../../img/person_4.jpg';
import Person5 from '../../../img/person_5.jpg';

import BorderLeft from "../BorderLeft/BorderLeft";


function HomeCostsRating() {

    return(
        <section className={styles.HomeCostsRatingContainer}>
            <div className={styles.HomeCostsRatingContent}>
                <div className={styles.HomeCostsRating}>
                    <h1 className={styles.HomeCostsRatingTitle}>Average User Rating</h1>
                    <h1 className={styles.HomeCostsRatingTitle}>8.4/10</h1>
                    <div className={styles.HomeCostsRatingStars}>
                        <span><FaStar style={{ fill: '#ffffff'}}/></span>
                        <span><FaStar style={{ fill: '#ffffff'}}/></span>
                        <span><FaStar style={{ fill: '#ffffff'}}/></span>
                        <span><FaStar style={{ fill: '#ffffff'}}/></span>
                        <span><FaStar style={{ fill: '#ffffff' }}/></span>
                    </div>
                </div>
                <div className={styles.HomeCostsRatingTextsContainer}>
                    <div className={styles.HomeCostsRatingTexts}>
                        <BorderLeft/>
                        <span className={styles.HomeCostsRatingUserDetails}>
                            <img src={Person1} alt="Person1" className={styles.HomeCostsRatingUserPhoto}/>
                            <h4>Connor McGregor</h4>
                        </span>
                        <span className={styles.HomeCostsRatingUserAval}>
                            <div className={styles.HomeCostsRatingStarsTwo}>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff' }}/></span>
                            </div>
                            <h3>Its a Good Project Management</h3>
                            <span className={styles.HomeCostsRatingTextAuto}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                                feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                                Vestibulum tincidunt sit amet sapien non cursus. 
                                Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                                Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                                Curabitur sed turpis sit amet ex laoreet aliquet.
                            </span>
                        </span>
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                    <BorderLeft/>
                        <span className={styles.HomeCostsRatingUserDetails}>
                            <img src={Person2} alt="Person2" className={styles.HomeCostsRatingUserPhoto}/>
                            <h4>David Motta</h4>
                        </span>
                        <span className={styles.HomeCostsRatingUserAval}>
                            <div className={styles.HomeCostsRatingStarsTwo}>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff' }}/></span>
                            </div>
                            <h3>Its a Good Project Management</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                                feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                                Vestibulum tincidunt sit amet sapien non cursus. 
                                Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                                Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                                Curabitur sed turpis sit amet ex laoreet aliquet.
                            </span>
                        </span>
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                    <BorderLeft/>
                        <span className={styles.HomeCostsRatingUserDetails}>
                            <img src={Person3} alt="Person3" className={styles.HomeCostsRatingUserPhoto}/>
                            <h4>Sabrina Mountain</h4>
                        </span>
                        <span className={styles.HomeCostsRatingUserAval}>
                            <div className={styles.HomeCostsRatingStarsTwo}>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff' }}/></span>
                            </div>
                            <h3>Its a Good Project Management</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                                feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                                Vestibulum tincidunt sit amet sapien non cursus. 
                                Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                                Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                                Curabitur sed turpis sit amet ex laoreet aliquet.
                            </span>
                        </span>
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                    <BorderLeft/>
                        <span className={styles.HomeCostsRatingUserDetails}>
                            <img src={Person4} alt="Person4" className={styles.HomeCostsRatingUserPhoto}/>
                            <h4>McLovin</h4>
                        </span>
                        <span className={styles.HomeCostsRatingUserAval}>
                            <div className={styles.HomeCostsRatingStarsTwo}>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff' }}/></span>
                            </div>
                            <h3>Its a Good Project Management</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                                feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                                Vestibulum tincidunt sit amet sapien non cursus. 
                                Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                                Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                                Curabitur sed turpis sit amet ex laoreet aliquet.
                            </span>
                        </span>
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                    <BorderLeft/>
                        <span className={styles.HomeCostsRatingUserDetails}>
                            <img src={Person5} alt="Person5" className={styles.HomeCostsRatingUserPhoto}/>
                            <h4>Michelangelo Simoni</h4>
                        </span>
                        <span className={styles.HomeCostsRatingUserAval}>
                            <div className={styles.HomeCostsRatingStarsTwo}>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff'}}/></span>
                                <span><FaStar style={{ fill: '#ffffff' }}/></span>
                            </div>
                            <h3>Its a Good Project Management</h3>
                            <span>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                                feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                                Vestibulum tincidunt sit amet sapien non cursus. 
                                Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                                Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                                Curabitur sed turpis sit amet ex laoreet aliquet.
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HomeCostsRating