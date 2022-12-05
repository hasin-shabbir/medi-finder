import styles from '../../styles/Home.module.css';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <Fragment>
    <div className={styles.form}>
        <h1> Log In to MediFind</h1>
        <form className = {styles.myform} action ="process.php" method= "POST">
            <div className = {styles.formGroup}>
                <input 
                    type = 'email'
                    name= 'email' 
                    required
                    placeholder="Email" 
                    value ={email}
                    onChange={(e)=> setEmail(e.target.value)} 
                />
            </div>
            <div className = {styles.formGroup}>
                <input 
                    type = 'password' 
                    name = 'password' 
                    required
                    placeholder ="Password" 
                    value ={password}
                    onChange={(e)=> setPassword(e.target.value)} 
                />
            </div>
            <div className = {styles.formGroup}>
                <input 
                    type = 'submit' 
                    value ='Log In'
                    name = 'submit'
                />
            </div>
            <div className = {styles.formGroup}>
                <h4>
                    <Link to="#" className={styles.links}>Forgot your password?</Link>
                <br></br>
                    Don't have an account yet? 
                    <Link to="/sign-up"  className={styles.links}>Create Account</Link>
                </h4>
            </div>
        </form>
    </div>
    </Fragment>
  )
}

export default Login
