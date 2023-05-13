import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { StoryLayout } from "../StoryLayout";
import { TestProvider } from "../../utils/TestProvider";

describe("StoryLayout", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = render(<StoryLayout />, {
      wrapper: TestProvider,
    });
    expect(container).toBeTruthy();
  });
});
