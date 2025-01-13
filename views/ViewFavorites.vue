<template>
  <div class="movies">
    <!-- Search movies -->
    <SearchBar
      :store="storeFavoriteMovies"
      type="favorite"
      label="Search movie..."
    />

    <!-- Movies grid -->
    <v-row class="mt-0">
      <Movie
        v-for="movie in storeFavoriteMovies.getFavorites()"
        :key="movie.imdbID"
        :movie="movie"
        :isStarred="true"
        @toggle-favorite="handleToggleFavorite"
      />

      <!-- If there is no movie found -->
      <div
        v-if="!storeFavoriteMovies.favorites.length"
        class="w-100 text-center text-h5 mt-5"
      >
        <!-- we could translation here -->
        No Favorite movie found...
      </div>
    </v-row>

    <!-- Pagination -->
    <div v-if="storeFavoriteMovies.favorites.length" class="text-center mt-5">
      <Pagination :store="storeFavoriteMovies" type="favorite" />
    </div>
  </div>
</template>

<script lang="ts" setup>
// Imports
import Movie from "@/components/Movies/Movie.vue";
import SearchBar from "@/components/Shared/SearchBar.vue";
import Pagination from "@/components/Shared/Pagination.vue";
import { useStoreFavoriteMovies } from "@/stores/storeFavoritesMovies";
import { MovieType } from "@/composeables/types/movieType";

// Store references
const storeFavoriteMovies = useStoreFavoriteMovies();
console.log("storeFavoriteMovies", storeFavoriteMovies.favorites);

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
