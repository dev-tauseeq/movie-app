<template>
  <v-col cols="12" :lg="3" :md="4" :sm="6">
    <v-card>
      <v-card-title class="subtitle-1 truncate">{{
        probs.movie.Title
      }}</v-card-title>
      <v-card-subtitle>{{ probs.movie.Year }}</v-card-subtitle>
      <v-card-text>IMDB ID: {{ probs.movie.imdbID }}</v-card-text>
      <v-card-actions>
        <v-btn
          icon
          :color="probs.isStarred === true ? 'yellow' : 'grey'"
          @click="toggleFavorite"
        >
          <v-icon>{{ isStarred ? "mdi-star" : "mdi-star-outline" }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";
import { MovieType } from "@/composeables/types/movieType";

// store
const storeThemeSwitch = useStoreThemeSwitch();

const probs = defineProps<{
  movie: MovieType;
  isStarred: boolean;
}>();
// console.log("Movie", probs.movie.Title);
const emit = defineEmits<{
  (event: "toggle-favorite", movie: MovieType): void;
}>();
const toggleFavorite = () => {
  emit("toggle-favorite", probs.movie);
};
</script>
