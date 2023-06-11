import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { SignupForm } from "../SignupForm";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

describe("SignupForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<SignupForm />, {
      wrapper: createWrapper(),
    });
    expect(screen.getByRole("form")).toBeTruthy();
  });

  test("Should able to submit", async () => {
    const { container } = render(<SignupForm />, {
      wrapper: createWrapper(),
    });
    const emailField = container.querySelector(
      'input[name="email"]',
    ) as HTMLInputElement;
    const passwordField = container.querySelector(
      'input[name="password"]',
    ) as HTMLInputElement;
    const passwordValidationField = container.querySelector(
      'input[name="passwordValidation"]',
    ) as HTMLInputElement;
    const submitBtn = container.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;
    await act(async () => userEvent.click(emailField));
    await act(async () => userEvent.keyboard("test@email.com"));
    await act(async () => userEvent.click(passwordField));
    await act(async () => userEvent.keyboard("myFakePassword"));
    await act(async () => userEvent.click(passwordValidationField));
    await act(async () => userEvent.keyboard("myFakePassword"));
    await act(async () => userEvent.click(submitBtn));
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
