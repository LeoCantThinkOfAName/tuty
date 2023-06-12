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
      provider: "c8",
      reporter: ["json", "html", "json-summary", "lcov"],
      src: ["./src"],
      exclude: ["**/*.stories.tsx", "**/types/**", "**/tests/**"],
      all: true,
      enabled: true,
    },
    setupFiles: ["./src/globalSetup/matchMedia.ts"],
  },
});
