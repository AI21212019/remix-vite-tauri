
import { defineConfig, presetWebFonts, presetUno, presetAttributify } from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Roboto",
      },
    }),
  ],
});
