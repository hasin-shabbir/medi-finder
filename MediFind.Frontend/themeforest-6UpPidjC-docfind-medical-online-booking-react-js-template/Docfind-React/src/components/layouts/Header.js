import React, { Fragment } from "react";
import Navhelper from "../../helper/NavHelper";
import Mobilemenu from "./Mobilemenu";
import { Link } from "react-router-dom";
import navigation from "../../data/navigation.json";

class Header extends Navhelper {
  constructor(props) {
    super(props);
    this.state = {
      filter: "name",
      inputText: "",
    };

    this.onFilterChange = this.onFilterChange.bind(this);
    this.onInputTextChange = this.onInputTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onFilterChange = (event) => {
    this.setState({ filter: event.target.value });
    console.log(this.state.filter);
  };
  onInputTextChange = (event) => {
    this.setState({ inputText: event.target.value });
    console.log(this.state.filter);
  };
  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.filter, this.state.inputText);
    this.resetForm();
  }
  resetForm() {
    this.setState({
      filter: "",
      inputText: "",
    });
  }

  render() {
    const isAdmin = localStorage.getItem("isAdmin") == "true";
    console.log(isAdmin);

    return (
      <Fragment>
        {/* Mobile Menu */}
        <aside
          className={
            this.state.navMethod === true
              ? "sigma_aside aside-open"
              : "sigma_aside"
          }
        >
          <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
            <span />
            <span />
          </div>
          <Mobilemenu />
        </aside>
        <div
          className="sigma_aside-overlay aside-trigger"
          onClick={this.toggleNav}
        />
        {/* Mobile Menu */}
        {/* Header */}
        <header className="sigma_header style-5 bg-transparent shadow-none can-sticky">
          <div className="container">
            <div className="sigma_header-middle pl-4 pr-4">
              <div className="navbar">
                <div className="sigma_logo-wrapper">
                  <Link to="/" className="sigma_logo">
                    <img
                      src={
                        process.env.PUBLIC_URL + "/assets/img/logo-light.png"
                      }
                      alt="logo"
                    />
                  </Link>
                </div>
                <div className="d-flex align-items-center">
                  {/* SearchBar */}
                  <div>
                    <form onSubmit={this.handleSubmit}>
                      <div className="row no-gutters">
                        <div className="col">
                          <div className="form-group pad4">
                            <select
                              value={this.state.filter}
                              onChange={this.onFilterChange}
                            >
                              <option value="name">by Drug Name</option>
                              <option value="manufacturer">
                                by Manufacturer
                              </option>
                              <option value="ingredients">
                                by Ingredients
                              </option>
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-7‘">
                          <div className="form-group">
                            <div className="input-group">
                              <input
                                type="text"
                                className="location-field"
                                placeholder="Search Here"
                                value={this.state.inputText}
                                onChange={this.onInputTextChange}
                                required
                              />
                              <div className="input-group-append pr-5">
                                <a
                                  className="sigma_btn"
                                  href={
                                    "search-results?filter=" +
                                    this.state.filter +
                                    "&text=" +
                                    this.state.inputText
                                  }
                                >
                                  <img
                                    src={
                                      process.env.PUBLIC_URL +
                                      "/assets/img/SearchIcon.svg"
                                    }
                                    alt="searchIcon"
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  {/* SearchBar */}
                  <ul className="navbar-nav mr-3"></ul>

                  <a href="/saved-list">
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/bookmark.svg"}
                      alt="BookmarkIcon"
                    />
                  </a>
                  {isAdmin ? (
                    <a href="./admin-page">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/user.svg"}
                        alt="BookmarkIcon"
                      />
                    </a>
                  ) : (
                    <a href="./user-page">
                      <img
                        src={process.env.PUBLIC_URL + "/assets/img/user.svg"}
                        alt="BookmarkIcon"
                      />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Header */}
        {/* Search Bar */}
        <div
          className={
            this.state.searchMethod === true
              ? "search-form-wrapper open"
              : "search-form-wrapper"
          }
        >
          <div
            className="search-trigger sigma_close"
            onClick={this.toggleSearch}
          >
            <span />
            <span />
          </div>
          <form className="search-form">
            <input type="text" placeholder="Search..." required />
            <button type="submit" className="search-btn">
              <i className="fal fa-search m-0" />
            </button>
          </form>
        </div>
        {/* Search Bar */}
      </Fragment>
    );
  }
}

export default Header;
