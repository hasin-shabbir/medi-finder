import React, { Component, Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import Header from "../layouts/Header";
import Headertwo from "../layouts/Headertwo";
import Breadcrumbs from "../layouts/Breadcrumbs";
import Content from "../sections/search-results/Content";
import { useLocation } from "react-router-dom";

const pagelocation = "Search Results";

const SearchResults = () => {
  const search = useLocation().search;
  const searchParams = new URLSearchParams(search);
  const [drugsList, setDrugsList] = useState([]);

  const isUser = localStorage.getItem("sessionId") != null;
  const isAdmin = localStorage.getItem("isAdmin");

  useEffect(() => {
    const fetchData = async () => {
      const url =
        "http://ec2-3-28-239-202.me-central-1.compute.amazonaws.com/api/drugs?" +
        searchParams.get("filter") +
        "=" +
        searchParams.get("text");
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
      {isAdmin || isUser ? <Header /> : <Headertwo />}
      <Breadcrumbs breadcrumb={{ pagename: pagelocation }} />
      <Content drugs={drugsList} />
    </Fragment>
  );
};

export default SearchResults;
