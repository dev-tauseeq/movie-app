import { defineStore } from 'pinia';
export const useStoreLoading = defineStore('storeLoading', {
    state: () => ({
        loading: {
            movies: false,
        },
    }),
    actions: {
        setLoadingMovies(isLoading) {
            this.loading.movies = isLoading;
        },
    },
});
//# sourceMappingURL=storeLoading.js.map