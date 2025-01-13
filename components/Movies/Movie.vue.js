import { defineProps, defineEmits } from "vue";
import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";
// store
const storeThemeSwitch = useStoreThemeSwitch();
const probs = defineProps();
const emit = defineEmits();
const toggleFavorite = () => {
    emit("toggle-favorite", probs.movie);
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.VCol;
    /** @type { [typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        cols: ("12"),
        lg: ((3)),
        md: ((4)),
        sm: ((6)),
    }));
    const __VLS_2 = __VLS_1({
        cols: ("12"),
        lg: ((3)),
        md: ((4)),
        sm: ((6)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.VCard;
    /** @type { [typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({}));
    const __VLS_9 = __VLS_8({}, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.VCardTitle;
    /** @type { [typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({
        ...{ class: ("subtitle-1 truncate") },
    }));
    const __VLS_15 = __VLS_14({
        ...{ class: ("subtitle-1 truncate") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_14));
    (probs.movie.Title);
    __VLS_18.slots.default;
    var __VLS_18;
    const __VLS_19 = {}.VCardSubtitle;
    /** @type { [typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, typeof __VLS_components.VCardSubtitle, typeof __VLS_components.vCardSubtitle, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({}));
    const __VLS_21 = __VLS_20({}, ...__VLS_functionalComponentArgsRest(__VLS_20));
    (probs.movie.Year);
    __VLS_24.slots.default;
    var __VLS_24;
    const __VLS_25 = {}.VCardText;
    /** @type { [typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ] } */ ;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({}));
    const __VLS_27 = __VLS_26({}, ...__VLS_functionalComponentArgsRest(__VLS_26));
    (probs.movie.imdbID);
    __VLS_30.slots.default;
    var __VLS_30;
    const __VLS_31 = {}.VCardActions;
    /** @type { [typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ] } */ ;
    // @ts-ignore
    const __VLS_32 = __VLS_asFunctionalComponent(__VLS_31, new __VLS_31({}));
    const __VLS_33 = __VLS_32({}, ...__VLS_functionalComponentArgsRest(__VLS_32));
    const __VLS_37 = {}.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */ ;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({
        ...{ 'onClick': {} },
        icon: (true),
        color: ((probs.isStarred === true ? 'yellow' : 'grey')),
    }));
    const __VLS_39 = __VLS_38({
        ...{ 'onClick': {} },
        icon: (true),
        color: ((probs.isStarred === true ? 'yellow' : 'grey')),
    }, ...__VLS_functionalComponentArgsRest(__VLS_38));
    let __VLS_43;
    const __VLS_44 = {
        onClick: (__VLS_ctx.toggleFavorite)
    };
    let __VLS_40;
    let __VLS_41;
    const __VLS_45 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
    const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    (__VLS_ctx.isStarred ? "mdi-star" : "mdi-star-outline");
    __VLS_50.slots.default;
    var __VLS_50;
    __VLS_42.slots.default;
    var __VLS_42;
    __VLS_36.slots.default;
    var __VLS_36;
    __VLS_12.slots.default;
    var __VLS_12;
    __VLS_5.slots.default;
    var __VLS_5;
    ['subtitle-1', 'truncate',];
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
            toggleFavorite: toggleFavorite,
        };
    },
    __typeEmits: {},
    __typeProps: {},
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEmits: {},
    __typeProps: {},
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Movie.vue.js.map