import { defineStore } from 'pinia';
export const useStoreThemeSwitch = defineStore('storeThemeSwitch', {
    state: () => ({
        darkMode: true,
    }),
    actions: {
        toggleDarkMode() {
            this.darkMode = !this.darkMode;
        },
        setDarkMode(value) {
            this.darkMode = value;
        },
    },
});
//# sourceMappingURL=storeThemeSwitch.js.map