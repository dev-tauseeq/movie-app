<template>
  <v-container class="pagination">
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            @click="changePage"
            v-model="store.page"
            :length="store.totalPages"
            color="bg-blue-grey-darken-4"
            class="my-4"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
  type: string;
  store: {
    getMovies: (page: number) => void;
    getFavorites: (page: number) => void;
    page: number;
    totalPages: number;
  };
}>();
// Create the PAGES mapping
console.log('loading', props.store.totalPages);
const PAGES: Record<string, (page: number) => void> = {
  movies: (page) => props.store.getMovies(page),
  favorite: (page) => props.store.getFavorites(page),
};
// changePage function
const changePage = () => {
  const handler = PAGES[props.type];
  if (handler) {
    handler(props.store.page);
  } else {
    console.error(`Unknown page type: ${props.type}`);
  }
};
</script>
