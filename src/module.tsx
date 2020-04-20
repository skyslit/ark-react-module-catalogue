import { ArkModule } from "@skyslit/ark-react";
import { connect } from "react-redux";
import StarterPageView from "./views/StarterPage.view";
import {
  ComponentMap,
  PackageRouteConfig,
} from "@skyslit/ark-react/build/types";
import HomePageView from "./views/HomePage.view.";
import NoSearchResultView from "./views/NoSearchResult.view";
import ProductPageView from "./views/ProductPage.view";

export type Movie = {
  title: string;
  actor: string;
};

export type StateType = {
  messageToDisplay: string;
  movies: Movie[];
};

export default class DefaultModule extends ArkModule<StateType, "Main"> {
  constructor() {
    super("DefaultModule");

    this.useConnect(connect);

    this.getReducer = () => {
      return (state: StateType = this.initialState, action: any) => {
        switch (action.type) {
          case this.actionTypes.TOGGLE_MESSAGE: {
            return Object.assign({}, state, {
              messageToDisplay:
                state.messageToDisplay === "Hello World"
                  ? "Good Day"
                  : "Hello World",
            });
          }
          case this.actionTypes.POPULATE_MOVIES: {
            const { value } = action.payload;
            return Object.assign({}, state, {
              movies: [...state.movies, ...value],
            });
          }
          default: {
            return state;
          }
        }
      };
    };

    this.main = () => {
      /** This function will be executed while initializing a package */
    };
  }

  actionTypes = {
    TOGGLE_MESSAGE: "TOGGLE_MESSAGE",
    POPULATE_MOVIES: "POPULATE_MOVIES",
  };

  views: ComponentMap = {
    StarterPage: StarterPageView,
    HomePage: HomePageView,
    NoSearchResultPage: NoSearchResultView,
    ProductPage: ProductPageView,
  };

  controller = {
    toggleTitle: () => {
      this.dispatch({
        type: this.actionTypes.TOGGLE_MESSAGE,
      });
    },
    fetchMovies: () => {
      this.services
        .getMovieNames()
        .then((movies) => {
          this.dispatch({
            type: this.actionTypes.POPULATE_MOVIES,
            payload: {
              value: movies,
            },
          });
        })
        .catch((err) => {
          alert("API Call error");
        });
    },
  };

  services = {
    getMovieNames: () => {
      return new Promise((resolve, reject) => {
        this.getServiceProvider("Main")
          .get("/api/movies")
          .then((response) => {
            resolve((response.data && response.data) || null);
          })
          .catch((err) => {
            reject((err.response && err.response && err.response.data) || err);
          });
      });
    },
  };

  initialState: StateType = {
    messageToDisplay: "Hello World",
    movies: [],
  };

  getDefaultRoutes(): PackageRouteConfig[] {
    return [
      {
        path: "/product",
        exact: true,
        component: this.views.ProductPage,
      },
      {
        path: "/no-search-result",
        exact: true,
        component: this.views.NoSearchResultPage,
      },
      {
        path: "/home-page",
        exact: true,
        component: this.views.HomePage,
      },
      {
        path: "/",
        exact: true,
        component: this.views.StarterPage,
      },
    ];
  }
}
