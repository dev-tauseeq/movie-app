/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com
 */

// Styles
import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

// Composables
import { createVuetify } from 'vuetify';
import { ThemeDefinition } from 'vuetify';

// Define the light theme
const lightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    primary: '#1867C0',
    secondary: '#5CBBF6',
  },
};

// Create and export the Vuetify instance
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: lightTheme,
    },
  },
});
