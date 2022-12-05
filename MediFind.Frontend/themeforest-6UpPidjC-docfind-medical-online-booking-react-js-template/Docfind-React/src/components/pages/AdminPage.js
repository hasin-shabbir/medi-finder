import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content2 from '../sections/user-page/Content';
import Content1 from  '../sections/admin-page/Content';

const pagelocation = "Admin Page";

class QRCode extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Docfind - Doctors Appointment Booking - React Template | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content1
                    detailId={this.props.match.params.id}
                />
                <Content2 style ={{marginBottom: '30px'}}
                    detailId={this.props.match.params.id}
                />
                
            </Fragment>
        );
    }
}

export default QRCode;