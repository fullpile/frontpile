import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Input } from "@frontpile/input";

describe("Input", () => {
  it("renders", () => {
    render(<Input label="Label" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
