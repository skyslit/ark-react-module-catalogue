import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";
import { Collapse, Modal } from "reactstrap";

class FilterPageView extends React.Component<
  ViewComponentPropType<DefaultModule>
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isModalOpen: false,
      accordion: [true, false, false, false],
      accordion2: [true, false, false, false],
    };
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
  }

  toggleAccordion(tab: number) {
    const prevState = (this.state as any).accordion;
    const state = prevState.map((x: any, index: number) =>
      tab === index ? !x : false
    );

    this.setState({
      accordion: state,
    });
  }
  toggleAccordion2(tab: number) {
    const prevState = (this.state as any).accordion2;
    const state = prevState.map((x: any, index: number) =>
      tab === index ? !x : false
    );

    this.setState({
      accordion2: state,
    });
  }

  componentDidMount() {
    this.props.module.controller.populateResults();
  }
  toggleModal() {
    this.setState({
      isModalOpen: !(this.state as any).isModalOpen,
    });
  }

  render() {
    console.log(this.props.context.filterResults);

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
          <title>Filter Page</title>
        </Helmet>
        <div className="container-fluid bg-light px-sm-5 pt-5 catalogue-module-filter-page-wrapper">
          <div className="row px-sm-5 ml-sm-5">
            <div className="col-12 d-flex pl-5 pl-sm-0 pb-5">
              <div className="flex-shrink-0">
                <h4 className="font-weight-bold">Search result</h4>
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
                    FILTER
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
                    FILTER
                  </h5>
                </div>
                <div className="flex-fill"></div>
                <div
                  style={{ flexDirection: "row" }}
                  className="flex-shrink-0 d-flex align-items-center"
                >
                  <h5>
                    <span className="badge badge-secondary">12</span>
                  </h5>
                  <i className="fas fa-redo-alt text-secondary pl-2"></i>
                </div>
              </div>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.toggleAccordion(0)}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">By Collection</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={(this.state as any).accordion[0]}>
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
                        Collection 1<i className="fas fa-minus-circle pl-3"></i>
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        Collection 1
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        Collection 1
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-info mr-3 mt-3"
                      >
                        Collection 1<i className="fas fa-minus-circle pl-3"></i>
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        Collection 1
                      </button>
                    </div>
                    <div className="d-inline-block">
                      <button
                        style={{ borderRadius: 20 }}
                        className="btn btn-secondary mr-3 mt-3"
                      >
                        Collection 1
                      </button>
                    </div>
                  </div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.toggleAccordion(1)}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">By Price</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={(this.state as any).accordion[1]}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-3 py-3"
                >
                  <div>hello</div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.toggleAccordion(2)}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">By Size</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-up text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={(this.state as any).accordion[2]}>
                <div
                  style={{ backgroundColor: "#E9E9E9" }}
                  className="px-3 py-3"
                >
                  <div>hello</div>
                </div>
              </Collapse>
              <button
                className="btn-block d-flex px-4 py-2"
                onClick={() => this.toggleAccordion(3)}
                style={{
                  backgroundColor: "transparent",
                  outline: "none",
                  border: "none",
                }}
              >
                <div className="flex-shrink-0">
                  <h6 className="text-secondary">By Brand</h6>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <i className="fas fa-chevron-circle-down text-secondary"></i>
                </div>
              </button>
              <Collapse isOpen={(this.state as any).accordion[3]}>
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
                        Brand-1
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
                        Brand-2
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
                        Brand-3
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
                        Brand-4
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
                        Brand-5
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
              {this.props.context.filterResults.map((filterResult, index) => (
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
                        DETAIL 1
                      </span>
                      <span
                        style={{ fontSize: 14 }}
                        className="font-weight-bold text-success"
                      >
                        DETAIL 2
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              {/*             
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="pb-5"
            >
              <img
                width={200}
                src={require("../images/default-image.png")}
                alt="logo"
                className="product-img-wrapper"
              />
              <div style={{ flexDirection: "column" }} className="pl-3 d-flex">
                <div className="flex-shrink-0">
                  <h6>TITLE 1</h6>
                  <label className="text-secondary font-weight-bold">
                    DESCRIPTION
                  </label>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 16 }}
                    className="font-weight-bold pr-2"
                  >
                    DETAIL 1
                  </span>
                  <span
                    style={{ fontSize: 14 }}
                    className="font-weight-bold text-success"
                  >
                    DETAIL 2
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="pb-5"
            >
              <img
                width={200}
                src={require("../images/default-image.png")}
                alt="logo"
                className="product-img-wrapper"
              />
              <div style={{ flexDirection: "column" }} className="pl-3 d-flex">
                <div className="flex-shrink-0">
                  <h6>TITLE 1</h6>
                  <label className="text-secondary font-weight-bold">
                    DESCRIPTION
                  </label>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 16 }}
                    className="font-weight-bold pr-2"
                  >
                    DETAIL 1
                  </span>
                  <span
                    style={{ fontSize: 14 }}
                    className="font-weight-bold text-success"
                  >
                    DETAIL 2
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="pb-5"
            >
              <img
                width={200}
                src={require("../images/default-image.png")}
                alt="logo"
                className="product-img-wrapper"
              />
              <div style={{ flexDirection: "column" }} className="pl-3 d-flex">
                <div className="flex-shrink-0">
                  <h6>TITLE 1</h6>
                  <label className="text-secondary font-weight-bold">
                    DESCRIPTION
                  </label>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 16 }}
                    className="font-weight-bold pr-2"
                  >
                    DETAIL 1
                  </span>
                  <span
                    style={{ fontSize: 14 }}
                    className="font-weight-bold text-success"
                  >
                    DETAIL 2
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="pb-5"
            >
              <img
                width={200}
                src={require("../images/default-image.png")}
                alt="logo"
                className="product-img-wrapper"
              />
              <div style={{ flexDirection: "column" }} className="pl-3 d-flex">
                <div className="flex-shrink-0">
                  <h6>TITLE 1</h6>
                  <label className="text-secondary font-weight-bold">
                    DESCRIPTION
                  </label>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 16 }}
                    className="font-weight-bold pr-2"
                  >
                    DETAIL 1
                  </span>
                  <span
                    style={{ fontSize: 14 }}
                    className="font-weight-bold text-success"
                  >
                    DETAIL 2
                  </span>
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "row" }}
              className="pb-5"
            >
              <img
                src={require("../images/default-image.png")}
                alt="logo"
                className="product-img-wrapper"
              />
              <div style={{ flexDirection: "column" }} className="pl-3 d-flex">
                <div className="flex-shrink-0">
                  <h6>TITLE 1</h6>
                  <label className="text-secondary font-weight-bold">
                    DESCRIPTION
                  </label>
                </div>
                <div className="flex-fill"></div>
                <div className="flex-shrink-0">
                  <span
                    style={{ fontSize: 16 }}
                    className="font-weight-bold pr-2"
                  >
                    DETAIL 1
                  </span>
                  <span
                    style={{ fontSize: 14 }}
                    className="font-weight-bold text-success"
                  >
                    DETAIL 2
                  </span>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
        <Modal
          isOpen={(this.state as any).isModalOpen}
          toggle={this.toggleModal}
        >
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
                  FILTER
                </h5>
              </div>
              <div className="flex-fill"></div>
              <div
                style={{ flexDirection: "row" }}
                className="flex-shrink-0 d-flex align-items-center"
              >
                <h5>
                  <span className="badge badge-secondary">12</span>
                </h5>
                <button className="btn btn-link p-0">
                  <i className="fas fa-redo-alt text-secondary pl-2 pb-2"></i>
                </button>
              </div>
            </div>
            <button
              className="btn-block d-flex px-4 py-2"
              onClick={() => this.toggleAccordion2(0)}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <div className="flex-shrink-0">
                <h6 className="text-secondary">By Collection</h6>
              </div>
              <div className="flex-fill"></div>
              <div className="flex-shrink-0">
                <i className="fas fa-chevron-circle-up text-secondary"></i>
              </div>
            </button>
            <Collapse isOpen={(this.state as any).accordion2[0]}>
              <div style={{ backgroundColor: "#E9E9E9" }} className="px-4 py-3">
                <div className="py-3">
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-info mr-3 mt-3"
                    >
                      Collection 1<i className="fas fa-minus-circle pl-3"></i>
                    </button>
                  </div>
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-secondary mr-3 mt-3"
                    >
                      Collection 1
                    </button>
                  </div>
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-secondary mr-3 mt-3"
                    >
                      Collection 1
                    </button>
                  </div>
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-info mr-3 mt-3"
                    >
                      Collection 1<i className="fas fa-minus-circle pl-3"></i>
                    </button>
                  </div>
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-secondary mr-3 mt-3"
                    >
                      Collection 1
                    </button>
                  </div>
                  <div className="d-inline-block">
                    <button
                      style={{ borderRadius: 20 }}
                      className="btn btn-secondary mr-3 mt-3"
                    >
                      Collection 1
                    </button>
                  </div>
                </div>
              </div>
            </Collapse>
            <button
              className="btn-block d-flex px-4 py-2"
              onClick={() => this.toggleAccordion2(1)}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <div className="flex-shrink-0">
                <h6 className="text-secondary">By Price</h6>
              </div>
              <div className="flex-fill"></div>
              <div className="flex-shrink-0">
                <i className="fas fa-chevron-circle-up text-secondary"></i>
              </div>
            </button>
            <Collapse isOpen={(this.state as any).accordion2[1]}>
              <div style={{ backgroundColor: "#E9E9E9" }} className="px-3 py-3">
                <div>hello</div>
              </div>
            </Collapse>
            <button
              className="btn-block d-flex px-4 py-2"
              onClick={() => this.toggleAccordion2(2)}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <div className="flex-shrink-0">
                <h6 className="text-secondary">By Size</h6>
              </div>
              <div className="flex-fill"></div>
              <div className="flex-shrink-0">
                <i className="fas fa-chevron-circle-up text-secondary"></i>
              </div>
            </button>
            <Collapse isOpen={(this.state as any).accordion2[2]}>
              <div style={{ backgroundColor: "#E9E9E9" }} className="px-3 py-3">
                <div>hello</div>
              </div>
            </Collapse>
            <button
              className="btn-block d-flex px-4 py-2"
              onClick={() => this.toggleAccordion2(3)}
              style={{
                backgroundColor: "transparent",
                outline: "none",
                border: "none",
              }}
            >
              <div className="flex-shrink-0">
                <h6 className="text-secondary">By Brand</h6>
              </div>
              <div className="flex-fill"></div>
              <div className="flex-shrink-0">
                <i className="fas fa-chevron-circle-down text-secondary"></i>
              </div>
            </button>
            <Collapse isOpen={(this.state as any).accordion2[3]}>
              <div style={{ backgroundColor: "#E9E9E9" }} className="px-4 py-3">
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
                      Brand-1
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
                      Brand-2
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
                      Brand-3
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
                      Brand-4
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
                      Brand-5
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
export default FilterPageView;
