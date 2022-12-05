import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Header';
import Headertwo from "../layouts/Headertwo";

import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/error-page/Content';
const isAdmin = true;
const isUser = false;
const pagelocation = "Error 404";

class Errorpage extends Component {
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
                {(isAdmin || isUser) ? <Header/> : <Headertwo/>}
                <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
                <Content />
            </Fragment>
        );
    }
}

export default Errorpage;