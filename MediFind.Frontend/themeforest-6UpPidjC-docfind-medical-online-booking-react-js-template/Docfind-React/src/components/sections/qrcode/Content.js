import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getDrug } from '../../../helper/drugHelper';
import ReactDOM from 'react-dom';
import {QRCodeSVG} from 'qrcode.react';

class Content extends Component {
    render() {
        const detailId = this.props.detailId;
        const drug = getDrug(detailId);
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
                                                <QRCodeSVG value={"http://localhost:3000/medifind/drug-details/" +  this.props.detailId}/>,
                                            
                                            <br></br>

                                        </div>
                                     
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Content;