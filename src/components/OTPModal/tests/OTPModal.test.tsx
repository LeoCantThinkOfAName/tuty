import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import { OTPModal } from "../index";
import { TestProvider } from "../../../utils/TestProvider";
import userEvent from "@testing-library/user-event";

const values = [0, 1, 2, 3, 4, 5];
describe("OTPModal", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    expect(screen.getAllByLabelText("grouped-input")).toHaveLength(6);
  });

  test("Should ignore user's input if abcdef", () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    userEvent.click(inputs[0]);
    userEvent.keyboard("abcdef");
    expect(inputs[0].value).toBe("");
  });

  test("Should able input type if 012345", async () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await userEvent.click(inputs[0]);
    for (let v of values) {
      await userEvent.keyboard(`${values[v]}`);
    }
    for (let v of values) {
      expect(inputs[v].value).toBe(`${values[v]}`);
    }
  });

  test("Should able to handle backspace", async () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await userEvent.click(inputs[0]);
    for (let v of values) {
      await userEvent.keyboard(`${values[v]}`);
    }
    await userEvent.keyboard("[Backspace]");
    expect(inputs[5].value).toBe("");
  });
});
