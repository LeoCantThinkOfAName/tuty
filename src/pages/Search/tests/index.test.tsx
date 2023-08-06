import {
  afterAll,
  afterEach,
  beforeAll,
  beforeEach,
  describe,
  expect,
  test,
  vi,
} from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";

import { SearchPage } from "../index";
import { createWrapper } from "../../../utils/createWrapper";
import { rest } from "msw";
import { setupServer } from "msw/node";

const ENDPOINT = `${import.meta.env.VITE_SUPABASE_API_BASE}/posts`;
const server = setupServer();

describe("SearchPage", () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
    server.resetHandlers();
  });

  test("Should render", () => {
    const { container } = render(<SearchPage />, {
      wrapper: createWrapper(),
    });
    expect(container).toBeTruthy();
  });

  test("Should render with data", async () => {
    server.use(
      rest.get(ENDPOINT, (_req, res, ctx) => {
        return res(
          ctx.json([
            {
              id: "f95c767b-adfa-4f92-b8f8-667ffaef9d1f",
              content:
                "Totam perferendis mollitia error quidem nostrum sint porro. Culpa mollitia nobis accusamus velit provident. Aspernatur dolorem quod facilis corporis.<br/>\nMolestias rerum at error sint unde vero exercitationem. Sint fuga voluptas ducimus cupiditate autem recusandae provident placeat odio. Expedita natus nulla ipsam possimus magni.<br/>\nVel quae nesciunt quasi. Facere aliquid vero doloremque ducimus quos libero consequuntur. Placeat atque pariatur minus corrupti dolorem libero deserunt omnis.<br/>\nOmnis eveniet suscipit. Quibusdam fuga placeat pariatur beatae accusamus sapiente praesentium beatae molestiae. Quas libero beatae reprehenderit ratione sed minima.<br/>\nIste iure earum possimus cupiditate ullam. Sed cupiditate vitae officia dolor maiores odio exercitationem eveniet reprehenderit. Excepturi quas enim ad ad magnam aliquam quasi repudiandae.<br/>\nMinima harum repellendus quisquam natus vero iste sapiente perspiciatis corporis. Architecto maxime enim facilis quas nihil beatae. Facere inventore culpa sed architecto veritatis labore veniam.<br/>\nSit cupiditate quas et possimus. Quae illo consectetur perspiciatis illum eos. Harum quae exercitationem atque itaque distinctio veniam.<br/>\nLaborum atque rem distinctio. Quaerat quisquam id quis distinctio commodi fugiat. Labore illo architecto aut doloremque esse repudiandae tempora necessitatibus consectetur.",
              authorId: "98f1044f-e3cc-483c-a5b7-7024358960af",
              categoryId: 4,
              location: "North Gracie",
              subject: "necessitatibus possimus inventore",
              objective: "烏克麗麗",
              rateType: "year",
              rate: 396,
              createdAt: "2023-05-30T07:51:43.539+00:00",
              updatedAt: null,
              deletedAt: null,
              tags: ["多益"],
              author: {
                id: "98f1044f-e3cc-483c-a5b7-7024358960af",
                name: "Bobby Huels",
                img: null,
                title: "Product Research Supervisor",
              },
              category: {
                id: 4,
                name: "SKILL_EXCHANGE",
              },
            },
          ]),
        );
      }),
    );

    render(<SearchPage />, {
      wrapper: createWrapper(),
    });
    await waitFor(() => expect(screen.getAllByRole("article")).toHaveLength(1));
  });
});
