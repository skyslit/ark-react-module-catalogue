import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";
import { Collapse, Modal } from "reactstrap";
import InfiniteScroll from "react-infinite-scroller";
import { withTranslation, WithTranslation } from "react-i18next";

type StateType = {
  isModalOpen: boolean;
  openKey: string;
};

const FilterPageView = withTranslation()(
  class FilterPageView extends React.Component<
    ViewComponentPropType<DefaultModule> & WithTranslation,
    StateType
  > {
    constructor(props: any) {
      super(props);
      this.state = {
        isModalOpen: false,
        openKey: "none",
      };
      this.toggleModal = this.toggleModal.bind(this);
    }

    // componentDidMount() {
    //   this.props.module.controller.populateResults();
    // }
    toggleModal() {
      this.setState({
        isModalOpen: !this.state.isModalOpen,
      });
    }

    render() {
      // if (this.props.context.isLoading === true) {
      //   return (
      //     <div>
      //       <i className="fas fa-spin fa-circle-notch"></i>
      //     </div>
      //   );
      // }
      return (
        <>
          <Helmet>
            <title>{this.props.t("Filter Page")}</title>
          </Helmet>
          <div style={{ height: "100vh" }}>
            <div
              style={{ height: "100%", overflow: "auto" }}
              className="container-fluid bg-light px-sm-5 pt-5 catalogue-module-filter-page-wrapper catalogue-item"
            >
              <div className="row px-sm-5 ml-sm-5">
                <div className="col-12 d-flex pl-5 pl-sm-0 pb-5">
                  <div className="flex-shrink-0">
                    <h4 className="font-weight-bold">
                      {this.props.t("Search result")}
                    </h4>
                  </div>
                  <div className="flex-fill"></div>
                  <div className="flex-shrink-0 d-flex align-items-center d-lg-none">
                    <button
                      onClick={this.toggleModal}
                      style={{ flexDirection: "row" }}
                      className="btn btn-link d-flex"
                    >
                      <i className="fas fa-filter text-secondary pt-1"></i>
                      <h6 className="text-secondary font-weight-bold pl-2 mb-0">
                        {this.props.t("FILTER")}
                      </h6>
                    </button>
                  </div>
                </div>
                <div
                  style={{ backgroundColor: "#EFEFEF", width: 300 }}
                  className=" d-none d-lg-block col-lg-auto px-0"
                >
                  <div className="d-flex py-4 px-4">
                    <div
                      style={{ flexDirection: "row" }}
                      className="flex-shrink-0 d-flex align-items-center"
                    >
                      <i className="fas fa-filter text-secondary pt-1"></i>
                      <h5 className="text-secondary font-weight-bold pl-2 mb-0">
                        {this.props.t("FILTER")}
                      </h5>
                    </div>
                    <div className="flex-fill"></div>
                    <div
                      style={{ flexDirection: "row" }}
                      className="flex-shrink-0 d-flex align-items-center"
                    >
                      <h5>
                        <span className="badge badge-secondary">
                          {this.props.t("12")}
                        </span>
                      </h5>
                      <button className="btn btn-link pt-0">
                        <i className="fas fa-redo-alt text-secondary pl-2"></i>
                      </button>
                    </div>
                  </div>
                  <button
                    className="btn-block d-flex px-4 py-2"
                    onClick={() => this.setState({ openKey: "collection" })}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <div className="flex-shrink-0">
                      <h6 className="text-secondary">
                        {this.props.t("By Collection")}
                      </h6>
                    </div>
                    <div className="flex-fill"></div>
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-circle-up text-secondary"></i>
                    </div>
                  </button>
                  <Collapse isOpen={this.state.openKey === "collection"}>
                    <div
                      style={{ backgroundColor: "#E9E9E9" }}
                      className="px-4 py-3"
                    >
                      <div className="py-3">
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-info mr-3 mt-3"
                          >
                            {this.props.t("Collection 1")}
                            <i className="fas fa-minus-circle pl-3"></i>
                          </button>
                        </div>
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-secondary mr-3 mt-3"
                          >
                            {this.props.t("Collection 2")}
                          </button>
                        </div>
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-secondary mr-3 mt-3"
                          >
                            {this.props.t("Collection 3")}
                          </button>
                        </div>
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-info mr-3 mt-3"
                          >
                            {this.props.t("Collection 4")}
                            <i className="fas fa-minus-circle pl-3"></i>
                          </button>
                        </div>
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-secondary mr-3 mt-3"
                          >
                            {this.props.t("Collection 5")}
                          </button>
                        </div>
                        <div className="d-inline-block">
                          <button
                            style={{ borderRadius: 20 }}
                            className="btn btn-secondary mr-3 mt-3"
                          >
                            {this.props.t("Collection 6")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Collapse>
                  <button
                    className="btn-block d-flex px-4 py-2"
                    onClick={() => this.setState({ openKey: "price" })}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <div className="flex-shrink-0">
                      <h6 className="text-secondary">
                        {this.props.t("By Price")}
                      </h6>
                    </div>
                    <div className="flex-fill"></div>
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-circle-up text-secondary"></i>
                    </div>
                  </button>
                  <Collapse isOpen={this.state.openKey === "price"}>
                    <div
                      style={{ backgroundColor: "#E9E9E9" }}
                      className="px-4 py-3"
                    >
                      {/* <div className="py-4">
                    <input
                      style={{ border: "none", backgroundColor: "#F2F2F2" }}
                      type="text"
                      className="form-control"
                      placeholder="Search for your brand"
                    />
                  </div> */}
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-1"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Price Range-1")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-1"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-2"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Price Range-2")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-2"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-3"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Price Range-3")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-3"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-4"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Price Range-4")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-4"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-5"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Price Range-5")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-5"
                          />
                        </div>
                      </div>
                    </div>
                  </Collapse>
                  <button
                    className="btn-block d-flex px-4 py-2"
                    onClick={() => this.setState({ openKey: "size" })}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <div className="flex-shrink-0">
                      <h6 className="text-secondary">
                        {this.props.t("By Size")}
                      </h6>
                    </div>
                    <div className="flex-fill"></div>
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-circle-up text-secondary"></i>
                    </div>
                  </button>
                  <Collapse isOpen={this.state.openKey === "size"}>
                    <div
                      style={{ backgroundColor: "#E9E9E9" }}
                      className="px-4 py-3"
                    >
                      {/* <div className="py-4">
                    <input
                      style={{ border: "none", backgroundColor: "#F2F2F2" }}
                      type="text"
                      className="form-control"
                      placeholder="Search for your brand"
                    />
                  </div> */}
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-1"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Size-1")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-1"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-2"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Size-2")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-2"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-3"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Size-3")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-3"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-4"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Size-4")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-4"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-5"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Size-5")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-5"
                          />
                        </div>
                      </div>
                    </div>
                  </Collapse>
                  <button
                    className="btn-block d-flex px-4 py-2"
                    onClick={() => this.setState({ openKey: "brand" })}
                    style={{
                      backgroundColor: "transparent",
                      outline: "none",
                      border: "none",
                    }}
                  >
                    <div className="flex-shrink-0">
                      <h6 className="text-secondary">
                        {this.props.t("By Brand")}
                      </h6>
                    </div>
                    <div className="flex-fill"></div>
                    <div className="flex-shrink-0">
                      <i className="fas fa-chevron-circle-down text-secondary"></i>
                    </div>
                  </button>
                  <Collapse isOpen={this.state.openKey === "brand"}>
                    <div
                      style={{ backgroundColor: "#E9E9E9" }}
                      className="px-4 py-3"
                    >
                      <div className="py-4">
                        <input
                          style={{ border: "none", backgroundColor: "#F2F2F2" }}
                          type="text"
                          className="form-control"
                          placeholder="Search for your brand"
                        />
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-1"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Brand-1")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-1"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-2"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Brand-2")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-2"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-3"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Brand-3")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-3"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-4"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Brand-4")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-4"
                          />
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                        className=" form-check d-flex px-4 py-2 mb-3"
                      >
                        <div className="flex-fill">
                          <label
                            htmlFor="brand-5"
                            className="form-check-label d-block text-secondary font-weight-bold"
                          >
                            {this.props.t("Brand-5")}
                          </label>
                        </div>
                        <div className="flex-shrink-0">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="brand-5"
                          />
                        </div>
                      </div>
                    </div>
                  </Collapse>
                </div>
                <div className="col">
                  <InfiniteScroll
                    pageStart={0}
                    loadMore={() =>
                      this.props.module.controller.populateResults()
                    }
                    hasMore={this.props.context.hasMoreFilterSearchResults}
                    loader={
                      <div className="loader" key={0}>
                        {this.props.t("Loading ...")}
                      </div>
                    }
                    useWindow={false}
                  >
                    {this.props.context.filterResults.map(
                      (filterResult, index) => (
                        <div
                          key={index}
                          style={{ display: "flex", flexDirection: "row" }}
                          className="pb-5"
                        >
                          <img
                            width={200}
                            src={require("../images/default-image.png")}
                            alt="logo"
                            className="product-img-wrapper"
                          />
                          <div
                            style={{ flexDirection: "column" }}
                            className="pl-3 d-flex"
                          >
                            <div className="flex-shrink-0">
                              <h6>{filterResult.title}</h6>
                              <label className="text-secondary font-weight-bold">
                                {filterResult.description}
                              </label>
                            </div>
                            <div className="flex-fill"></div>
                            <div className="flex-shrink-0">
                              <span
                                style={{ fontSize: 16 }}
                                className="font-weight-bold pr-2"
                              >
                                {this.props.t("DETAIL 1")}
                              </span>
                              <span
                                style={{ fontSize: 14 }}
                                className="font-weight-bold text-success"
                              >
                                {this.props.t("DETAIL 2")}
                              </span>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </InfiniteScroll>
                </div>
              </div>
            </div>
          </div>
          <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <div style={{ backgroundColor: "#EFEFEF" }} className="col-12 px-0">
              <button
                onClick={this.toggleModal}
                className="btn btn-link px-4 mt-3"
              >
                <i className="fas fa-arrow-left text-secondary"></i>
              </button>
              <div className="d-flex py-3 px-4">
                <div
                  style={{ flexDirection: "row" }}
                  className="flex-shrink-0 d-flex align-items-center"
                >
                  <i className="fas fa-filter text-secondary pt-1"></i>
                  <h5 className="text-secondary font-weight-bold pl-2 mb-0">
                    {this.props.t("FILTER")}
                  </h5>
                </div>
                <div className="flex-fill"></div>
                <div
                  style={{ flexDirection: "row" }}
                  className="flex-shrink-0 d-flex align-items-center"
                >
                  <h5>
                    <span className="badge badge-secondary">
                      {this.props.t("12")}
                    </span>
                  </h5>
                  <button className="btn btn-link p-0">
                    <i className="fas fa-redo-alt text-secondary pl-2 pb-2"></i>
                  </button>
                </div>
              </div>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.setState({ openKey: "modalCollection" })}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">
                    {this.props.t("Collection")}
                  </h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={this.state.openKey === "modalCollection"}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-4 py-3"
                >
                  <div className="py-3">
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-info mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                        <i className="fas fa-minus-circle pl-3"></i>
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-info mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                        <i className="fas fa-minus-circle pl-3"></i>
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        {this.props.t("Collection 1")}
                      </button>
                    </div>
                  </div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.setState({ openKey: "modalPrice" })}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">{this.props.t("By Price")}</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={this.state.openKey === "modalPrice"}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-4 py-3"
                >
                  {/* <div className="py-4">
                    <input
                      style={{ border: "none", backgroundColor: "#F2F2F2" }}
                      type="text"
                      className="form-control"
                      placeholder="Search for your brand"
                    />
                  </div> */}
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-1"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Price Range-1")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-1"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-2"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Price Range-2")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-2"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-3"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Price Range-3")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-3"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-4"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Price Range-4")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-4"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-5"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Price Range-5")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-5"
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.setState({ openKey: "modalSize" })}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">{this.props.t("By Size")}</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={this.state.openKey === "modalSize"}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-4 py-3"
                >
                  {/* <div className="py-4">
                    <input
                      style={{ border: "none", backgroundColor: "#F2F2F2" }}
                      type="text"
                      className="form-control"
                      placeholder="Search for your brand"
                    />
                  </div> */}
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-1"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Size-1")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-1"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-2"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Size-2")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-2"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-3"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Size-3")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-3"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-4"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Size-4")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-4"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-5"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Size-5")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-5"
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.setState({ openKey: "modalBrand" })}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">{this.props.t("By Brand")}</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-down text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={this.state.openKey === "modalBrand"}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-4 py-3"
                >
                  <div className="py-4">
                    <input
                      style={{ border: "none", backgroundColor: "#F2F2F2" }}
                      type="text"
                      className="form-control"
                      placeholder="Search for your brand"
                    />
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-1"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Brand-1")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-1"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-2"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Brand-2")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-2"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-3"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Brand-3")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-3"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-4"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Brand-4")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-4"
                      />
                    </div>
                  </div>
                  <div
                    style={{ backgroundColor: "#EDEDED", borderRadius: 5 }}
                    className=" form-check d-flex px-4 py-2 mb-3"
                  >
                    <div className="flex-fill">
                      <label
                        htmlFor="brand-5"
                        className="form-check-label d-block text-secondary font-weight-bold"
                      >
                        {this.props.t("Brand-5")}
                      </label>
                    </div>
                    <div className="flex-shrink-0">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        id="brand-5"
                      />
                    </div>
                  </div>
                </div>
              </Collapse>
            </div>
          </Modal>
        </>
      );
    }
  }
);
export default FilterPageView;
