import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Headertwo from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/clinic-list/Content";
const pagelocation = "Drug List";

class Cliniclist extends Component {
  render() {
    const isUser = localStorage.getItem("sessionId") != null;
    const isAdmin = localStorage.getItem("isAdmin") == "true";
    return (
      <Fragment>
        <MetaTags>
          <title>
            Docfind - Doctors Appointment Booking - React Template |{" "}
            {pagelocation}
          </title>
          <meta name="description" content="#" />
        </MetaTags>
        {isAdmin || isUser ? <Header /> : <Headertwo />}
        <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
        <Content />
      </Fragment>
    );
  }
}

export default Cliniclist;
