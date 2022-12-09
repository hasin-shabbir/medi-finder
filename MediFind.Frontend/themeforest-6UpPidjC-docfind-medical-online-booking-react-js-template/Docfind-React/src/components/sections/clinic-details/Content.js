import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { getDrug } from "../../../helper/drugHelper";
// import { useLocation } from "react-router-dom";

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
                <div className="sigma_team style-17 mb-0">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <div className="sigma_team-thumb">
                        <img
                          src={
                            process.env.PUBLIC_URL +
                            "/assets/img/drug/" +
                            drug.drugId +
                            ".jpg"
                          }
                          alt={drug.drugName}
                        />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="sigma_team-body">
                        <h5>
                          <Link to={"/clinic-details/" + drug.drugId}>
                            {drug.drugName}
                          </Link>
                        </h5>
                        <div className="sigma_team-info mt-4">
                          <span>
                            <i className="fal fa-stethoscope" />
                            {drug.purpose}
                          </span>
                          <span>
                            <i className="fal fa-pills" />
                            {drug.ingredients}
                          </span>
                          <span>
                            <i className="fal fa-building" />
                            {drug.manufacturer}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="detail-menu-list">
                  <div className="row no-gutters">
                    <div className="col-md-4">
                      <div className="menu nav-item">
                        <Link
                          to="#"
                          className="nav-link active p-0"
                          onClick={() =>
                            document
                              .getElementById("overview")
                              .scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          Overview
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="menu nav-item">
                        <Link
                          to="#"
                          className="nav-link p-0"
                          onClick={() =>
                            document
                              .getElementById("cautions")
                              .scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          Cautions
                        </Link>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="menu nav-item border-0">
                        <Link
                          to="#"
                          className="nav-link p-0"
                          onClick={() =>
                            document
                              .getElementById("howTo")
                              .scrollIntoView({ behavior: "smooth" })
                          }
                        >
                          How To Use
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="overview">
                  <h3>Overview Of {drug.drugName}</h3>
                  <div>
                    <p>{drug.purpose}</p>
                    <br></br>
                    <p>{drug.details}</p>
                  </div>
                </div>
                <div className="spacer"></div>
                <div id="cautions">
                  <h3>Cautions</h3>
                  <h4>Avoid Using {drug.drugName}</h4>
                  <p>{drug.avoidReasons}</p>
                  <h4>Side-Effects of {drug.drugName}</h4>
                  <p>{drug.sideEffects}</p>
                </div>
                <div className="spacer"></div>
                <div id="howTo">
                  <h3>How to Use</h3>
                  <p>{drug.usage}</p>

                  <button type="button" className="sigma_btn">
                    See More
                    <i className="fal fa-arrow-right" />
                  </button>
                </div>
                <div id="additionalInfo">
                  <h3>Additional Information</h3>
                  <h4>How to Store</h4>
                  <p>{drug.storage}</p>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar Start */}
          <div className="col-lg-4">
            <div className="sidebar style-10 mt-5 mt-lg-0">
              {/* Request For QR Code */}
              <div className="widget">
                <h5 className="widget-title">Get QR Code</h5>
                <div className="widget-inner">
                  <Link to={"/QR-code/" + drug.drugId}>
                    <button
                      type="button"
                      className="sigma_btn btn-block btn-sm"
                    >
                      QR Code for {drug.drugName}
                      <i className="fal fa-arrow-right ml-3" />
                    </button>
                  </Link>
                </div>
              </div>
              {/* form Widget 2 */}
              <div className="widget">
                <h5 className="widget-title">Request for Update</h5>
                <div className="widget-inner">
                  <form>
                    <div className="form-group">
                      <i className="fal fa-user" />
                      <input
                        type="text"
                        name="fname"
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <i className="fal fa-envelope" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Message"
                        required
                      />
                    </div>
                    <button
                      type="button"
                      className="sigma_btn btn-block btn-sm"
                    >
                      Send Message
                      <i className="fal fa-arrow-right ml-3" />
                    </button>
                  </form>
                </div>
              </div>
              {/* Contact Widget */}
              <div className="widget">
                <h5 className="widget-title">Manufacturer Details</h5>
                <div className="widget-inner">
                  <div className="sigma_info style-24 p-0 shadow-none">
                    <div className="sigma_info-title">
                      <span className="sigma_info-icon bg-primary-1 text-white">
                        <i className="fal fa-building" />
                      </span>
                    </div>
                    <div className="sigma_info-description">
                      <h5>Manufacturer</h5>
                      <p>{drug.manufacturer}</p>
                    </div>
                  </div>
                  <div className="sigma_info style-24 p-0 shadow-none mb-0">
                    <div className="sigma_info-title">
                      <span className="sigma_info-icon bg-primary-1 text-white">
                        <i className="fal fa-map-marker-alt" />
                      </span>
                    </div>
                    <div className="sigma_info-description">
                      <h5>Address</h5>
                      <p>{drug.manufacturerAddress}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sidebar End */}
        </div>
      </div>
    </div>
  );
};

export default Content;
