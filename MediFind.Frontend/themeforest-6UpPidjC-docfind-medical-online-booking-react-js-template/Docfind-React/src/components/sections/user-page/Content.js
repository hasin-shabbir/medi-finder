import styles from '../../../styles/Home.module.css';
import { useState } from 'react';
import React, { Fragment } from "react";

const UserPage = () => {
    const [newPassword, setNewPassword] = useState('')
  return (
      <div className = {styles.container}>
        <div style = {{display: 'inline-block', paddingRight: "900px"}}>
                <form action ="sendmail.php" method= "POST">     
                    <h4 style={{paddingTop: '30px'}}> Change Password</h4>
                         <input 
                            className = {styles.addDrugInfoSLarge}
                            type = 'text'
                            name= 'NewPassword' 
                            placeholder="New Password" 
                            value ={[newPassword]}
                            onChange={(e)=> setNewPassword(e.target.value)} 
                        />
                        <div style ={{marginLeft: '-20px'}}>
                         <input 
                            className={styles.btn}
                             type = 'submit' 
                             value ='Change Password'
                             name = 'submitNewPassword'
                          />
                         </div>
                </form>
                <div style ={{marginLeft: '-20px'}}>
                    <button className={styles.btn}>Delete Account</button>
                </div>
            </div>
        </div>
  )
}

export default UserPage
