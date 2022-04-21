

import React from "react"
import styles from '../layout/css/Home.module.css'
import Spline from '@splinetool/react-spline';

import HomeCostsInfos from "../layout/HomeCostsInfos";
import HomeCostsPlans from "../layout/HomeCostsPlans";
import HomeCostsRating from "../layout/HomeCostsRating";

import Footer from "../layout/Footer";

function Home(){
    return(
        <section className={styles.homeColumn}>
            <div className={styles.homeFlex}>
                <div className={styles.homeTextsContent}>
                    <h1>Welcome to the Costs</h1>
                    <p>Manage your projects</p>
                    <a href="/" className={styles.homeStartLink}>Start</a>
                </div>
                <div>
                    <Spline scene="https://draft.spline.design/d2Q-tj7IGHnqMQAV/scene.spline" />
                </div>
            </div>

            <HomeCostsInfos/>
            <HomeCostsRating/>
            <HomeCostsPlans/>
            <Footer/>
        </section>
    )
}

export default Home