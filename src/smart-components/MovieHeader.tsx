import { FC, useState } from "react";
import Header from "../components/atoms/Header";
import store from "../redux/store";

const MovieHeader: FC<{}> = () => {
  const [pageTitle, setPageTitle] = useState<string>("🎥 Movie Catalogue");

  function select(state: any) {
    return state.pageTitle;
  }

  function handleChange() {
    setPageTitle(select(store.getState()));
  }

  const unsubscribe = store.subscribe(handleChange);

  return (
    <>
      <Header pageTitle={pageTitle} />
    </>
  );
};

export default MovieHeader;
