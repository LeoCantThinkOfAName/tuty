import { act, cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test, vi } from "vitest";

import { ThemeToggle } from "../index";
import { createWrapper } from "../../../utils/createWrapper";
import userEvent from "@testing-library/user-event";

const mockToggle = vi.fn();

vi.mock("@chakra-ui/react", async () => {
  const mod = await vi.importActual<typeof import("@chakra-ui/react")>(
    "@chakra-ui/react",
  );

  return {
    ...mod,
    useColorMode: () => ({
      toggleColorMode: mockToggle,
      colorMode: "dark",
    }),
  };
});

const renderComponent = () =>
  render(<ThemeToggle />, {
    wrapper: createWrapper(),
  });

describe("ThemeToggle", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    renderComponent();
    expect(screen.getByRole("button")).toBeTruthy();
  });

  test("Should able to toggle theme", async () => {
    renderComponent();
    const btn = screen.getByRole("button");
    await act(async () => userEvent.click(btn));
    expect(mockToggle).toBeCalled();
  });
});
