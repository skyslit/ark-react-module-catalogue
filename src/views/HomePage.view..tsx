import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";
import { Link } from "react-router-dom";

class HomePageView extends React.Component<
  ViewComponentPropType<DefaultModule>
> {
  componentDidMount() {
    this.props.module.controller.populateHome();
  }
  render() {
    console.log(this.props.context.featuredItems);

    if (this.props.context.isLoading === true) {
      return (
        <div>
          <i className="fas fa-spin fa-circle-notch"></i>
        </div>
      );
    }
    return (
      <>
        <Helmet>
          <title>Home Page</title>
        </Helmet>
        <div className="container-fluid px-md-5">
          <div className="row px-md-5">
            <div className="col-12 bg-dark px-5 py-5 text-right">
              <div className="px-md-5 pb-5 mr-5">
                <img
                  width={100}
                  src={require("../images/logo.png")}
                  alt="logo"
                />
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
            <div className="col-12 px-md-5 d-flex align-items-center">
              <div className="flex-shrink-0">
                <h5>TODAY'S SPECIAL</h5>
              </div>
              <div className="flex-fill"></div>
              <div className="flex-shrink-0">
                <button
                  id="populate-items"
                  type="button"
                  className="btn btn-dark px-4 px-sm-5"
                >
                  View All
                </button>
              </div>
            </div>
            <div className="col-12 px-5">
              {this.props.context.featuredItems.map((featuredItem, index) => (
                <Link key={index} to={`/product/${featuredItem._handler}`}>
                  <div className="pt-5">
                    <img
                      width={200}
                      src={require("../images/default-image.png")}
                      alt="logo"
                      className="product-img-wrapper"
                    />
                    <h6 id={`handler-${index}`} className="pt-4">
                      {featuredItem.title}
                    </h6>
                    <label className="text-secondary font-weight-bold">
                      {featuredItem.description}
                    </label>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default HomePageView;
