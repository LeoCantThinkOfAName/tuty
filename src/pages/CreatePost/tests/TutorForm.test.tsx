import * as Context from "../context";
import * as Submit from "../useSubmit";

import { TutorForm, TutorFormProps } from "../forms/TutorForm";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { createWrapperWithFormContext } from "../../../utils/createWrapper";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

const renderComponent = (props?: TutorFormProps) =>
  render(<TutorForm {...props} />, {
    wrapper: createWrapperWithFormContext(),
  });

const mockContext = (type: Context.FormType) => {
  vi.spyOn(Context, "useCreatePostContext").mockImplementation(() => type);
};

describe("TutorForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should display form when type equals to `find_student`", async () => {
    mockContext("find_student");
    renderComponent();
    expect(screen.getAllByRole("group")).toHaveLength(5);
  });

  test("Should display form when type equals to `find_tutor`", async () => {
    mockContext("find_tutor");
    renderComponent();
    expect(screen.getAllByRole("group")).toHaveLength(5);
  });

  test("Should able to submit", async () => {
    const mockSubmitFn = vi.fn();
    mockContext("find_tutor");
    vi.spyOn(Submit, "useSubmit").mockReturnValue(mockSubmitFn);
    renderComponent({
      defaultValues: {
        rate: 1000,
        rateType: "hour",
        subject: "subject",
        description: faker.lorem.words(30),
        location: "location",
      },
    });
    const submitButton = screen.getByRole("button");
    await act(async () => userEvent.click(submitButton));
    await waitFor(() => expect(mockSubmitFn).toHaveBeenCalled());
  });
});
