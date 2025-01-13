import { defineStore } from 'pinia';

interface ThemeSwitchState {
  darkMode: boolean;
}

export const useStoreThemeSwitch = defineStore('storeThemeSwitch', {
  state: (): ThemeSwitchState => ({
    darkMode: true,
  }),
  actions: {
    toggleDarkMode(): void {
      this.darkMode = !this.darkMode;
    },
    setDarkMode(value: boolean): void {
      this.darkMode = value;
    },
  },
});
