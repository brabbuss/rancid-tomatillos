import React from "react";
import ErrorPage from "./ErrorPage";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

describe("ErrorPage", () => {
  it("should render a message when an error occures", () => {
    const mockErrorCode = 400;
    const mockProps = [];

    render(
      <MemoryRouter>
        <ErrorPage errorCode={mockErrorCode} {...mockProps} />
      </MemoryRouter>
    );

    expect(screen.queryByText("Error Code: 400")).toBeInTheDocument();
    screen.queryByText((content, node) => {
      const hasText = (node) =>
        node.textContent ===
        "Sorry, there was an error. Please click here if you are not automatically redirected.";
      const nodeHasText = hasText(node);
      const childrenDontHaveText = Array.from(node.children).every(
        (child) => !hasText(child)
      );
      return nodeHasText && childrenDontHaveText;
    });
  }),
    it("should have an error message for 404 errors", () => {
      const mockErrorCode = 404;
      const mockProps = [];

      render(
        <MemoryRouter>
          <ErrorPage errorCode={mockErrorCode} {...mockProps} />
        </MemoryRouter>
      );
      expect(screen.queryByText("Error Code: 404")).toBeInTheDocument();

      screen.queryByText((content, node) => {
        const hasText = (node) =>
          node.textContent ===
          "Sorry, but there is nothing here at this URL. Maybe it moved to a different URL? Please click here to go home, or enter a valid URL.";
        const nodeHasText = hasText(node);
        const childrenDontHaveText = Array.from(node.children).every(
          (child) => !hasText(child)
        );
        return nodeHasText && childrenDontHaveText;
      });
    });
});
