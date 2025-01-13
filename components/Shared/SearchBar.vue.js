import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";
// store
const storeThemeSwitch = useStoreThemeSwitch();
// props
const props = defineProps({
    store: {
        type: Object,
        required: true,
    },
    type: {
        type: String,
    },
    label: {
        type: String,
    },
});
const getStoreItems = () => {
    props.store.page = 1;
    if (props.type === "movies") {
        props.store.getMovies();
    }
    else if (props.type === "favorite") {
        debugger;
        props.store.getFavorites();
    }
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.VRow;
    /** @type { [typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ class: ("search-bar mb-4") },
    }));
    const __VLS_2 = __VLS_1({
        ...{ class: ("search-bar mb-4") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        cols: ("12"),
        lg: ("4"),
        md: ("6"),
    }));
    const __VLS_9 = __VLS_8({
        cols: ("12"),
        lg: ("4"),
        md: ("6"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.VTextField;
    /** @type { [typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ 'onKeyup': {} },
        ...{ 'onClick:prependInner': {} },
        ...{ 'onClick:clear': {} },
        modelValue: ((__VLS_ctx.store.search)),
        prependInnerIcon: ("mdi-magnify"),
        label: ((__VLS_ctx.label)),
        variant: ("outlined"),
        clearable: (true),
        hideDetails: (true),
        bgColor: (([
            !__VLS_ctx.storeThemeSwitch.darkMode ? 'blue-grey-darken-4' : 'white',
        ])),
        'aria-label': ("search"),
    }));
    const __VLS_15 = __VLS_14({
        ...{ 'onKeyup': {} },
        ...{ 'onClick:prependInner': {} },
        ...{ 'onClick:clear': {} },
        modelValue: ((__VLS_ctx.store.search)),
        prependInnerIcon: ("mdi-magnify"),
        label: ((__VLS_ctx.label)),
        variant: ("outlined"),
        clearable: (true),
        hideDetails: (true),
        bgColor: (([
            !__VLS_ctx.storeThemeSwitch.darkMode ? 'blue-grey-darken-4' : 'white',
        ])),
        'aria-label': ("search"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    let __VLS_19;
    const __VLS_20 = {
        onKeyup: (__VLS_ctx.getStoreItems)
    };
    const __VLS_21 = {
        'onClick:prependInner': (__VLS_ctx.getStoreItems)
    };
    const __VLS_22 = {
        'onClick:clear': (__VLS_ctx.getStoreItems)
    };
    let __VLS_16;
    let __VLS_17;
    var __VLS_18;
    __VLS_12.slots.default;
    var __VLS_12;
    __VLS_5.slots.default;
    var __VLS_5;
    ['search-bar', 'mb-4',];
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
            $props: __VLS_makeOptional(props),
            ...props,
            storeThemeSwitch: storeThemeSwitch,
            getStoreItems: getStoreItems,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(props),
            ...props,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=SearchBar.vue.js.map