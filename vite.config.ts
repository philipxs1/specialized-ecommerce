import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    proxy: {
      "/config": "http://localhost:5252",
      "/create-payment-intent": "http://localhost:5252",
      "/webhook": "http://localhost:5252",
    },
  },
});
