<template>
  <router-view />
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const is_dark_theme = computed(() => store.state.is_dark_theme);

    return {
      is_dark_theme,
      store,
    };
  },
  created() {
    // check for theme
    localStorage.setItem("is_dark_theme", JSON.stringify(this.is_dark_theme));
    this.store.commit("toggle_theme");

    if (!localStorage.getItem("added_shows")) {
      localStorage.setItem("added_shows", JSON.stringify([]));
    }
  },
};
</script>

<style>
@import "./variables.css";
</style>
