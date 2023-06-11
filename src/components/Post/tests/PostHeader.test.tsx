import { I18nextProvider, initReactI18next } from "react-i18next";
import { afterEach, describe, expect, test, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";

import { Card } from "@chakra-ui/react";
import { PostHeader } from "../PostHeader";
import { createWrapper } from "../../../utils/createWrapper";
import i18next from "i18next";

describe("PostHeader", () => {
  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  test("Should render", () => {
    render(
      <Card>
        <PostHeader category="" date={new Date()} userName="" jobTitle="" />
      </Card>,
      {
        wrapper: createWrapper(),
      },
    );
    expect(screen.getByRole("img")).toBeTruthy();
  });

  test("Should able to show datee in zh", async () => {
    await i18next.use(initReactI18next).init({
      lng: "zh",
    });

    render(
      <I18nextProvider i18n={i18next}>
        <Card>
          <PostHeader category="" date={new Date()} userName="" jobTitle="" />
        </Card>
      </I18nextProvider>,
      {
        wrapper: createWrapper(),
      },
    );
    // 少於 1 分鐘
    expect(screen.getByText("少於 1 分鐘")).toBeTruthy();
  });

  test("Should able to show datee in en", async () => {
    await i18next.use(initReactI18next).init({
      lng: "en",
    });

    render(
      <I18nextProvider i18n={i18next}>
        <Card>
          <PostHeader category="" date={new Date()} userName="" jobTitle="" />
        </Card>
      </I18nextProvider>,
      {
        wrapper: createWrapper(),
      },
    );
    // less than a minute
    expect(screen.getByText("less than a minute")).toBeTruthy();
  });
});
