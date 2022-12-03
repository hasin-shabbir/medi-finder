import React, { Component, Fragment } from 'react';
import Banner from './Banner';
import Searchform from './Searchform';
import Services from './Services';
import CustomSearch from './CustomSearch';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                {/* <Searchform /> */}
                <CustomSearch/>
                <Services />
            </Fragment>
        );
    }
}

export default Content;