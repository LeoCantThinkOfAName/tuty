import { FieldValues, UseFormReturn } from "react-hook-form";
import { afterEach, describe, expect, test, vi } from "vitest";

import { cleanup } from "@testing-library/react";
import { createWrapper } from "../../../utils/createWrapper";
import { renderHook } from "@testing-library/react-hooks";
import { useSubmit } from "../useSubmit";

const renderReactHook = () =>
  renderHook(() => useSubmit({} as UseFormReturn<FieldValues>), {
    wrapper: createWrapper(),
  });

describe("useSubmit", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    vi.clearAllTimers();
  });

  test("Should render", () => {
    const { result } = renderReactHook();
    expect(result.current).toBeTypeOf("function");
  });
});
