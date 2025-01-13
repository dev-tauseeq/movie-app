import { computed } from "vue";
import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";
// Store
const storeThemeSwitch = useStoreThemeSwitch();
// Computed property for progress circular color
const progressColor = computed(() => storeThemeSwitch.darkMode ? "blue-grey-darken-4" : "white");
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    const __VLS_0 = {}.VProgressCircular;
    /** @type { [typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, typeof __VLS_components.VProgressCircular, typeof __VLS_components.vProgressCircular, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        size: ((60)),
        width: ((5)),
        color: ((__VLS_ctx.progressColor)),
        indeterminate: (true),
    }));
    const __VLS_2 = __VLS_1({
        size: ((60)),
        width: ((5)),
        color: ((__VLS_ctx.progressColor)),
        indeterminate: (true),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    var __VLS_5;
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
            progressColor: progressColor,
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
//# sourceMappingURL=Loading.vue.js.map