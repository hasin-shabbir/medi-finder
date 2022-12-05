
import styles from '../../styles/Home.module.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddDrug = () => {
    const [drugName, setDrugName] = useState('')
    const [description, setDescription] = useState('')
    const [caution, setCaution] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [dosage, setDosage] = useState('')
    const [storage, setStorage] = useState('')
    const [addImage, setAddImage] = useState('')
    const [addVideo, setAddVideo] = useState('')

  return (
    <div className = {styles.container}>
        <Link to="/home" className={styles.links}><h5>Go back</h5></Link>
        <h2> Add Medicine</h2>
        <form action ="sendmail.php" method= "POST">
            <div style = {{display: 'inline-block'}}>
                <label >Drug Name</label>
                <input 
                    className = {styles.addDrugInfoSmall}
                    type = 'text'
                    name= 'Drug Name' 
                    required
                    placeholder="Drug Name" 
                    value ={drugName}
                    onChange={(e)=> setDrugName(e.target.value)} 
                />
            </div>
            <br></br>
            <div style = {{display: 'inline-block'}}>
                <label>Description</label>
                <textarea style ={{fontFamily: 'Heebo'}} 
                    className = {styles.addDrugInfoLarge}
                    name= 'Description' 
                    required
                    placeholder="Drug Description (Purpose)" 
                    value ={description}
                    onChange={(e)=> setDescription(e.target.value)} 
                />
            </div>
            <div style = {{display: 'inline-block', paddingLeft:'100px'}}>
                <label>Caution</label>
                <textarea style ={{fontFamily: 'Heebo'}} 
                    className = {styles.addDrugInfoLarge}
                    name= 'Caution' 
                    required
                    placeholder="Drug Caution" 
                    value ={caution}
                    onChange={(e)=> setCaution(e.target.value)} 
                />
            </div>
            <br></br>
            <div style={{paddingRight: '30%'}}>
                <label >Ingredients</label>
                <input 
                    className = {styles.addDrugInfoSmall}
                    type = 'text'
                    name= 'Ingredients' 
                    required
                    placeholder="Drug Ingredients" 
                    value ={ingredients}
                    onChange={(e)=> setIngredients(e.target.value)} 
                />
            </div>
            <div style = {{display: 'inline-block' }}>
                <label>Dosage</label>
                <textarea style ={{fontFamily: 'Heebo'}} 
                    className = {styles.addDrugInfoLarge}
                    type = 'text'
                    name= 'Dosage' 
                    required
                    placeholder="Drug Dosage" 
                    value ={dosage}
                    onChange={(e)=> setDosage(e.target.value)} 
                />
            </div>
            <div style = {{display: 'inline-block', paddingLeft:'100px'}}>
                <label>Storage</label>
                <textarea style ={{fontFamily: 'Heebo'}} 
                    className = {styles.addDrugInfoLarge}
                    type = 'text'
                    name= 'Storage' 
                    required
                    placeholder="Storage" 
                    value ={Storage}
                    onChange={(e)=> setStorage(e.target.value)} 
                />
            </div>
            <div styles={{borderColor: 'white'}}>
                <label >Add Image (png, jpeg, gif)</label>
                <input 
                    styles={{borderColor: 'white'}}
                    type = 'file'
                    name= 'addImage' 
                    required
                    placeholder="Industries" 
                    value ={addImage}
                    onChange={(e)=> setAddImage(e.target.value)} 
                />
            </div>
            <div>
                <label >Add video</label>
                <input 
                    type = 'file'
                    name= 'addVideo' 
                    placeholder="Keywords" 
                    value ={addVideo}
                    onChange={(e)=> setAddVideo(e.target.value)} 
                />
            </div>
            <div style ={{marginLeft: '-20px', width: '30px', marginBottom: '30px' }}>
                <input 
                    className={styles.btn}
                    type = 'submit' 
                    value ='Save'
                    name = 'submit'
                />
            </div>
            
        </form>
    </div>
  )
}

export default AddDrug
