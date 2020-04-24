import { ArkModule } from "@skyslit/ark-react";
import { connect } from "react-redux";
import StarterPageView from "./views/StarterPage.view";
import {
  ComponentMap,
  PackageRouteConfig,
} from "@skyslit/ark-react/build/types";
import HomePageView from "./views/HomePage.view.";
import NoSearchResultView from "./views/NoSearchResult.view";
import CatalogueDetailsPageView from "./views/CatalogueDetails.view";
import FilterPageView from "./views/FilterPage.view";

export type Movie = {
  title: string;
  actor: string;
};
export type CatalogueItem = {
  _id: string;
  _handler: string;
  title: string;
  description?: string;
  tags: Array<string>;
};

export type StateType = {
  messageToDisplay: string;
  movies: Movie[];
  isLoading: boolean;
  hasHomePageIntialized: boolean;
  featuredItems: CatalogueItem[];
  catalogueFeaturedItem: CatalogueItem;
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
          case this.actionTypes.POPULATE_FEATURED_ITEMS: {
            const { value } = action.payload;
            return Object.assign({}, state, {
              featuredItems: [...state.featuredItems, ...value],
            });
          }
          case this.actionTypes.POPULATE_CATALOGUE_ITEM_BY_HANDLER: {
            const { value } = action.payload;
            return Object.assign({}, state, {
              catalogueFeaturedItem: value,
            });
          }
          case this.actionTypes.SET_IS_LOADING: {
            const { value } = action.payload;
            return Object.assign({}, state, {
              isLoading: value,
            });
          }
          case this.actionTypes.SET_HAS_HOME_PAGE_INITIALISED: {
            const { value } = action.payload;
            return Object.assign({}, state, {
              hasHomePageIntialized: value,
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
    POPULATE_FEATURED_ITEMS: "POPULATE_FEATURED_ITEMS",
    POPULATE_CATALOGUE_ITEM_BY_HANDLER: "POPULATE_CATALOGUE_ITEM_BY_HANDLER",
    SET_IS_LOADING: "SET_IS_LOADING",
    SET_HAS_HOME_PAGE_INITIALISED: "SET_HAS_HOME_PAGE_INITIALISED",
  };

  views: ComponentMap = {
    StarterPage: StarterPageView,
    HomePage: HomePageView,
    NoSearchResultPage: NoSearchResultView,
    CatalogueDetailsPage: CatalogueDetailsPageView,
    FilterPage: FilterPageView,
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
    populateHome: () => {
      this.services
        .fetchHome()
        .then((CatalogueItems: any) => {
          this.dispatch({
            type: this.actionTypes.POPULATE_FEATURED_ITEMS,
            payload: {
              value: CatalogueItems,
            },
          });
          this.dispatch({
            type: this.actionTypes.SET_IS_LOADING,
            payload: { value: false },
          });
          this.dispatch({
            type: this.actionTypes.SET_HAS_HOME_PAGE_INITIALISED,
            payload: { value: true },
          });
        })
        .catch(() => {
          this.dispatch({
            type: this.actionTypes.SET_IS_LOADING,
            payload: { value: false },
          });
          this.showError("Network error", "Unable to fetch home page", true);
        });
    },
    populateCatalogueItemByHandler: (handler: string) => {
      this.dispatch({
        type: this.actionTypes.SET_IS_LOADING,
        payload: { value: true },
      });
      this.services
        .fetchCatalogueItemByHandler(handler)
        .then((response: any) => {
          console.log("anandhu");
          this.dispatch({
            type: this.actionTypes.POPULATE_CATALOGUE_ITEM_BY_HANDLER,
            payload: {
              value: response,
            },
          });
          this.dispatch({
            type: this.actionTypes.SET_IS_LOADING,
            payload: { value: false },
          });
        })
        .catch((err) => {
          console.log("heloooo");
          this.dispatch({
            type: this.actionTypes.SET_IS_LOADING,
            payload: { value: false },
          });
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
    fetchHome: () => {
      return new Promise((resolve, reject) => {
        this.getServiceProvider("Main")
          .get("/api/home")
          .then((response) => {
            resolve((response.data && response.data) || null);
          })
          .catch((err) => {
            reject((err.response && err.response && err.response.data) || err);
          });
      });
    },
    fetchCatalogueItemByHandler: (handler: string) => {
      return new Promise((resolve, reject) => {
        this.getServiceProvider("Main")
          .get(`/api/product/${handler}`)
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
    isLoading: true,
    hasHomePageIntialized: false,
    featuredItems: [],
    catalogueFeaturedItem: null,
  };

  getDefaultRoutes(): PackageRouteConfig[] {
    return [
      {
        path: "/filter",
        exact: true,
        component: this.views.FilterPage,
      },
      {
        path: "/product/:handler",
        exact: true,
        component: this.views.CatalogueDetailsPage,
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
