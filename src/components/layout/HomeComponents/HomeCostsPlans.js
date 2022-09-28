

import React from "react";
import styles from './HomeCostsPlans.module.css'

import { VscCheck } from "react-icons/vsc";
import { FaWindows, FaApple, FaAndroid, FaChrome } from "react-icons/fa";


function HomeCostsPlans() {
    return (
        <section className={styles.HomeCostsPlansContainer}>
            <h1>Our Plans</h1>

            <div className={styles.HomeCostsPlansContent}>

                  <div className={styles.HomeCostsPlans} data-aos="fade-right">
                    <div className={styles.HomeCostsPlansColumns}>
                        <span className={styles.HomeCostsPlansTitles}>
                            <h3>Free</h3>
                            <h2>5 Projects</h2>
                        </span>
                        <span className={styles.HomeCostsPlansPrice}>
                            <h3 className={styles.HomeCostsPlansPriceText}>R$ 0</h3>/month
                        </span><br></br><br></br>
                        <button className={styles.HomeCostsPlansBuyButton}>buy now</button>
                        <hr></hr>
                        <div className={styles.HomeCostsPlansIncludes}>
                            <h3>Include: </h3><br></br>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                        </div>
                    </div>

                    <div className={styles.HomeCostsPlansPlatforms}>
                        <h3>Available for: &nbsp;</h3>
                        <FaWindows style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaApple style={{ fill: '#dddcdc' }}  className={styles.PlatformsIcons}/>
                        <FaAndroid style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaChrome style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                    </div>
                </div>

                <div className={styles.HomeCostsPlans} data-aos="fade-up">
                    <div className={styles.HomeCostsPlansColumns}>
                        <span className={styles.HomeCostsPlansTitles}>
                            <h3>Premium</h3>
                            <h2>50 Projects</h2>
                        </span>
                        <span className={styles.HomeCostsPlansPrice}>
                            <h3 className={styles.HomeCostsPlansPriceText}>R$ 8,90</h3>/month
                        </span><br></br><br></br>
                        <button className={styles.HomeCostsPlansBuyButton}>buy now</button>
                        <hr></hr>
                        <div className={styles.HomeCostsPlansIncludes}>
                            <h3>Include: </h3><br></br>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                        </div>
                    </div>

                    <div className={styles.HomeCostsPlansPlatforms}>
                        <h3>Available for: &nbsp;</h3>
                        <FaWindows style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaApple style={{ fill: '#dddcdc' }}  className={styles.PlatformsIcons}/>
                        <FaAndroid style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaChrome style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                    </div>
                </div>

                <div className={styles.HomeCostsPlans} data-aos="fade-left">
                    <div className={styles.HomeCostsPlansColumns}>
                        <span className={styles.HomeCostsPlansTitles}>
                            <h3>Premium</h3>
                            <h2>Unlimited Projects</h2>
                        </span>
                        <span className={styles.HomeCostsPlansPrice}>
                            <h3 className={styles.HomeCostsPlansPriceText}>R$ 16,40</h3>/month
                        </span><br></br><br></br>
                        <button className={styles.HomeCostsPlansBuyButton}>buy now</button>
                        <hr></hr>
                        <div className={styles.HomeCostsPlansIncludes}>
                            <h3>Include: </h3><br></br>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                            <span><VscCheck/>Lorem Ipsum Dolor Alemet Muto</span>
                        </div>
                    </div>

                    <div className={styles.HomeCostsPlansPlatforms}>
                        <h3>Available for: &nbsp;</h3>
                        <FaWindows style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaApple style={{ fill: '#dddcdc' }}  className={styles.PlatformsIcons}/>
                        <FaAndroid style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                        <FaChrome style={{ fill: '#dddcdc' }} className={styles.PlatformsIcons}/>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default HomeCostsPlans