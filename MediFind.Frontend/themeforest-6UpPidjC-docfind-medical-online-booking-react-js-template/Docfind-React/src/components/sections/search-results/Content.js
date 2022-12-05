import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import drug from '../../../data/drug/search-results.json';
import Pagination from "react-js-pagination";

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: drug,
            activePage: 1,
            itemPerpage: 10,
            favorite: false
        }
        this.favoriteTrigger = this.favoriteTrigger.bind(this);
    }
    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber });
    }
    favoriteTrigger(item) {
        this.setState({ favorite: item });
        if (this.state.favorite === item) {
            this.setState({ favorite: null })
        }
    }
    render() {
        const paginationData = this.state.data.slice((this.state.activePage - 1) * this.state.itemPerpage, this.state.activePage * this.state.itemPerpage).map((item, i) => {
            return <div className="sigma_team style-17" key={i}>
                <div className="row no-gutters">
                    <div className="col-md-3">
                        <div className="sigma_team-thumb">
                            <img src={process.env.PUBLIC_URL + "/" + item.image} alt={item.name} />
                        </div>
                    </div>
                    <div className="col-md-5 col-sm-6">
                        <div className="sigma_team-body">
                            <h5>
                                <Link to={"/clinic-details/" + item.drugId}>{item.drugName}</Link>
                            </h5>
                            {/* <div className="sigma_team-categories">
                                <Link to={"/clinic-details/" + item.drugId} className="sigma_team-category">{item.specialist}</Link>
                            </div> */}
                            <p>{item.purpose}</p>
                            <div className="d-flex align-items-center mt-4">
                                <Link to={"/clinic-details/" + item.drugId} className="sigma_btn">View More</Link>
                                <div className="sigma_team-controls ml-3">
                                    <Link to="#" className={this.state.favorite === item ? 'active' : ''} onClick={(e) => this.favoriteTrigger(item)}>
                                        <i className="fal fa-heart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="sigma_team-footer">
                            <div className="sigma_team-info">
                                <span>
                                    <i className="fal fa-building" />
                                    {item.manufacturer}
                                </span>
                                <span>
                                    <i className="fal fa-pills" />
                                    {item.ingredients}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        });
        return (
            <div className="sidebar-style-9">
                <div className="section section-padding">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-11">
                                {/* Data */}
                                {paginationData}
                                {/* Data */}
                                {/* Pagination */}
                                <Pagination
                                    activePage={this.state.activePage}
                                    itemsCountPerPage={this.state.itemPerpage}
                                    totalItemsCount={this.state.data.length}
                                    pageRangeDisplayed={this.state.data.length}
                                    onChange={this.handlePageChange.bind(this)}
                                    innerClass="pagination"
                                    activeClass="active"
                                    itemClass="page-item"
                                    linkClass="page-link"
                                />
                                {/* Pagination */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;