import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { OAuthOptions } from "../OAuthOptions";
import { createWrapper } from "../../../utils/createWrapper";

describe("OAuthOptions", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(<OAuthOptions mode="login" />, {
      wrapper: createWrapper(),
    });
    expect(screen.getAllByRole("button")).toHaveLength(3);
  });
});
