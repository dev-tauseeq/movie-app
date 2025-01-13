import { defineStore } from 'pinia';

interface LoadingState {
  loading: {
    movies: boolean;
  };
}

export const useStoreLoading = defineStore('storeLoading', {
  state: (): LoadingState => ({
    loading: {
      movies: false,
    },
  }),
  actions: {
    setLoadingMovies(isLoading: boolean) {
      this.loading.movies = isLoading;
    },
  },
});
