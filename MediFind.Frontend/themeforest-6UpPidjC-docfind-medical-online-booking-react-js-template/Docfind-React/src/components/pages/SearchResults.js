import React, { Component, Fragment } from 'react';
import MetaTags from "react-meta-tags";
import Header from '../layouts/Headertwo';
import Breadcrumbs from '../layouts/Breadcrumbs';
import Content from '../sections/search-results/Content';

const pagelocation = "Search Results";

class SearchResults extends Component {
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
                <Content />
            </Fragment>
        );
    }
}

export default SearchResults;