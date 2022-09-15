import { FC } from "react";

import MovieCatalogue from "../components/organisms/MovieCatalogue";
import data from "../../static/movie-data.json";

const MoviePage: FC<{}> = () => {
  return (
    <>
      <MovieCatalogue movieListData={data} />
    </>
  );
};

export default MoviePage;
