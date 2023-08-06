import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["json", "html", "json-summary", "lcov"],
      exclude: ["**/*.stories.tsx", "**/types/**", "**/tests/**"],
      enabled: true,
    },
    setupFiles: [
      "./src/globalSetup/matchMedia.ts",
      "./src/globalSetup/intersectionObserver.ts",
    ],
  },
});
