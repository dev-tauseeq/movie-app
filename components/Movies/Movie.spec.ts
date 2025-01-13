import { mount } from "@vue/test-utils";
import { describe, it, expect, vi } from "vitest";
import { setActivePinia, createPinia } from 'pinia';
import Movie from "@/components/Movies/Movie.vue";
// import { useStoreThemeSwitch } from "@/stores/storeThemeSwitch";
setActivePinia(createPinia())
describe("Movie.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia()); // Activate Pinia before each test
  });

  const movie = {
    Title: "Inception",
    Year: "2010",
    imdbID: "tt1375666",
  };

  it("renders movie details correctly", () => {
    const wrapper = mount(Movie, {
      props: {
        movie,
        isStarred: false,
      },
    });

    // Check for Title, Year, and IMDB ID
    expect(wrapper.text()).toContain(movie.Title);
    expect(wrapper.text()).toContain(movie.Year);
    expect(wrapper.text()).toContain(movie.imdbID);
  });

  it("shows the correct button color when starred", () => {
    const wrapper = mount(Movie, {
      props: {
        movie,
        isStarred: true,
      },
    });

    // Check button color
    const button = wrapper.find("button");
    expect(button.attributes("color")).toBe("yellow");
  });

  it("shows the correct button color when not starred", () => {
    const wrapper = mount(Movie, {
      props: {
        movie,
        isStarred: false,
      },
    });

    // Check button color
    const button = wrapper.find("button");
    expect(button.attributes("color")).toBe("grey");
  });

  it("emits toggle-favorite event when button is clicked", async () => {
    const wrapper = mount(Movie, {
      props: {
        movie,
        isStarred: false,
      },
    });

    // Trigger button click
    await wrapper.find("button").trigger("click");

    // Check that the event is emitted with the correct payload
    expect(wrapper.emitted("toggle-favorite")).toHaveLength(1);
    expect(wrapper.emitted("toggle-favorite")?.[0]).toEqual([movie]);
  });

  it("renders the correct icon based on isStarred", () => {
    const wrapperStarred = mount(Movie, {
      props: {
        movie,
        isStarred: true,
      },
    });

    const wrapperNotStarred = mount(Movie, {
      props: {
        movie,
        isStarred: false,
      },
    });

    // Check icon for starred
    expect(wrapperStarred.find("v-icon").text()).toBe("mdi-star");

    // Check icon for not starred
    expect(wrapperNotStarred.find("v-icon").text()).toBe("mdi-star-outline");
  });
});
