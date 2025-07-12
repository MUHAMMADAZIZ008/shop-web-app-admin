import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()  ],
  server: {
    cors: false,
    host: true, // Tashqi hostlardan kirishga ruxsat (masalan, ngrok)
    allowedHosts: true, // Hamma hostlarga ruxsat berish
  },
});
