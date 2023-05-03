import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { SignupForm } from "../SignupForm";
import { TestProvider } from "../../../utils/TestProvider";
import userEvent from "@testing-library/user-event";

describe("SignupForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<SignupForm />, {
      wrapper: TestProvider,
    });
    expect(screen.getByRole("form")).toBeTruthy();
  });

  test("Should able to submit", async () => {
    const { container } = render(<SignupForm />, {
      wrapper: TestProvider,
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
    await userEvent.click(emailField);
    await userEvent.keyboard("test@email.com");
    await userEvent.click(passwordField);
    await userEvent.keyboard("myFakePassword");
    await userEvent.click(passwordValidationField);
    await userEvent.keyboard("myFakePassword");
    await userEvent.click(submitBtn);
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
