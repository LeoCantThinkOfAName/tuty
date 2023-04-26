import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import InputGroup from "../components/InputGroup";
import InputGroupItem from "../components/InputGroupItem";

describe("InputGroup", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const elm = render(<InputGroup />);
    expect(elm).toBeDefined();
  });

  test("Should not render invalid children", async () => {
    render(<InputGroup>Invalid</InputGroup>);
    expect(screen.queryByText("Invalid")).toBeFalsy();
  });

  test("Should not render elements other than InputGroupItem", async () => {
    render(
      <InputGroup>
        <div>Invalid</div>
      </InputGroup>,
    );
    expect(screen.queryByText("Invalid")).toBeFalsy();
  });

  test("Should be able to render InputGroupItem", async () => {
    render(
      <InputGroup>
        <InputGroupItem />
      </InputGroup>,
    );
    expect(screen.getByLabelText("grouped-input")).toBeTruthy();
  });

  test("Should set maegin for child element", async () => {
    const SecondChild = <InputGroupItem />;
    render(
      <InputGroup>
        <InputGroupItem />
        {SecondChild}
      </InputGroup>,
    );
    const firstElm = screen.queryAllByLabelText("grouped-input")[0];
    const secondElm = screen.queryAllByLabelText("grouped-input")[1];
    const classNames = firstElm.className === secondElm.className;
    expect(classNames).toBeFalsy();
  });
});
``;
