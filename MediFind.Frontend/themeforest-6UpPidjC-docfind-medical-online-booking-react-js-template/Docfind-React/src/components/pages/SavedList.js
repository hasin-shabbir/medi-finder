import React, { Component, Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/saved-list/Content";
import { useLocation } from "react-router-dom";

const pagelocation = "Saved Drugs";

const SavedList = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const [drugsList, setDrugsList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://ec2-3-28-221-142.me-central-1.compute.amazonaws.com/api/users/self/saved-drugs";
      const options = {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      };
      try {
        console.log(url);
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
      <Header />
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <Content />
    </Fragment>
  );
};

export default SavedList;
