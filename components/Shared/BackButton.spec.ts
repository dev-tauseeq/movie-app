import { mount } from '@vue/test-utils';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { setActivePinia, createPinia } from 'pinia';
import { useStoreThemeSwitch } from '@/stores/storeThemeSwitch';
import BackButton from '@/components/Shared/BackButton.vue';

describe('BackButton.vue', () => {
  let mockRouter: { back: () => void };

  beforeEach(() => {
    // Set up Pinia and activate it
    setActivePinia(createPinia());

    // Mock Vue Router's `$router`
    mockRouter = {
      back: vi.fn(),
    };
  });

  it('renders the back button with correct text', () => {
    const wrapper = mount(BackButton, {
      global: {
        mocks: {
          $router: mockRouter, // Provide the mocked router
        },
      },
    });

    // Check if the button text is "Back"
    expect(wrapper.text()).toContain('Back');

    // Check if the icon is rendered with the correct value
    const icon = wrapper.find('v-icon');
    expect(icon.exists()).toBe(true);
    expect(icon.attributes('icon')).toBe('mdi-arrow-left');
  });

  it('applies the correct class based on darkMode', () => {
    const storeThemeSwitch = useStoreThemeSwitch();
    storeThemeSwitch.darkMode = true; // Set darkMode to true

    const wrapper = mount(BackButton, {
      global: {
        mocks: { $router: mockRouter },
      },
    });

    // Check if the button has the "white" class in dark mode
    const button = wrapper.find('button');
    expect(button.classes()).toContain('white');

    // Change darkMode to false and re-test
    storeThemeSwitch.darkMode = false;

    const wrapperLightMode = mount(BackButton, {
      global: {
        mocks: { $router: mockRouter },
      },
    });

    // Check if the button has the "bg-blue-grey-darken-4" class in light mode
    const buttonLightMode = wrapperLightMode.find('button');
    expect(buttonLightMode.classes()).toContain('bg-blue-grey-darken-4');
  });

  it('calls $router.back when button is clicked', async () => {
    const wrapper = mount(BackButton, {
      global: {
        mocks: {
          $router: mockRouter, // Provide the mocked router
        },
      },
    });

    const button = wrapper.find('button');
    await button.trigger('click');

    // Check if `$router.back()` is called
    expect(mockRouter.back).toHaveBeenCalled();
  });
});
