/** @jest-environment jsdom */

import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Home from "../pages";
import { InfoProvider } from "../context/infoContext";
import App from "../App";
import Settings from "../pages/settings";

it("should run app without crashing", () => {
  render(<App />);
});
it("should run home page without crashing", () => {
  render(
    <InfoProvider>
      <Home />
    </InfoProvider>
  );
});
it("should run settings page without crashing", () => {
  render(
    <InfoProvider>
      <Settings />
    </InfoProvider>
  );
});
it("should open user modal and show address", () => {
  render(
    <InfoProvider>
      <Home />
    </InfoProvider>
  );
  setTimeout(() => {
    // wait for loading ends
    fireEvent.click(screen.getByRole("div", { name: "user-wrapper" }));
    expect(screen.getByRole("p", { name: "Address" })).toBeVisible();
  }, 1000);
});
it("should turn on dark mode", () => {
  render(
    <InfoProvider>
      <Settings />
    </InfoProvider>
  );
  fireEvent.click(screen.getByTestId("toogle"), true);
  expect(screen.getByTestId("toogle")).toBeChecked();
});
