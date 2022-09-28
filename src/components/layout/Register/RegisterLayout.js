



import React from 'react'

import { Link } from 'react-router-dom';

import styles from './Register.module.css'


function RegisterLayout() {

    return(
        <section className={styles.RegisterContainer} data-aos="fade-up">
          <div className={styles.skewDiv}></div>
           <div className={styles.Register}>

               <span className={styles.RegisterTitle}>
                   <span className={styles.RegisterTitleContent}>Register in Costs</span>
                </span>

                <div className={styles.RegisterInputsContent}>
                    <h2>Welcome to Costs</h2><br></br>
                    <h4 className={styles.RegisterInputsSecondTitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Curabitur porttitor arcu id fringilla egestas. Duis maximus 
                        feugiat ultrices.
                    </h4><br></br><br></br>
                    <div className={styles.InputsContent}>
                        
                        {/* Login e Senha */}
                        <span className={styles.RegisterInputsFlex}>
                            <label>Username</label>
                            <input type="text" className={styles.RegisterInputs} name="#" placeholder='Enter your Username'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Email</label>
                            <input type="email" className={styles.RegisterInputs} name="#" placeholder='Enter your Email'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Password</label>
                            <input type="password" className={styles.RegisterInputs} name="#" placeholder='Enter your Password'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlex}>
                            <label>Confirm Password</label>
                            <input type="password" className={styles.RegisterInputs} placeholder='Confirm your Password'/>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlexSelect}>
                            <label>Im a </label>
                            <select name="select" className={styles.RegisterInputs}>
                                <option value="software-developer" selected>Software Developer</option>
                                <option value="student">Student</option>
                                <option value="teacher">Teacher</option>
                            </select>
                        </span><br></br>

                        <span className={styles.RegisterInputsFlexCheckBox}>
                            <input type="checkbox" className={styles.RegisterInputCheckBox}/>
                            <h4 className={styles.RegisterInputsSecondTitle}>I agree with the <Link to="/register">Terms & Conditions</Link></h4>
                        </span><br></br>

                        <button className={styles.RegisterButton}>
                            Register
                        </button><br></br><br></br>
                    </div>
                </div>

                <div className={styles.ToLogin}>
                    <span className={styles.ToLoginContent}>
                        Already have an account?&nbsp;<Link to="/login">Login</Link>
                    </span>
                </div>

           </div>
        </section>
    )

}

export default RegisterLayout