<template>
  <div class="movies">
    <!-- Search movies -->
    <SearchBar :store="storeMovies" type="movies" label="Search movie..." />

    <!-- Movies grid -->
    <v-row class="mt-0">
      <div v-if="!storeLoading.loading.movies" class="mt-10 w-100 text-center">
        <Loading />
      </div>
      <template v-else>
        <Movie
          v-for="movie in storeMovies.movies"
          :key="movie.imdbID"
          :movie="movie"
          :isStarred="isFavorite(movie)"
          @toggle-favorite="handleToggleFavorite"
        />

        <!-- If there is no movie found -->
        <div
          v-if="!storeMovies.movies.length"
          class="w-100 text-center text-h5 mt-5"
        >
          No movie found...
        </div>
      </template>
    </v-row>

    <!-- Pagination -->
    <div v-if="storeMovies.movies.length" class="text-center mt-5">
      <Pagination :store="storeMovies" type="movies" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Imports
import { onMounted, computed } from "vue";
import Movie from "@/components/Movies/Movie.vue";
import Loading from "@/components/Shared/Loading.vue";
import SearchBar from "@/components/Shared/SearchBar.vue";
import Pagination from "@/components/Shared/Pagination.vue";
import { useStoreMovies } from "@/stores/storeMovies";
import { useStoreFavoriteMovies } from "@/stores/storeFavoritesMovies";
import { useStoreLoading } from "@/stores/storeLoading";
import { MovieType } from "@/composeables/types/movieType";

// Store references
const storeMovies = useStoreMovies();
const storeLoading = useStoreLoading();
const storeFavoriteMovies = useStoreFavoriteMovies();

// Lifecycle hook
onMounted(() => {
  storeMovies.getMovies(storeMovies.page);
});
const isFavorite = (movie: MovieType) => {
  return storeFavoriteMovies.favorites.some(
    (fav) => fav.imdbID === movie.imdbID,
  );
};
const handleToggleFavorite = (movie: MovieType) => {
  storeFavoriteMovies.toggleFavorite(movie);
};
</script>

<style scoped>
.truncate {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
</style>
