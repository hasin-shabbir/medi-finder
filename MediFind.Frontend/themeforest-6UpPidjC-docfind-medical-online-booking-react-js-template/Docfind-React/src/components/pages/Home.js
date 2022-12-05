import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Headertwo from '../layouts/Headertwo';
import Footer from '../layouts/Footer';
import Content from '../sections/home/Content';

const pagelocation = "Homepage";

class Home extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>MediFind - Medicine Information, One Scan Away | {pagelocation}</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Headertwo />
                <Content />
            </Fragment>
        );
    }
}

export default Home;