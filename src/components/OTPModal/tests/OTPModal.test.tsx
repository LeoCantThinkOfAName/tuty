import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { OTPModal } from "../index";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("OTPModal", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("dialog")).toBeTruthy();
  });

  test("Should ignore user's input if abcdef", async () => {
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: createWrapper(),
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await act(async () => userEvent.click(inputs[0]));
    await act(async () => userEvent.keyboard("abcdef"));
    expect(inputs[0].value).toBe("");
  });

  test("Should able to type if 012345", async () => {
    const values = [0, 1, 2, 3, 4, 5];
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: createWrapper(),
    });
    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await act(async () => userEvent.click(inputs[0]));
    for (let v of values) {
      await act(async () => userEvent.keyboard(v.toString()));
    }
    for (let v of values) {
      await waitFor(() => expect(inputs[v].value).toBe(v.toString()));
    }
  });

  test("Should able to handle backspace", async () => {
    const values = [0, 1, 2, 3, 4, 5];
    render(<OTPModal isOpen={true} onClose={() => {}} />, {
      wrapper: createWrapper(),
    });

    const inputs: HTMLInputElement[] =
      screen.getAllByLabelText("grouped-input");
    await act(async () => userEvent.click(inputs[0]));
    for (let v of values) {
      await act(async () => userEvent.keyboard(v.toString()));
    }
    await act(async () => userEvent.keyboard("[Backspace]"));
    expect(inputs[5].value).toBe("");
    await act(async () => userEvent.keyboard("[Backspace]"));
    expect(inputs[3] === document.activeElement).toBe(true);
  });
});
