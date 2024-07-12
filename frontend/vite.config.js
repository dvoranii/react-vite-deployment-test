import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": "/src/Hooks",
      "@utils": "/src/Utils",
      "@reusable": "/src/Components/Reusable",
    },
  },
});
