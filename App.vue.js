import { ref, onMounted } from 'vue';
import { useStoreMovies } from '@/stores/storeMovies';
import { useStoreFavoriteMovies } from '@/stores/storeFavoritesMovies';
import { useStoreThemeSwitch } from '@/stores/storeThemeSwitch';
// Store references
const storeMovies = useStoreMovies();
const storeFavoriteMovies = useStoreFavoriteMovies();
const storeThemeSwitch = useStoreThemeSwitch();
// Drawer state
const drawer = ref(null);
const items = ref([
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
const handleClick = (index) => {
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
; /* PartiallyEnd: #3632/scriptSetup.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    let __VLS_components;
    let __VLS_directives;
    // CSS variable injection 
    // CSS variable injection end 
    const __VLS_0 = {}.VApp;
    /** @type { [typeof __VLS_components.VApp, typeof __VLS_components.vApp, typeof __VLS_components.VApp, typeof __VLS_components.vApp, ] } */ ;
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
        dark: ((false)),
        id: ("inspire"),
    }));
    const __VLS_2 = __VLS_1({
        dark: ((false)),
        id: ("inspire"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    var __VLS_6 = {};
    const __VLS_7 = {}.VNavigationDrawer;
    /** @type { [typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, typeof __VLS_components.VNavigationDrawer, typeof __VLS_components.vNavigationDrawer, ] } */ ;
    // @ts-ignore
    const __VLS_8 = __VLS_asFunctionalComponent(__VLS_7, new __VLS_7({
        modelValue: ((__VLS_ctx.drawer)),
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4'])) },
    }));
    const __VLS_9 = __VLS_8({
        modelValue: ((__VLS_ctx.drawer)),
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4'])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_8));
    const __VLS_13 = {}.VDivider;
    /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */ ;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const __VLS_19 = {}.VList;
    /** @type { [typeof __VLS_components.VList, typeof __VLS_components.vList, typeof __VLS_components.VList, typeof __VLS_components.vList, ] } */ ;
    // @ts-ignore
    const __VLS_20 = __VLS_asFunctionalComponent(__VLS_19, new __VLS_19({
        ...{ class: ("py-0") },
    }));
    const __VLS_21 = __VLS_20({
        ...{ class: ("py-0") },
    }, ...__VLS_functionalComponentArgsRest(__VLS_20));
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.items))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            key: ((index)),
        });
        const __VLS_25 = {}.VListItem;
        /** @type { [typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, typeof __VLS_components.VListItem, typeof __VLS_components.vListItem, ] } */ ;
        // @ts-ignore
        const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
            ...{ 'onClick': {} },
            value: ((item)),
            to: ((item.to)),
            activeColor: ("bg-blue-grey-darken-3"),
        }));
        const __VLS_27 = __VLS_26({
            ...{ 'onClick': {} },
            value: ((item)),
            to: ((item.to)),
            activeColor: ("bg-blue-grey-darken-3"),
        }, ...__VLS_functionalComponentArgsRest(__VLS_26));
        let __VLS_31;
        const __VLS_32 = {
            onClick: (...[$event]) => {
                __VLS_ctx.handleClick(index);
            }
        };
        let __VLS_28;
        let __VLS_29;
        __VLS_elementAsFunction(__VLS_intrinsicElements.template, __VLS_intrinsicElements.template)({});
        {
            const { prepend: __VLS_thisSlot } = __VLS_30.slots;
            const __VLS_33 = {}.VIcon;
            /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
            // @ts-ignore
            const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
                icon: ((item.icon)),
            }));
            const __VLS_35 = __VLS_34({
                icon: ((item.icon)),
            }, ...__VLS_functionalComponentArgsRest(__VLS_34));
        }
        const __VLS_39 = {}.VListItemTitle;
        /** @type { [typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, typeof __VLS_components.VListItemTitle, typeof __VLS_components.vListItemTitle, ] } */ ;
        // @ts-ignore
        const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({}));
        const __VLS_41 = __VLS_40({}, ...__VLS_functionalComponentArgsRest(__VLS_40));
        __VLS_asFunctionalDirective(__VLS_directives.vText)(null, { ...__VLS_directiveBindingRestFields, value: (item.text) }, null, null);
        var __VLS_30;
        const __VLS_45 = {}.VDivider;
        /** @type { [typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, typeof __VLS_components.VDivider, typeof __VLS_components.vDivider, ] } */ ;
        // @ts-ignore
        const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
        const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
    }
    __VLS_24.slots.default;
    var __VLS_24;
    __VLS_12.slots.default;
    var __VLS_12;
    const __VLS_51 = {}.VAppBar;
    /** @type { [typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, typeof __VLS_components.VAppBar, typeof __VLS_components.vAppBar, ] } */ ;
    // @ts-ignore
    const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4'])) },
    }));
    const __VLS_53 = __VLS_52({
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'white' : 'bg-blue-grey-darken-4'])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_52));
    const __VLS_57 = {}.VAppBarNavIcon;
    /** @type { [typeof __VLS_components.VAppBarNavIcon, typeof __VLS_components.vAppBarNavIcon, typeof __VLS_components.VAppBarNavIcon, typeof __VLS_components.vAppBarNavIcon, ] } */ ;
    // @ts-ignore
    const __VLS_58 = __VLS_asFunctionalComponent(__VLS_57, new __VLS_57({
        ...{ 'onClick': {} },
    }));
    const __VLS_59 = __VLS_58({
        ...{ 'onClick': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_58));
    let __VLS_63;
    const __VLS_64 = {
        onClick: (...[$event]) => {
            __VLS_ctx.drawer = !__VLS_ctx.drawer;
        }
    };
    let __VLS_60;
    let __VLS_61;
    var __VLS_62;
    const __VLS_65 = {}.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.RouterLink, ] } */ ;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        to: ("/"),
        ...{ class: ("text-decoration-none") },
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'text-black' : 'text-white'])) },
    }));
    const __VLS_67 = __VLS_66({
        to: ("/"),
        ...{ class: ("text-decoration-none") },
        ...{ class: (([__VLS_ctx.storeThemeSwitch.darkMode ? 'text-black' : 'text-white'])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    const __VLS_71 = {}.VToolbarTitle;
    /** @type { [typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, typeof __VLS_components.VToolbarTitle, typeof __VLS_components.vToolbarTitle, ] } */ ;
    // @ts-ignore
    const __VLS_72 = __VLS_asFunctionalComponent(__VLS_71, new __VLS_71({}));
    const __VLS_73 = __VLS_72({}, ...__VLS_functionalComponentArgsRest(__VLS_72));
    __VLS_76.slots.default;
    var __VLS_76;
    __VLS_70.slots.default;
    var __VLS_70;
    const __VLS_77 = {}.VSpacer;
    /** @type { [typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ] } */ ;
    // @ts-ignore
    const __VLS_78 = __VLS_asFunctionalComponent(__VLS_77, new __VLS_77({}));
    const __VLS_79 = __VLS_78({}, ...__VLS_functionalComponentArgsRest(__VLS_78));
    const __VLS_83 = {}.VBtn;
    /** @type { [typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ] } */ ;
    // @ts-ignore
    const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({
        ...{ 'onClick': {} },
        icon: (true),
        id: ("mode-switcher"),
        'aria-label': ("theme toggle button"),
    }));
    const __VLS_85 = __VLS_84({
        ...{ 'onClick': {} },
        icon: (true),
        id: ("mode-switcher"),
        'aria-label': ("theme toggle button"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_84));
    let __VLS_89;
    const __VLS_90 = {
        onClick: (__VLS_ctx.toggleThemeMode)
    };
    let __VLS_86;
    let __VLS_87;
    const __VLS_91 = {}.VIcon;
    /** @type { [typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ] } */ ;
    // @ts-ignore
    const __VLS_92 = __VLS_asFunctionalComponent(__VLS_91, new __VLS_91({}));
    const __VLS_93 = __VLS_92({}, ...__VLS_functionalComponentArgsRest(__VLS_92));
    (__VLS_ctx.storeThemeSwitch.darkMode
        ? 'mdi-weather-sunny'
        : 'mdi-weather-night');
    __VLS_96.slots.default;
    var __VLS_96;
    __VLS_88.slots.default;
    var __VLS_88;
    __VLS_56.slots.default;
    var __VLS_56;
    const __VLS_97 = {}.VMain;
    /** @type { [typeof __VLS_components.VMain, typeof __VLS_components.vMain, typeof __VLS_components.VMain, typeof __VLS_components.vMain, ] } */ ;
    // @ts-ignore
    const __VLS_98 = __VLS_asFunctionalComponent(__VLS_97, new __VLS_97({
        ...{ class: (([
                __VLS_ctx.storeThemeSwitch.darkMode
                    ? 'bg-blue-grey-lighten-5'
                    : 'bg-blue-grey-darken-3',
            ])) },
    }));
    const __VLS_99 = __VLS_98({
        ...{ class: (([
                __VLS_ctx.storeThemeSwitch.darkMode
                    ? 'bg-blue-grey-lighten-5'
                    : 'bg-blue-grey-darken-3',
            ])) },
    }, ...__VLS_functionalComponentArgsRest(__VLS_98));
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: ("pa-6") },
    });
    const __VLS_103 = {}.VScrollYTransition;
    /** @type { [typeof __VLS_components.VScrollYTransition, typeof __VLS_components.vScrollYTransition, typeof __VLS_components.VScrollYTransition, typeof __VLS_components.vScrollYTransition, ] } */ ;
    // @ts-ignore
    const __VLS_104 = __VLS_asFunctionalComponent(__VLS_103, new __VLS_103({
        mode: ("in"),
        hideOnLeave: ("true"),
    }));
    const __VLS_105 = __VLS_104({
        mode: ("in"),
        hideOnLeave: ("true"),
    }, ...__VLS_functionalComponentArgsRest(__VLS_104));
    const __VLS_109 = {}.RouterView;
    /** @type { [typeof __VLS_components.RouterView, ] } */ ;
    // @ts-ignore
    const __VLS_110 = __VLS_asFunctionalComponent(__VLS_109, new __VLS_109({
        key: ((__VLS_ctx.$route.path)),
    }));
    const __VLS_111 = __VLS_110({
        key: ((__VLS_ctx.$route.path)),
    }, ...__VLS_functionalComponentArgsRest(__VLS_110));
    __VLS_108.slots.default;
    var __VLS_108;
    __VLS_102.slots.default;
    var __VLS_102;
    __VLS_5.slots.default;
    var __VLS_5;
    ['py-0', 'text-decoration-none', 'pa-6',];
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
            drawer: drawer,
            items: items,
            handleClick: handleClick,
            toggleThemeMode: toggleThemeMode,
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
//# sourceMappingURL=App.vue.js.map