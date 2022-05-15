import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("hola", () => {
  it("patata", () => {
    render(<Button title="test" />);

    expect(screen.getByText("test")).not.toBeNull();
  });
});
test("basic", () => {
  expect(0).toBe(0);
});

test("basic again", () => {
  expect(3).toBe(3);
});
