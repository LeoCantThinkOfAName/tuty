import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render } from "@testing-library/react";

import { SimpleLayout } from "../SimpleLayout";
import { createWrapper } from "../../utils/createWrapper";

describe("SimpleLayout", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    const { container } = render(<SimpleLayout />, {
      wrapper: createWrapper(),
    });
    expect(container).toBeTruthy();
  });
});
