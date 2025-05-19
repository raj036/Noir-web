import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    allowedHosts: ['ba75-2405-201-37-21d9-e0cc-89c9-4380-8fcd.ngrok-free.app']
  }
});


