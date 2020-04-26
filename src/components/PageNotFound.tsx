import React from "react";

export default (props: any) => {
  return (
    <>
      <div className="container-fluid bg-light  catalogue-moduole-no-search-result-wrapper pb-5">
        <div className="row">
          <div className="col-12 text-center px-5">
            <div className="no-search-result-img-wrapper"></div>
            <h4 className="font-weight-bold pt-sm-5">
              Search result: 'football shoes'
            </h4>
            <label className="text-dark pt-3">
              Nothing matches for your search keyword. Try searching another
              <br></br> keyword or go back home
            </label>
            <div className="pt-3">
              <button type="button" className="btn btn-dark px-4 px-sm-5 py-2">
                GO BACK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
