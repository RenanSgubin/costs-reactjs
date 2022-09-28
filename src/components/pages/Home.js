

import React from "react"
import styles from '../layout/HomeComponents/Home.module.css'
import Spline from '@splinetool/react-spline';

import HomeCostsInfos from "../layout/HomeComponents/HomeCostsInfos";
import HomeCostsPlans from "../layout/HomeComponents/HomeCostsPlans";
import HomeCostsRating from "../layout/HomeComponents/HomeCostsRating";
import HomeCostsDef from "../layout/HomeComponents/HomeCostsDef";

import Footer from "../layout/Footer/Footer";

import wallpaper from '../../img/person_working.jpg'
import wallpaperMobile from '../../img/home-mobile-wallpaper.jpg'

function Home(){
    return(
        <section className={styles.homeColumn}>
            <img src={wallpaper} alt="People working" className={styles.homeWallpaper}/>
            <img src={wallpaperMobile} alt="People working" className={styles.homeWallpaperMobile}/>

            <div className={styles.homeFlex}>
                <div className={styles.homeTextsContent}>
                    <div className={styles.homeTextsContentTitle}>
                        <h1>Welcome</h1>&nbsp;&nbsp;
                        <h1>to the</h1>&nbsp;&nbsp;
                        <h1>Costs</h1>
                    </div>
                    <p>Manage your projects</p>
                    <a href="/" className={styles.homeStartLink}>Start</a>
                </div>
            </div>

            <HomeCostsDef/>
            <HomeCostsInfos/>
            <HomeCostsRating/>
            <HomeCostsPlans/>
        </section>
    )
}

export default Home