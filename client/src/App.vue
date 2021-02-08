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
    localStorage.setItem("is_dark_theme", JSON.stringify(this.is_dark_theme));
    this.store.commit("toggle_theme");
  },
};
</script>

<style>
@import "./variables.css";
</style>
