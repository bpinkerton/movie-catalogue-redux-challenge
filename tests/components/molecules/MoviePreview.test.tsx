import { shallow } from "enzyme";
import React from "react";

import "../../setup";

import MoviePreview from "../../../src/components/molecules/MoviePreview";

const testData = {
  movieTitle: "The Avengers",
  posterUrl: "https://test.com",
  releaseYear: "2020",
  director: "Steven Spielberg",
  casts: "Robert Downey Jr.",
  genre: "Action"
};

describe("MoviePreview Component test", () => {
  it("Should render and map the data properly", () => {
    const component = shallow(<MoviePreview {...testData} />);
    // MoviePoster Assertion
    expect(component.find("MoviePoster")).toHaveLength(1);
    expect(component.find("MoviePoster").prop("movieTitle")).toEqual(
      testData.movieTitle
    );
    expect(component.find("MoviePoster").prop("posterUrl")).toEqual(
      testData.posterUrl
    );

    // MovieLabel Assertion
    expect(component.find("MovieLabel")).toHaveLength(1);
    expect(component.find("MovieLabel").prop("title")).toEqual(
      testData.movieTitle
    );
    expect(component.find("MovieLabel").prop("year")).toEqual(
      testData.releaseYear
    );

    // MovieInfo Director Section
    expect(component.find("MovieInfo").at(0)).toBeDefined();
    expect(component.find("MovieInfo").at(0).prop("label")).toEqual("Director");
    expect(component.find("MovieInfo").at(0).prop("value")).toEqual(
      testData.director
    );

    // MovieInfo Casts Section
    expect(component.find("MovieInfo").at(1)).toBeDefined();
    expect(component.find("MovieInfo").at(1).prop("label")).toEqual("Casts");
    expect(component.find("MovieInfo").at(1).prop("value")).toEqual(
      testData.casts
    );

    // MovieInfo Genre Section
    expect(component.find("MovieInfo").at(2)).toBeDefined();
    expect(component.find("MovieInfo").at(2).prop("label")).toEqual("Genre");
    expect(component.find("MovieInfo").at(2).prop("value")).toEqual(
      testData.genre
    );
  });
});
