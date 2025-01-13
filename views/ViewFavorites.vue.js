import Movie from "@/components/Movies/Movie.vue";
import SearchBar from "@/components/Shared/SearchBar.vue";
import Pagination from "@/components/Shared/Pagination.vue";
import { useStoreFavoriteMovies } from "@/stores/storeFavoritesMovies";
// Store references
const storeFavoriteMovies = useStoreFavoriteMovies();
console.log("storeFavoriteMovies", storeFavoriteMovies.favorites);
const handleToggleFavorite = (movie) => {
    storeFavoriteMovies.toggleFavorite(movie);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("movies") },
    });
    // @ts-ignore
    /** @type { [typeof SearchBar, ] } */ ;
    // @ts-ignore
    const __VLS_0 = __VLS_asFunctionalComponent(SearchBar, new SearchBar({
        store: ((__VLS_ctx.storeFavoriteMovies)),
        type: ("favorite"),
        label: ("Search movie..."),
    }));
    const __VLS_1 = __VLS_0({
        store: ((__VLS_ctx.storeFavoriteMovies)),
        type: ("favorite"),
        label: ("Search movie..."),
    }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    const __VLS_5 = {}.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */ ;
    // @ts-ignore
    const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
        ...{ class: ("mt-0") },
    }));
    const __VLS_7 = __VLS_6({
        ...{ class: ("mt-0") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    for (const [movie] of __VLS_getVForSourceType((__VLS_ctx.storeFavoriteMovies.getFavorites()))) {
        // @ts-ignore
        /** @type { [typeof Movie, ] } */ ;
        // @ts-ignore
        const __VLS_11 = __VLS_asFunctionalComponent(Movie, new Movie({
            ...{ 'onToggleFavorite': {} },
            key: ((movie.imdbID)),
            movie: ((movie)),
            isStarred: ((true)),
        }));
        const __VLS_12 = __VLS_11({
            ...{ 'onToggleFavorite': {} },
            key: ((movie.imdbID)),
            movie: ((movie)),
            isStarred: ((true)),
        }, ...__VLS_functionalComponentArgsRest(__VLS_11));
        let __VLS_16;
        const __VLS_17 = {
            onToggleFavorite: (__VLS_ctx.handleToggleFavorite)
        };
        let __VLS_13;
        let __VLS_14;
        var __VLS_15;
    }
    if (!__VLS_ctx.storeFavoriteMovies.favorites.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("w-100 text-center text-h5 mt-5") },
        });
    }
    __VLS_10.slots.default;
    var __VLS_10;
    if (__VLS_ctx.storeFavoriteMovies.favorites.length) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: ("text-center mt-5") },
        });
        // @ts-ignore
        /** @type { [typeof Pagination, ] } */ ;
        // @ts-ignore
        const __VLS_18 = __VLS_asFunctionalComponent(Pagination, new Pagination({
            store: ((__VLS_ctx.storeFavoriteMovies)),
            type: ("favorite"),
        }));
        const __VLS_19 = __VLS_18({
            store: ((__VLS_ctx.storeFavoriteMovies)),
            type: ("favorite"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_18));
    }
    ['movies', 'mt-0', 'w-100', 'text-center', 'text-h5', 'mt-5', 'text-center', 'mt-5',];
    var __VLS_slots;
    var $slots;
    let __VLS_inheritedAttrs;
    var $attrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Movie: Movie,
            SearchBar: SearchBar,
            Pagination: Pagination,
            storeFavoriteMovies: storeFavoriteMovies,
            handleToggleFavorite: handleToggleFavorite,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=ViewFavorites.vue.js.map