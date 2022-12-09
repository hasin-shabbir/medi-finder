import React, { Component, Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Headertwo from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/clinic-list/Content";
const pagelocation = "Drug List";

const Cliniclist = () => {
  const isUser = localStorage.getItem("sessionId") != null;
  const isAdmin = localStorage.getItem("isAdmin") == "true";
  const [drugsList, setDrugsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/api/drugs";

      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      try {
        const response = await fetch(url, options);
        const body = await response.json();
        console.log(body);
        setDrugsList(body);
      } catch (error) {
        throw error;
      }
    };

    fetchData();
  }, []);

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
      <Content drugs={drugsList} />
    </Fragment>
  );
};

export default Cliniclist;
