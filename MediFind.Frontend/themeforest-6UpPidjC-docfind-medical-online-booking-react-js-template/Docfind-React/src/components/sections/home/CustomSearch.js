import React, { Component } from 'react'


class CustomSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: "name",
            inputText: " "
        }
        this.onFilterChange = this.onFilterChange.bind(this);
        this.onInputTextChange = this.onInputTextChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    onFilterChange = event => {
        this.setState({ filter: event.target.value })
        console.log(this.state.filter)
    }
    onInputTextChange = event => {
        this.setState({ inputText: event.target.value })
        console.log(this.state.filter)
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.filter, this.state.inputText);
        this.resetForm();
    }
    resetForm() {
        this.setState({
            filter: "",
            inputText: ""
        })
    }
    render() {
        return (
            <div className="sigma_banner-info style-2">
                <div className="container">
                    <div className="sigma_cta style-13">
                        <form onSubmit={this.handleSubmit}>
                            <div className="row no-gutters">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Search Topic</label>
                                        <select value={this.state.filter} onChange={this.onFilterChange}>
                                            <option value="name">by Drug Name</option>
                                            <option value="manufacturer">by Manufacturer</option>
                                            <option value="ingredients">by Ingredients</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label>Search Query</label>
                                        <div className="input-group">
                                            <input type="text" className="location-field" placeholder="Drug Name, Manufacturer, etc." value={this.state.inputText} onChange={this.onInputTextChange} required />
                                            <div className="input-group-append">
                                                <button type="submit"> <i className="fal fa-search mr-1" /> Find Now</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomSearch;