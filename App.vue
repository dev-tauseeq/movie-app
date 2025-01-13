<template>
  <v-app :dark="false" id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :class="[storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4']"
    >
      <v-divider />

      <v-list class="py-0">
        <div v-for="(item, index) in items" :key="index">
          <v-list-item
            @click="handleClick(index)"
            :value="item"
            :to="item.to"
            active-color="bg-blue-grey-darken-3"
          >
            <template v-slot:prepend>
              <v-icon :icon="item.icon"></v-icon>
            </template>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :class="[storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4']"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <RouterLink
        to="/"
        class="text-decoration-none"
        :class="[storeThemeSwitch.darkMode ? 'text-black' : 'text-white']"
      >
        <v-toolbar-title>Movie Store</v-toolbar-title>
      </RouterLink>

      <v-spacer></v-spacer>

      <v-btn
        icon
        id="mode-switcher"
        aria-label="theme toggle button"
        @click="toggleThemeMode"
      >
        <v-icon>
          {{
            storeThemeSwitch.darkMode
              ? 'mdi-weather-sunny'
              : 'mdi-weather-night'
          }}
        </v-icon>
      </v-btn>
    </v-app-bar>

    <v-main
      :class="[
        storeThemeSwitch.darkMode
          ? 'bg-blue-grey-lighten-5'
          : 'bg-blue-grey-darken-3',
      ]"
    >
      <div class="pa-6">
        <v-scroll-y-transition mode="in" hide-on-leave="true">
          <RouterView :key="$route.path" />
        </v-scroll-y-transition>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
// Imports
import { ref, onMounted } from 'vue';
import { useStoreMovies } from '@/stores/storeMovies';
import { useStoreFavoriteMovies } from '@/stores/storeFavoritesMovies';
import { useStoreThemeSwitch } from '@/stores/storeThemeSwitch';

// Store references
const storeMovies = useStoreMovies();
const storeFavoriteMovies = useStoreFavoriteMovies();
const storeThemeSwitch = useStoreThemeSwitch();

// Drawer state
const drawer = ref<boolean | null>(null);

// Navigation items
interface NavigationItem {
  text: string;
  icon: string;
  to: string;
  click: () => void;
}

const items = ref<NavigationItem[]>([
  {
    text: 'Movies',
    icon: 'mdi-movie-open',
    to: '/',
    click: () => {
      storeMovies.search = '';
      storeMovies.page = 1;
      storeMovies.getMovies();
    },
  },
  {
    text: 'Favorites',
    icon: 'mdi-heart-outline',
    to: '/favorites',
    click() {
      storeFavoriteMovies.search = '';
      storeFavoriteMovies.page = 1;
      storeFavoriteMovies.favorites;
    },
  },
]);

// Methods
const handleClick = (index: number) => {
  items.value[index].click();
};

const toggleThemeMode = () => {
  storeThemeSwitch.darkMode = !storeThemeSwitch.darkMode;
  localStorage.setItem('darkMode', storeThemeSwitch.darkMode.toString());
};

// Lifecycle hook
onMounted(() => {
  storeThemeSwitch.darkMode = localStorage.getItem('darkMode') === 'true';
});
</script>

<style lang="scss">
.v-toolbar-title__placeholder {
  overflow: unset !important;
  text-overflow: unset !important;
}

// Add theme-specific styles
.bg-blue-grey-darken-4 {
  background-color: #37474f !important;
}
.bg-blue-grey-darken-3 {
  background-color: #455a64 !important;
}
.bg-blue-grey-lighten-5 {
  background-color: #eceff1 !important;
}
.text-white {
  color: #ffffff !important;
}
.text-black {
  color: #000000 !important;
}
.text-decoration-none {
  text-decoration: none !important;
}
</style>
