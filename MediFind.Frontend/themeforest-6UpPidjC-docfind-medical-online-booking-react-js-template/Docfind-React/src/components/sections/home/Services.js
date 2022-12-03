import React, { Component } from 'react';

class Services extends Component {
    render() {
        return (
            <div className="section section-padding sigma_service-sec style-16">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_service style-16">
                                <div className="sigma_service-thumb">
                                    <img src= {process.env.PUBLIC_URL + "/assets/img/home-1/LookUp.svg"} alt="LookUpIcon"/>
                                </div>
                                <div className="sigma_service-body">
                                    <h5>
                                        Simple Access
                                    </h5>
                                    <p>Scan & Look up Drug information</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_service style-16">
                                <div className="sigma_service-thumb">
                                    <img src= {process.env.PUBLIC_URL + "/assets/img/home-1/LookUp.svg"} alt="LookUpIcon"/>
                                </div>
                                <div className="sigma_service-body">
                                    <h5>
                                        Simple Access
                                    </h5>
                                    <p>Scan & Look up Drug information</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6" >
                            <div className="sigma_service style-16">
                                <div className="sigma_service-thumb">
                                    <img src= {process.env.PUBLIC_URL + "/assets/img/home-1/LookUp.svg"} alt="LookUpIcon"/>
                                </div>
                                <div className="sigma_service-body">
                                    <h5>
                                        Simple Access
                                    </h5>
                                    <p>Scan & Look up Drug information</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Services;