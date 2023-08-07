import * as Context from "../context";
import * as Submit from "../useSubmit";

import { StudyGroupForm, StudyGroupFormProps } from "../forms/StudyGroupForm";
import { act, cleanup, render, screen, waitFor } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { CATEGORY_TYPE } from "../../../constants";
import { createWrapperWithFormContext } from "../../../utils/createWrapper";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";

const renderComponent = (props?: StudyGroupFormProps) =>
  render(<StudyGroupForm {...props} />, {
    wrapper: createWrapperWithFormContext(),
  });

const mockContext = (type: CATEGORY_TYPE) => {
  vi.spyOn(Context, "useCreatePostContext").mockImplementation(() => type);
};

describe("StudyGroupForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = renderComponent();
    expect(container).toBeDefined();
  });

  test("Should display form when type equals to `STUDY_GROUP`", async () => {
    mockContext("STUDY_GROUP");
    renderComponent();
    expect(screen.getAllByRole("group")).toHaveLength(4);
  });

  test("Should able to submit", async () => {
    const mockSubmitFn = vi.fn();
    mockContext("STUDY_GROUP");
    vi.spyOn(Submit, "useSubmit").mockReturnValue(mockSubmitFn);
    renderComponent({
      defaultValues: {
        purpose: "purpose",
        description: faker.lorem.words(30),
        location: "location",
      },
    });
    const submitButton = screen.getByRole("button");
    await act(async () => userEvent.click(submitButton));
    await waitFor(() => expect(mockSubmitFn).toHaveBeenCalled());
  });
});
