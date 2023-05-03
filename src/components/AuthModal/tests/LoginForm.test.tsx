import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { LoginForm } from "../LoginForm";
import { Tabs } from "@chakra-ui/react";
import { TestProvider } from "../../../utils/TestProvider";

describe("LoginForm", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(
      <Tabs>
        <LoginForm />
      </Tabs>,
      {
        wrapper: TestProvider,
      },
    );
    expect(screen.getByRole("form")).toBeTruthy();
  });
});
