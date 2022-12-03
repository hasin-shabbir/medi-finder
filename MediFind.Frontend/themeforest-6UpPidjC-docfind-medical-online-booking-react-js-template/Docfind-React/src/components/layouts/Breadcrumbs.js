import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumbs extends Component {
    render() {
        return (
            <div className="sigma_subheader style-5 bg-gray">
                <div className="container">
                    <div className="sigma_subheader-inner">
                        <h1>{this.props.breadcrumb.pagename}</h1>
                    </div>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <Link to="/" className="btn-link">Go to Home</Link>
                        </li>
                    </ol>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;