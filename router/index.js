import { createRouter, createWebHistory } from 'vue-router';
import ViewMovies from '@/views/ViewMovies.vue';
import ViewFavorites from '@/views/ViewFavorites.vue';
import ViewPageNotFound from '@/views/ViewPageNotFound.vue';
// Define routes with proper type annotation
const routes = [
    {
        path: '/',
        name: 'movies',
        component: ViewMovies,
    },
    {
        path: "/favorites",
        name: "Favorites",
        component: ViewFavorites,
    },
    {
        path: '/:catchAll(.*)', // Catch-all route for 404
        name: 'page-not-found',
        component: ViewPageNotFound,
    },
];
// Create and configure the router
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
//# sourceMappingURL=index.js.map