import styles from "../../styles/Home.module.css";
import { useState } from "react";
import Header from "../layouts/Header";
import React, { Fragment } from "react";
import Breadcrumbs from "../layouts/Breadcrumbs";
const pagelocation = "Add Medicine";

const AddDrug = () => {
  const [drugName, setDrugName] = useState("");
  const [description, setDescription] = useState("");
  const [caution, setCaution] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [usage, setUsage] = useState("");
  const [storage, setStorage] = useState("");
  const [image, setImage] = useState("");
  const [addVideo, setAddVideo] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturerAddress, setManufacturerAddress] = useState("");
  const [details, setDetails] = useState("");
  const [sideEffects, setSideEffects] = useState("");
  const [avoidReasons, setAvoidReasons] = useState("");
  const [purpose, setPurpose] = useState("");

  return (
    <Fragment>
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <div className={styles.container}>
        <form action="process.php" method="POST">
          <div style={{ display: "inline-block" }}>
            <label>Drug Name</label>
            <input
              className={styles.addDrugInfoSmall}
              type="text"
              name="Drug Name"
              required
              placeholder="Drug Name"
              value={drugName}
              onChange={(e) => setDrugName(e.target.value)}
            />
          </div>
          <br></br>
          <div style={{ display: "inline-block" }}>
            <label>Description</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              name="Description"
              required
              placeholder="Drug Description (Purpose)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div style={{ display: "inline-block", paddingLeft: "100px" }}>
            <label>Purpose</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              name="Purpose"
              required
              placeholder="Drug Purpose"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <label>Manufacturer</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              name="Manufacturer"
              required
              placeholder="Manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </div>
          {/* <div style={{ display: "inline-block", paddingLeft: "100px" }}>
            <label>Manufacturer Address</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              name="manufacturerAddress"
              required
              placeholder="Manufacturer Address"
              value={manufacturerAddress}
              onChange={(e) => setManufacturerAddress(e.target.value)}
            />
          </div> */}
          <br></br>
          <div style={{ paddingRight: "30%" }}>
            <label>Ingredients</label>
            <input
              className={styles.addDrugInfoSmall}
              type="text"
              name="Ingredients"
              required
              placeholder="Drug Ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </div>
          <div style={{ paddingRight: "30%" }}>
            <label>Details</label>
            <input
              className={styles.addDrugInfoSmall}
              type="text"
              name="Details"
              required
              placeholder="Drug Details"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
            />
          </div>
          <div style={{ display: "inline-block" }}>
            <label>Usage</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              type="text"
              name="Usage"
              required
              placeholder="Drug Usage"
              value={usage}
              onChange={(e) => setUsage(e.target.value)}
            />
          </div>
          <div style={{ display: "inline-block", paddingLeft: "100px" }}>
            <label>Storage</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              type="text"
              name="Storage"
              required
              placeholder="Storage"
              value={storage}
              onChange={(e) => setStorage(e.target.value)}
            />
          </div>
          <br></br>
          <div style={{ display: "inline-block" }}>
            <label>Side Effects</label>
            <textarea
              className={styles.addDrugInfoLarge}
              type="text"
              name="Side Effcts"
              required
              placeholder="SideEffects"
              value={sideEffects}
              onChange={(e) => setSideEffects(e.target.value)}
            />
          </div>
          <div style={{ display: "inline-block", paddingLeft: "100px" }}>
            <label>Avoid Reasons</label>
            <textarea
              style={{ fontFamily: "Heebo" }}
              className={styles.addDrugInfoLarge}
              type="text"
              name="avoidReasons"
              required
              placeholder="Avoid Reasons"
              value={avoidReasons}
              onChange={(e) => setAvoidReasons(e.target.value)}
            />
          </div>
          {/* <div style={{paddingRight: '30%'}}>
                <label >Caution</label>
                <input 
                    className = {styles.addDrugInfoSmall}
                    type = 'text'
                    name= 'Caution' 
                    required
                    placeholder="Caution" 
                    value ={caution}
                    onChange={(e)=> setCaution(e.target.value)} 
                />
            </div> */}
          <div styles={{ borderColor: "white" }}>
            <label>Add Image (png, jpeg, gif)</label>
            <input
              styles={{ borderColor: "white" }}
              type="file"
              name="addImage"
              required
              placeholder="Industries"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          {/* <div>
                <label >Add video</label>
                <input 
                    type = 'file'
                    name= 'addVideo' 
                    placeholder="Keywords" 
                    value ={addVideo}
                    onChange={(e)=> setAddVideo(e.target.value)} 
                />
            </div> */}
          <div
            style={{ marginLeft: "-20px", width: "30px", marginBottom: "30px" }}
          >
            <input
              className={styles.btn}
              type="submit"
              value="Save"
              name="submit"
            />
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default AddDrug;
