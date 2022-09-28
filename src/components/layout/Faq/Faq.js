

import React from "react"

import styles from './Faq.module.css'

import { FaChartBar, FaHeart, FaLock, FaHome, FaCheck, FaPoll } from "react-icons/fa";

function FaqLayout(){
    return(
        <section className={styles.faqContainer} data-aos="fade-up">
            <div className={styles.faqContent}>
                <h2>How we can help you?</h2>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In justo felis, 
                    aliquam et ornare eget, eleifend id justo. Pellentesque cursus pulvinar augue eget semper. 
                    Fusce a malesuada nibh.
                </h3>
                <div className={styles.faqInputsContent}>
                    <input type="text" placeholder="Find Help! Enter search here." className={styles.faqInput}/>
                    <button className={styles.faqButton}>Search</button>
                </div>

            </div>

            <section className={styles.faqQuestionsContent}>
                <div className={styles.faqQuestionsFlex}>
                    <div>
                        <FaChartBar style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                    <div>
                        <FaHeart style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                    <div>
                        <FaLock style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                    <div>
                        <FaHome style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                    <div>
                        <FaCheck style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                    <div>
                        <FaPoll style={{ fontSize: '3rem', border: '1px solid #e1e1e1', borderRadius: '5px', padding: '10px'}}/>
                        <small>Lorem Ipsum Dolor</small>
                    </div>
                </div>
            </section>

        </section>
    )
}

export default FaqLayout