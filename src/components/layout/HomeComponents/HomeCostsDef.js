

import React from "react";

import styles from './HomeCostsDef.module.css'

import homeDefImg from '../../../img/homeDefImg.png'

function HomeCostsDef() {

    return (
        <section className={styles.HomeCostsDefContainer}>
             <div className={styles.HomeCostsDefImgContent}><img src={homeDefImg} alt="ProjectImage"/></div>
             <div className={styles.HomeCostsDefTextsContent}>
                 <div className={styles.HomeCostsDefTitleHrContent}>
                    <h5>What is Costs?</h5><hr></hr>
                 </div>
                 <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                    feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                    Vestibulum tincidunt sit amet sapien non cursus. 
                    Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                    Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                    Curabitur sed turpis sit amet ex laoreet aliquet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                    feugiat ultrices.
                    <br></br><br></br>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                    feugiat ultrices. Proin malesuada felis quis mauris sagittis porta. 
                    Vestibulum tincidunt sit amet sapien non cursus. 
                    Ut accumsan consequat mauris quis tempus. Nam ac sapien risus. 
                    Phasellus eleifend diam non risus vehicula, et tristique sapien commodo. 
                    Curabitur sed turpis sit amet ex laoreet aliquet.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                    feugiat ultrices.
                 </h2>
             </div>
        </section>
    )

}

export default HomeCostsDef