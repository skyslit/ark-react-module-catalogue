import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";

class CatalogueDetailsPageView extends React.Component<
  ViewComponentPropType<DefaultModule>
> {
  componentDidMount() {
    this.props.module.controller.populateCatalogueItemByHandler(
      (this.props.match.params as any).handler
    );
  }
  render() {
    console.log(this.props.context.catalogueFeaturedItem);
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
          <title>Product</title>
        </Helmet>
        <div className="container-fluid bg-light catalogue-module-product-wrapper">
          <div className="row">
            <div className="col-12">
              <div className="container py-5">
                <div className="row pt-3">
                  <div
                    style={{
                      backgroundImage: `url('${require("../images/default-image.png")}')`,
                    }}
                    className="col-lg-4 main-catalogue-img-wrapper"
                  ></div>
                  <div className="col-lg-8 pl-sm-5 pt-5 pt-lg-0">
                    <div className="row">
                      <div className="col-sm-6 order-1 text-center text-sm-left">
                        <h5 className="font-weight-bold">
                          {this.props.context.catalogueFeaturedItem &&
                            this.props.context.catalogueFeaturedItem.title}
                        </h5>
                        <h6 className="text-secondary font-weight-bold pt-2">
                          {this.props.context.catalogueFeaturedItem &&
                            this.props.context.catalogueFeaturedItem
                              .description}
                        </h6>
                      </div>
                      <div className="col-sm-6 order-3 order-sm-2 text-center text-sm-right d-flex align-items-center justify-content-center pt-4 pt-sm-0 px-0">
                        <button
                          type="button"
                          className="btn btn-success d-none d-sm-block px-5 py-2"
                        >
                          ACTION 1
                        </button>
                        <button
                          style={{ maxWidth: 300 }}
                          type="button"
                          className="btn btn-success btn-block d-sm-none px-5 py-2"
                        >
                          ACTION 1
                        </button>
                      </div>
                      <div className="col-12 order-5 px-0 order-sm-3">
                        <p className="text-secondary pt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi rhoncus, ex a fermentum pulvinar, diam
                          urna fermentum sem, at posuere erat nunc nec metus.
                          Donec iaculis velit lorem, non convallis ligula
                          vulputate eu. Proin in eros condimentum, commodo ante
                          ac, fringilla augue. Sed eget elit et lorem faucibus
                          semper. Interdum et malesuada fames ac ante ipsum
                          primis in faucibus. Donec interdum augue eget libero
                          accumsan euismod. Nulla lobortis nisl non odio mattis,
                          vel accumsan neque mollis.
                        </p>
                        <p className="text-secondary pt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Morbi rhoncus, ex a fermentum pulvinar, diam
                          urna fermentum sem, at posuere erat nunc nec metus.
                          Donec iaculis velit lorem, non convallis ligula
                          vulputate eu. Proin in eros condimentum, commodo ante
                          ac, fringilla augue. Sed eget elit et lorem faucibus
                          semper. Interdum et.
                        </p>
                      </div>
                      <div className="col-sm-6 order-2 order-sm-4 text-center text-sm-left pt-5 pt-sm-0">
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
                      <div className="col-sm-6 text-center order-4 order-sm-5 text-sm-right d-flex align-items-center justify-content-center pt-3 pt-sm-0 px-0">
                        <button
                          type="button"
                          className="btn btn-secondary d-none d-sm-block px-5 py-2"
                        >
                          ACTION 2
                        </button>
                        <button
                          style={{ maxWidth: 300 }}
                          type="button"
                          className="btn btn-secondary btn-block d-sm-none px-5 py-2"
                        >
                          ACTION 2
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 bg-white pt-5 px-sm-5">
              <h5>SIMILAR PRODUCTS</h5>
              <div className="pt-5">
                <img
                  width={200}
                  src={require("../images/default-image.png")}
                  alt="logo"
                  className="product-img-wrapper"
                />
                <h6 className="pt-4">TITLE 1</h6>
                <label className="text-secondary font-weight-bold">
                  DESCRIPTION
                </label>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CatalogueDetailsPageView;
