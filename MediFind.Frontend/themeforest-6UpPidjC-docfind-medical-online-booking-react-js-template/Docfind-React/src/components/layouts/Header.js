import React, { Fragment } from 'react';
import Navhelper from '../../helper/NavHelper';
import Mobilemenu from './Mobilemenu';
import { Link } from 'react-router-dom';
import navigation from '../../data/navigation.json';

class Header extends Navhelper {
    render() {
        return (
            <Fragment>
                {/* Mobile Menu */}
                <aside className={this.state.navMethod === true ? 'sigma_aside aside-open' : 'sigma_aside'}>
                    <div className="sigma_close aside-trigger" onClick={this.toggleNav}>
                        <span />
                        <span />
                    </div>
                    <Mobilemenu />
                </aside>
                <div className="sigma_aside-overlay aside-trigger" onClick={this.toggleNav} />
                {/* Mobile Menu */}
                {/* Header */}
                <header className="sigma_header header-absolute style-5 other can-sticky">
                    <div className="sigma_header-middle">
                        <div className="container-fluid">
                            <div className="navbar">
                                <div className="sigma_logo-wrapper">
                                    <Link to="/" className="sigma_logo">
                                        <img src={ process.env.PUBLIC_URL + "/assets/img/logo-light.png"} alt="logo" />
                                    </Link>
                                </div>
                                <ul className="navbar-nav">
                                    {/* Data */}
                                    {navigation.map((item, i) => (
                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                            {item.child === true ?
                                                <Link to="#">{item.linkText}</Link>
                                                :
                                                <Link to={item.link}>{item.linkText}</Link>
                                            }
                                            {item.child === true ?
                                                <ul className="sub-menu">
                                                    {item.submenu.map((item, i) => (
                                                        <li key={i} className={item.child === true ? 'menu-item menu-item-has-children' : 'menu-item'}>
                                                            {item.child === true ?
                                                                <Link to="#">{item.linkText}</Link>
                                                                :
                                                                <Link to={item.link}>{item.linkText}</Link>
                                                            }
                                                            {item.child === true ?
                                                                <ul className="sub-menu">
                                                                    {item.submenu.map((item, i) => (
                                                                        <li className="menu-item" key={i}>
                                                                            <Link to={item.link}>{item.linkText}</Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                                : ''}
                                                        </li>
                                                    ))}
                                                </ul>
                                                : ''}
                                        </li>
                                    ))}
                                    {/* Data */}
                                </ul>
                                <div className="sigma_header-controls style-2">
                                    <ul className="sigma_header-controls-inner">
                                        <li className="search-trigger header-controls-item d-none d-sm-block">
                                            <Link to="#" className="sigma_header-control-search bg-transparent border-0" title="Search" onClick={this.toggleSearch}>
                                                <img src={ process.env.PUBLIC_URL + "/assets/img/SearchIcon.svg"} alt="searchIcon" />
                                            </Link>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <Link to="/login" className="sigma_btn btn-sm">
                                                Log In
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </li>
                                        <li className="d-none d-sm-block">
                                            <Link to="/sign-up" className="sigma_btn btn-sm">
                                                Sign Up
                                                <i className="fal fa-arrow-right" />
                                            </Link>
                                        </li>
                                        <li className="aside-toggle aside-trigger" onClick={this.toggleNav}>
                                            <span />
                                            <span />
                                            <span />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                {/* Header */}
                {/* Search Bar */}
                <div className={this.state.searchMethod === true ? 'search-form-wrapper open' : 'search-form-wrapper'}>
                    <div className="search-trigger sigma_close" onClick={this.toggleSearch}>
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