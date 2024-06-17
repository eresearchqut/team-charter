import { render, screen } from "@testing-library/react";
import { StickyNote } from "../src/components";
import "@testing-library/jest-dom";

describe("Stick Note", () => {
  it("renders message", () => {
    render(<StickyNote message="I am a test note" />);
    const text = screen.getByText("I am a test note");
    expect(text).toBeInTheDocument();
  });
});
