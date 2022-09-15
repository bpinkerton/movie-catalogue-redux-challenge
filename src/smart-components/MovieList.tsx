import { FC } from "react";

import List from "../components/molecules/List";
import store from "../redux/store";
import { setPageTitle } from "../redux/actions";

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieListProps = {
  movieListData: MovieData[];
  onItemSelected?: Function;
  selectedMovieId: string;
  movieMap: Record<string, any>;
};

const MovieList: FC<MovieListProps> = ({
  movieListData,
  selectedMovieId,
  onItemSelected,
  movieMap
}) => {
  const onMovieSelected = (movieId: string) => {
    onItemSelected!(movieId);
    const [{ title }] = movieListData.filter((movie) => movie.id === movieId);
    store.dispatch(setPageTitle(title));
  };

  return (
    <>
      <List
        dataList={movieListData}
        onItemSelected={onMovieSelected}
        selectedItemId={selectedMovieId}
      />
    </>
  );
};

export default MovieList;
