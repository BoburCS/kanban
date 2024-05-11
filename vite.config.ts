import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@containers": path.resolve(__dirname, "src/components/containers"),
      "@ui": path.resolve(__dirname, "src/components/ui"),
      "@context": path.resolve(__dirname, "src/context"),
      "@features": path.resolve(__dirname, "src/features"),
      "@elements": path.resolve(__dirname, "src/components/elements"),
      "@lib": path.resolve(__dirname, "src/lib"),
      "@app": path.resolve(__dirname, "src/app"),
      "@services": path.resolve(__dirname, "src/services/"),
    },
  },
});
