import { useStoreThemeSwitch } from '@/stores/storeThemeSwitch';
// store
const storeThemeSwitch = useStoreThemeSwitch();
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("back-button") },
    });
    const __VLS_0 = {}.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        ...{ 'onClick': {} },
        ...{ class: ("ma-0 mb-5") },
        ...{ class: (([!__VLS_ctx.storeThemeSwitch.darkMode ? 'bg-blue-grey-darken-4' : 'white'])) },
        'aria-label': ("back button"),
    }));
    const __VLS_2 = __VLS_1({
        ...{ 'onClick': {} },
        ...{ class: ("ma-0 mb-5") },
        ...{ class: (([!__VLS_ctx.storeThemeSwitch.darkMode ? 'bg-blue-grey-darken-4' : 'white'])) },
        'aria-label': ("back button"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    let __VLS_6;
    const __VLS_7 = {
        onClick: (...[$event]) => {
            __VLS_ctx.$router.back();
        }
    };
    let __VLS_3;
    let __VLS_4;
    const __VLS_8 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        start: (true),
        icon: ("mdi-arrow-left"),
    }));
    const __VLS_10 = __VLS_9({
        start: (true),
        icon: ("mdi-arrow-left"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    __VLS_5.slots.default;
    var __VLS_5;
    ['back-button', 'ma-0', 'mb-5',];
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
            storeThemeSwitch: storeThemeSwitch,
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
//# sourceMappingURL=BackButton.vue.js.map