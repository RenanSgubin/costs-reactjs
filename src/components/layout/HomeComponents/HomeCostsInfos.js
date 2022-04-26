

import React from "react"
import styles from './HomeCostsInfos.module.css'

import { FaGrav, FaNapster, FaUikit, FaTripadvisor } from "react-icons/fa";


function HomeCostsInfos() {


    return(
        <section className={styles.HomeCostsInfosContainer}>
            <h1>Why Costs?</h1>
            <div className={styles.HomeCostsInfosBlueBg}></div>
            <div className={styles.HomeCostsInfosContent}>
                <div className={styles.CostsInfosAlign} data-aos="fade-up">
                    <div className={styles.CostsInfos}><FaGrav/></div>
                    <h3>Lorem Ipsum</h3>
                    <span className={styles.CostsInfosText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam laoreet mauris lectus, sit amet bibendum nulla feugiat eget. 
                        Nam a ornare eros, in luctus arcu. Praesent tincidunt est pulvinar, 
                        molestie augue eu, egestas ex.
                    </span>
                </div>

                <div className={styles.CostsInfosAlign} data-aos="fade-up">
                    <div className={styles.CostsInfos}><FaNapster/></div>
                    <h3>Lorem Ipsum</h3>
                    <span className={styles.CostsInfosText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam laoreet mauris lectus, sit amet bibendum nulla feugiat eget. 
                        Nam a ornare eros, in luctus arcu. Praesent tincidunt est pulvinar, 
                        molestie augue eu, egestas ex.
                    </span>
                </div>

                <div className={styles.CostsInfosAlign} data-aos="fade-up">
                    <div className={styles.CostsInfos}><FaUikit/></div>
                    <h3>Lorem Ipsum</h3>
                    <span className={styles.CostsInfosText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam laoreet mauris lectus, sit amet bibendum nulla feugiat eget. 
                        Nam a ornare eros, in luctus arcu. Praesent tincidunt est pulvinar, 
                        molestie augue eu, egestas ex.
                    </span>
                </div>

                <div className={styles.CostsInfosAlign} data-aos="fade-up">
                    <div className={styles.CostsInfos}><FaTripadvisor/></div>
                    <h3>Lorem Ipsum</h3>
                    <span className={styles.CostsInfosText}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Nam laoreet mauris lectus, sit amet bibendum nulla feugiat eget. 
                        Nam a ornare eros, in luctus arcu. Praesent tincidunt est pulvinar, 
                        molestie augue eu, egestas ex.
                    </span>
                </div>
            </div>
        </section>
    )
}

export default HomeCostsInfos