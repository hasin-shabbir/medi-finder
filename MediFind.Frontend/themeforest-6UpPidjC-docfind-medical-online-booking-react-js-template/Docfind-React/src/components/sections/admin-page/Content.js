import styles from '../../../styles/Home.module.css';
import { useState } from 'react';
import { Link } from "react-router-dom";


const AdminPage = () => {
  return (
    <div className = {styles.container}>
        <h4 style={{paddingTop: '30px'}}> Drugs Options</h4>
        <div style={{display: 'inline-block'}}>
        <div className="d-none d-sm-block">
            <Link to ='/add-drug' className="sigma_btn btn-sm">Add New Drug</Link>
        </div>
        </div>
        <div style={{display: 'inline-block'}}>
        <div className="d-none d-sm-block">
            <Link to ='/' className="sigma_btn btn-sm">Edit a Drug</Link>
        </div>
        </div>
        <div className="d-none d-sm-block">
            <Link to ='/' className="sigma_btn btn-sm">Delete a Drug</Link>
        </div>
    </div>
  )
}

export default AdminPage
