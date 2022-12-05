import React, { Component, Fragment } from "react";
import MetaTags from "react-meta-tags";
import Headertwo from "../layouts/Headertwo";
import Header from "../layouts/Header";
import Content from "../sections/home/Content";

const pagelocation = "Homepage";

class Home extends Component {
  render() {
    const isUser = localStorage.getItem("sessionId") != null;
    const isAdmin = localStorage.getItem("isAdmin") == "true";

    return (
      <Fragment>
        <MetaTags>
          <title>
            MediFind - Medicine Information, One Scan Away | {pagelocation}
          </title>
          <meta name="description" content="#" />
        </MetaTags>
        {isAdmin || isUser ? <Header /> : <Headertwo />}
        <Content />
      </Fragment>
    );
  }
}

export default Home;
