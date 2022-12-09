import React, { Component, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

const Content = (props) => {
  const detailId = props.detailId;
  const [drug, setDrug] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/api/drugs/" +
        detailId;
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      try {
        const response = await fetch(url, options);
        const body = await response.json();
        setDrug(body);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

  return (
    <div className="section sigma_post-details">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="sigma_post-details-inner">
              <div className="entry-content">
                <div id="overview">
                  <h3>QR Code Of {drug.drugName}</h3>
                  <div>
                    <QRCodeSVG
                      value={
                        "http://localhost:3000/medifind/drug-details/" +
                        props.detailId
                      }
                    />
                    ,<br></br>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
