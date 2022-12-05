import styles from '../../styles/Home.module.css';
import { useState } from 'react';

import React, { Component } from 'react';
import { getDrug } from '../../helper/drugHelper';

class QRcode extends Component {
    render() {
        const detailId = this.props.detailId;
        const drug = getDrug(detailId);
        return (
            <div>
                <h4>{drug.drugName}</h4>
                

            </div>


    );
    }
}  
export default QRcode;
