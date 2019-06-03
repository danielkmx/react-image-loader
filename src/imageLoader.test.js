import "jest-dom/extend-expect";

import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, act } from "@testing-library/react";
import ImageLoader from "./ImageLoader";

const smallImageURL = "http://smallimage/";
const largeImageURL = "http://largeimage/";

it("renders without crashing", async () => {
  const { getByTestId, queryByTestId } = render(
    <ImageLoader image_large={largeImageURL} image_small={smallImageURL} />
  );
  const imgSmall = getByTestId("image-small");
  const imgLarge = getByTestId("image-large");

  expect(imgSmall.src).toBe(smallImageURL);
  expect(imgLarge.src).toBe(largeImageURL);
  expect(imgLarge).not.toBeVisible();

  act(() => fireEvent.load(imgLarge));

  expect(queryByTestId("image-small")).toBeNull();
  expect(queryByTestId("image-large")).toBeVisible();
});
