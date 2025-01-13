import { defineProps } from 'vue';
const props = defineProps();
// Create the PAGES mapping
console.log('loading', props.store.totalPages);
const PAGES = {
    movies: (page) => props.store.getMovies(page),
    favorite: (page) => props.store.getFavorites(page),
};
// changePage function
const changePage = () => {
    const handler = PAGES[props.type];
    if (handler) {
        handler(props.store.page);
    }
    else {
        console.error(`Unknown page type: ${props.type}`);
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("pagination") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("pagination") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        justify: ("center"),
    }));
    const __VLS_9 = __VLS_8({
        justify: ("center"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        cols: ("8"),
    }));
    const __VLS_15 = __VLS_14({
        cols: ("8"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = {}.VContainer;
    /** @type { [typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
        ...{ class: ("max-width") },
    }));
    const __VLS_21 = __VLS_20({
        ...{ class: ("max-width") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    const __VLS_25 = {}.VPagination;
    /** @type { [typeof __VLS_components.VPagination, typeof __VLS_components.vPagination, typeof __VLS_components.VPagination, typeof __VLS_components.vPagination, ] } */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
        ...{ 'onClick': {} },
        modelValue: ((__VLS_ctx.store.page)),
        length: ((__VLS_ctx.store.totalPages)),
        color: ("bg-blue-grey-darken-4"),
        ...{ class: ("my-4") },
    }));
    const __VLS_27 = __VLS_26({
        ...{ 'onClick': {} },
        modelValue: ((__VLS_ctx.store.page)),
        length: ((__VLS_ctx.store.totalPages)),
        color: ("bg-blue-grey-darken-4"),
        ...{ class: ("my-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    let __VLS_31;
    const __VLS_32 = {
        onClick: (__VLS_ctx.changePage)
    };
    let __VLS_28;
    let __VLS_29;
    var __VLS_30;
    __VLS_24.slots.default;
    var __VLS_24;
    __VLS_18.slots.default;
    var __VLS_18;
    __VLS_12.slots.default;
    var __VLS_12;
    __VLS_5.slots.default;
    var __VLS_5;
    ['pagination', 'max-width', 'my-4',];
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
            changePage: changePage,
        };
    },
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Pagination.vue.js.map