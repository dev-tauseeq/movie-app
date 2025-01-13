import { defineStore } from 'pinia';
export const useStoreFavoriteMovies = defineStore('storeFavoriteMovies', {
    state: () => ({
        favorites: [],
        search: '',
        page: 1,
        totalPages: 0,
    }),
    actions: {
        saveFavorites() {
            try {
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('favorites', JSON.stringify(this.favorites));
                }
            }
            catch (error) {
                console.error('Error saving favorites to localStorage:', error);
            }
        },
        getFavorites() {
            const pageSize = 10; // Number of movies per page
            const startIndex = (this.page - 1) * pageSize;
            const endIndex = startIndex + pageSize;
            // Paginate the favorites array
            if (this.search == "") {
                return this.favorites.slice(startIndex, endIndex);
            }
            const data = this.favorites.filter((movie) => {
                movie.Title?.toLowerCase().includes(this.serach?.toLowercase());
            });
            return data.slice(startIndex, endIndex);
        },
        toggleFavorite(movie) {
            const index = this.favorites.findIndex((m) => m.imdbID === movie.imdbID);
            if (index >= 0) {
                this.favorites.splice(index, 1); // Remove if already in favorites
            }
            else {
                this.favorites.push(movie); // Add if not in favorites
            }
            this.totalPages = this.favorites.length > 0 ? Math.ceil(this.favorites.length / 10) : 0;
            this.saveFavorites(); // Persist changes to localStorage
        },
        loadFavorites() {
            try {
                if (typeof localStorage !== 'undefined') {
                    const storedFavorites = localStorage.getItem('favorites');
                    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
                    this.totalPages = this.favorites.length > 0 ? Math.ceil(this.favorites.length / 10) : 0;
                }
            }
            catch (error) {
                console.error('Error loading favorites from localStorage:', error);
                this.favorites = [];
            }
        },
        changePage() {
            if (this.page < this.totalPages) {
                this.page++;
                this.getFavorites();
            }
        },
    },
});
//# sourceMappingURL=storeFavoritesMovies.js.map