// Components
import App from './App.vue';
import router from '@/router';

// Composables
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useStoreFavoriteMovies } from "@/stores/storeFavoritesMovies";

// Plugins
import { registerPlugins } from '@/plugins';

// Create Vue application
const app = createApp(App);

// Create Pinia instance
const pinia = createPinia();

// Register plugins and use Vue Router
registerPlugins(app);
app.use(pinia).use(router).mount('#app');

// Load favorites from localStorage after store initialization
const storeFavoriteMovies = useStoreFavoriteMovies();
storeFavoriteMovies.loadFavorites();
