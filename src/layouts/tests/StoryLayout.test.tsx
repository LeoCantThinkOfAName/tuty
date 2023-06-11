import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";

import { StoryLayout } from "../StoryLayout";
import { createWrapper } from "../../utils/createWrapper";

describe("StoryLayout", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = render(<StoryLayout />, {
      wrapper: createWrapper(),
    });
    expect(container).toBeTruthy();
  });
});
