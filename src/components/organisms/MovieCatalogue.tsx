import { CSSProperties, FC, useState, useMemo } from "react";

import MoviePreview from "../molecules/MoviePreview";
import MovieList from "../../smart-components/MovieList";
import { listToRecord } from "../../utils";

const movieCatalogueWrapperStyle: CSSProperties = {
  height: "100%",
  overflow: "hidden",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  width: "100%"
};

const movieSectionWrapperStyle: CSSProperties = {
  flex: "1 1 50%",
  height: "calc(100vh - 60px)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

const moviePreviewWrapperStyle: CSSProperties = {
  ...movieSectionWrapperStyle,
  textAlign: "center",
  marginRight: "1em",
  alignSelf: "flex-start"
};

const movieListWrapperStyle: CSSProperties = {
  ...movieSectionWrapperStyle,
  textAlign: "left",
  alignSelf: "flex-end"
};

type MovieData = {
  title: string;
  year: string;
  id: string;
  poster: string;
  director: string;
  casts: string;
  genre: string;
};

type MovieCatalogueProps = {
  movieListData: MovieData[];
};

const MovieCatalogue: FC<MovieCatalogueProps> = ({ movieListData }) => {
  const [selectedMovieId, setSelectedMovieId] = useState<string>(
    movieListData[0].id
  );

  const movieMap = useMemo(() => listToRecord(movieListData, "id"), [
    movieListData
  ]);

  const selectedMovie = movieMap[selectedMovieId] || movieListData[0];

  const { title, poster, year, director, casts, genre } = selectedMovie;
  return (
    <section style={movieCatalogueWrapperStyle}>
      <section style={moviePreviewWrapperStyle}>
        <MoviePreview
          movieTitle={title}
          posterUrl={poster}
          releaseYear={year}
          director={director}
          casts={casts}
          genre={genre}
        />
      </section>
      <section style={movieListWrapperStyle}>
        <MovieList
          movieListData={movieListData}
          selectedMovieId={selectedMovieId}
          movieMap={movieMap}
          onItemSelected={setSelectedMovieId}
        />
      </section>
    </section>
  );
};

export default MovieCatalogue;
