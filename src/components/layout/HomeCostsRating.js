

import React from "react";
import styles from './css/HomeCostsRating.module.css'

import { FaStar } from 'react-icons/fa'

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
                        Lorem ipsum
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                        Lorem ipsum
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                        Lorem ipsum
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                        Lorem ipsum
                    </div>
                    <div className={styles.HomeCostsRatingTexts}>
                        Lorem ipsum
                    </div>
                </div>
            </div>
        </section>
    )

}

export default HomeCostsRating