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
    });
});
