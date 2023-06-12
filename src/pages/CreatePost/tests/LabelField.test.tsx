import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { LabelField } from "../fields/LabelField";
import { createWrapperWithFormContext } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

const renderComponent = () =>
  render(<LabelField />, {
    wrapper: createWrapperWithFormContext(),
  });

const typeInComboBox = async () => {
  const combobox = screen.getByRole("combobox");
  await act(async () => userEvent.click(combobox));
  await act(async () => userEvent.keyboard("test"));
  await act(async () => userEvent.keyboard("[Enter]"));
};

describe("LabelField", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    renderComponent();
    expect(screen.getByRole("combobox")).toBeTruthy();
  });

  test("Should handle user input", async () => {
    renderComponent();
    await typeInComboBox();
    expect(screen.getByText("test")).toBeTruthy();
  });

  test("Should not create same label", async () => {
    renderComponent();
    await typeInComboBox();
    await typeInComboBox();
    expect(screen.getAllByText("test")).toHaveLength(1);
  });

  test("Should able to remove label", async () => {
    renderComponent();
    await typeInComboBox();
    await act(async () => userEvent.keyboard("[Backspace]"));
    expect(screen.queryByText("test")).toBeFalsy();
  });
});
