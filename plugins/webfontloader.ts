/**
 * plugins/webfontloader.ts
 *
 * webfontloader documentation: https://github.com/typekit/webfontloader
 */

// Import the webfontloader type
import type { Config } from 'webfontloader';

export async function loadFonts(): Promise<void> {
  const webFontLoader = await import(
    /* webpackChunkName: "webfontloader" */ 'webfontloader'
  );

  const fontConfig: Config = {
    google: {
      families: ['Roboto:100,300,400,500,700,900&display=swap'],
    },
  };

  webFontLoader.load(fontConfig);
}
