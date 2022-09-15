import { createStore } from "redux";
import reducer from "./reducer";

export type RootState = {
  pageTitle: string;
};

const initialState: RootState = {
  pageTitle: "🎥 Movie Catalogue"
};

const store = createStore(reducer, initialState);

export default store;
