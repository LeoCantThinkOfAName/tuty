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
    environment: "happy-dom",
    coverage: {
      provider: "istanbul",
      reporter: ["json", "html-spa", "json-summary", "lcov"],
    },
  },
});
