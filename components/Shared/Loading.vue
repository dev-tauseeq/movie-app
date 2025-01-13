<template>
  <v-progress-circular
    :size="60"
    :width="5"
    :color="progressColor"
    indeterminate
  ></v-progress-circular>
</template>

<script lang="ts" setup>
// imports
import { computed } from "vue";
import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";

// Store
const storeThemeSwitch = useStoreThemeSwitch();

// Computed property for progress circular color
const progressColor = computed(() =>
  storeThemeSwitch.darkMode ? "blue-grey-darken-4" : "white"
);
</script>
