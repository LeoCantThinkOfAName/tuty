import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import InputGroupItem from "../components/InputGroupItem";
import userEvent from "@testing-library/user-event";

describe("InputGroupItem", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const elm = render(<InputGroupItem />);
    expect(elm).toBeDefined();
  });

  test("Should accept defaultValue", () => {
    render(<InputGroupItem defaultValue="hello" />);
    expect(screen.getByLabelText("grouped-input")).toBeDefined();
  });

  test("Should able to edit", async () => {
    render(<InputGroupItem defaultValue="hello" />);
    const input = screen.getByLabelText<HTMLInputElement>("grouped-input");
    await userEvent.type(input, " world");
    expect(input.value).toBe("hello world");
  });
});
