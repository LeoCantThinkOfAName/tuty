import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";

import { OTPModal } from "../index";
import { TestProvider } from "../../../utils/TestProvider";
import userEvent from "@testing-library/user-event";

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

  test("Should ignore user's input if abcdef", async () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await userEvent.click(inputs[0]);
    await userEvent.keyboard("abcdef");
    expect(inputs[0].value).toBe("");
  });

  test("Should able input type if 012345", async () => {
    const values = [0, 1, 2, 3, 4, 5];
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await userEvent.click(inputs[0]);
    for (let v of values) {
      await userEvent.keyboard(v.toString());
    }
    for (let v of values) {
      await waitFor(() => expect(inputs[v].value).toBe(v.toString()));
    }
  });

  test("Should able to handle backspace", async () => {
    const values = [0, 1, 2, 3, 4, 5];
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: TestProvider,
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await userEvent.click(inputs[0]);
    for (let v of values) {
      await userEvent.keyboard(v.toString());
    }
    await userEvent.keyboard("[Backspace]");
    expect(inputs[5].value).toBe("");
    await userEvent.keyboard("[Backspace]");
    expect(inputs[4] === document.activeElement).toBe(true);
  });
});
