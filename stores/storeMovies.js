import { defineStore } from 'pinia';
import { useStoreLoading } from '@/stores/storeLoading';
// We could use .env to store the URL
const VITE_API_URL = 'https://jsonmock.hackerrank.com/api/movies';
export const useStoreMovies = defineStore('storeMovies', {
    state: () => ({
        movies: [],
        search: '',
        page: 1,
        totalPages: 0,
    }),
    actions: {
        async getMovies(page = 1) {
            const storeLoading = useStoreLoading(); // Dynamically retrieve the loading store
            storeLoading.loading.movies = false; // Set loading to false before fetching
            this.movies = []; // Clear the movies array
            // Build the API URL based on the search query
            let url = `${VITE_API_URL}?page=${page}`;
            if (this.search) {
                url = `${VITE_API_URL}/search/?Title=${this.search}&page=${page}`;
            }
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.movies = data.data;
                this.totalPages = data.total_pages;
                storeLoading.loading.movies = true; // Set loading to true after fetching
            }
            catch (error) {
                console.error('Error fetching movies:', error);
            }
        },
        changePage() {
            if (this.page < this.totalPages) {
                this.page++;
                this.getMovies(this.page);
            }
        },
    },
});
//# sourceMappingURL=storeMovies.js.map