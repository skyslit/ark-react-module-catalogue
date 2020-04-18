import React from "react";
import { ViewComponentPropType } from "@skyslit/ark-react";
import { Helmet } from "react-helmet-async";
import DefaultModule from "../module";
import { useTranslation } from "react-i18next";

export default (props: ViewComponentPropType<DefaultModule>) => {
  const { t } = useTranslation();

  const showToast = () => {
    props.module.toast.show({
      message: "Have a wonderful day!",
      autoDismiss: "off",
      title: "Message",
      headerIcon: "secondary",
    });
  };

  return (
    <>
      <Helmet>
        <title>{props.context.messageToDisplay}</title>
      </Helmet>
      <div className="jumbotron">
        <h1 className="display-4">{props.context.messageToDisplay}</h1>
        <p className="lead">
          {t(
            "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information."
          )}
        </p>
        <hr className="my-4" />
        <p className="lead">
          <button
            onClick={() => props.module.controller.toggleTitle()}
            className="btn btn-primary btn-lg"
          >
            Toggle Message
          </button>
          <button
            onClick={() => props.module.controller.fetchMovies()}
            className="btn ml-4 btn-primary btn-lg"
          >
            Fetch Movies
          </button>
          <button onClick={showToast} className="btn ml-4 btn-primary btn-lg">
            Toast a Word
          </button>
        </p>
        <ul>
          {props.context.movies.map((movie, index) => (
            <li key={index}>{`${movie.title} - cast: ${movie.actor}`}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
