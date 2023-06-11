import {
  afterAll,
  afterEach,
  beforeAll,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { cleanup, renderHook, waitFor } from "@testing-library/react";

import { createWrapper } from "../../utils/createWrapper";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { usePosts } from "../usePosts";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_API_BASE}/posts`;
const server = setupServer(
  rest.get(ENDPOINT, (_req, res, ctx) => {
    return res(ctx.json({}));
  }),
);

const createHook = () =>
  renderHook(() => usePosts(), {
    wrapper: createWrapper(),
  });

describe("usePosts", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    server.resetHandlers();
  });

  test("Should render", () => {
    const { result } = createHook();
    expect(result.current).toHaveProperty("data");
    expect(result.current).toHaveProperty("error");
  });

  test("Should return data", async () => {
    server.use(
      rest.get(ENDPOINT, (_req, res, ctx) => {
        return res(ctx.json({ first: 123 }));
      }),
    );
    const { result } = createHook();
    await waitFor(() => expect(result.current.isSuccess).toBe(true));
  });

  test("Should failed", async () => {
    server.use(
      rest.get(ENDPOINT, (req, res, ctx) => {
        return res(
          ctx.status(404),
          ctx.json({
            errorMessage: "error",
          }),
        );
      }),
    );
    const { result } = createHook();
    await waitFor(() => expect(result.current.isError).toBe(true));
  });

  test("Should get next page", async () => {
    server.use(
      rest.get(ENDPOINT, (req, res, ctx) => {
        return res(ctx.json(new Array(10)));
      }),
    );
    const { result } = createHook();
    await waitFor(() =>
      expect(result.current.data?.pages[0]?.data).toHaveLength(10),
    );
    await result.current.fetchNextPage();
    await waitFor(() =>
      expect(result.current.data?.pages[1]?.nextPage).toBe(2),
    );
  });
});
