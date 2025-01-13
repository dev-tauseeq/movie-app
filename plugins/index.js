/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */
import { loadFonts } from './webfontloader';
import vuetify from './vuetify';
export function registerPlugins(app) {
    loadFonts();
    app.use(vuetify);
}
//# sourceMappingURL=index.js.map