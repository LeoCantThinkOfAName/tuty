import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Post } from "../index";
import { TestProvider } from "../../../utils/TestProvider";

describe("Post", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<Post />, {
      wrapper: TestProvider,
    });
    expect(screen.getByRole("article")).toBeTruthy();
  });
});
