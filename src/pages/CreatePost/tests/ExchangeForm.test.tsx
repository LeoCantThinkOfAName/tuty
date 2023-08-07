import * as Context from "../context";
import * as Submit from "../useSubmit";

import { ExchangeForm, ExchangeFormProps } from "../forms/ExchangeForm";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { createWrapperWithFormContext } from "../../../utils/createWrapper";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

const renderComponent = (props?: ExchangeFormProps) =>
  render(<ExchangeForm {...props} />, {
    wrapper: createWrapperWithFormContext(),
  });

describe("ExchangeForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should display form when type equals to `SKILL_EXCHANGE`", async () => {
    vi.spyOn(Context, "useCreatePostContext").mockImplementation(
      () => "SKILL_EXCHANGE"
    );
    renderComponent();
    expect(screen.getAllByRole("group")).toHaveLength(5);
  });

  test("Should able to submit", async () => {
    const mockSubmitFn = vi.fn();
    vi.spyOn(Context, "useCreatePostContext").mockImplementation(
      () => "SKILL_EXCHANGE"
    );
    vi.spyOn(Submit, "useSubmit").mockReturnValue(mockSubmitFn);
    renderComponent({
      defaultValues: {
        acquires: "acquires",
        provides: "provides",
        description: faker.lorem.words(30),
        location: "location",
      },
    });
    const submitButton = screen.getByRole("button");
    await act(async () => userEvent.click(submitButton));
    await waitFor(() => expect(mockSubmitFn).toHaveBeenCalled());
  });
});
