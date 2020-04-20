import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";

export default (props: ViewComponentPropType<DefaultModule>) => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div className="container-fluid px-md-5">
        <div className="row px-md-5">
          <div className="col-12 bg-dark px-5 py-5 text-right">
            <div className="px-md-5 pb-5 mr-5">
              <img width={100} src={require("../images/logo.png")} alt="logo" />
            </div>
            <div className="pt-5 mt-5 px-md-5 mr-sm-5">
              <h5 className="text-light pt-5">COVER DESCRIPTION</h5>
              <h1
                style={{ fontSize: 40 }}
                className="text-light font-weight-bold pt-2"
              >
                SOME<br></br> FANCY<br></br> TITLE TO<br></br> SHOW
              </h1>
              <button
                type="button"
                className="btn btn-light mt-4 mt-sm-5 py-2 py-sm-3 px-4 px-sm-5"
              >
                CHECK IT OUT
              </button>
            </div>
          </div>
        </div>
        <div className="row px-md-5 mt-4 pt-3 bg-light">
          <div className="col-6 pl-md-5 d-flex align-items-center">
            <h5>TODAY'S SPECIAL</h5>
          </div>
          <div className="col-6 pr-md-5 text-right">
            <button type="button" className="btn btn-dark px-5">
              View All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
