

import React from "react"
import styles from '../layout/HomeComponents/Home.module.css'
import Spline from '@splinetool/react-spline';

import HomeCostsInfos from "../layout/HomeComponents/HomeCostsInfos";
import HomeCostsPlans from "../layout/HomeComponents/HomeCostsPlans";
import HomeCostsRating from "../layout/HomeComponents/HomeCostsRating";
import HomeCostsDef from "../layout/HomeComponents/HomeCostsDef";

import Footer from "../layout/Footer/Footer";

import wallpaper from '../../img/person_working.jpg'

function Home(){
    return(
        <section className={styles.homeColumn}>
            <img src={wallpaper} alt="People working" className={styles.homeWallpaper}/>
            <div className={styles.homeFlex}>
                <div className={styles.homeTextsContent}>
                    <h1>Welcome to the Costs</h1>
                    <p>Manage your projects</p>
                    <a href="/" className={styles.homeStartLink}>Start</a>
                </div>
            </div>

            <HomeCostsDef/>
            <HomeCostsInfos/>
            <HomeCostsRating/>
            <HomeCostsPlans/>
            <Footer/>
        </section>
    )
}

export default Home