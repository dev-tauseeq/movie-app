/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import { App } from 'vue'; // Import the App type from Vue
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';

export function registerPlugins(app: App): void {
  loadFonts();
  app.use(vuetify);
}
