<template>
  <div class="container">
    <!-- Home -->
    <div v-if="input_value === ''">
      <div class="header">
        <form @submit.prevent>
          <input v-model="input_value" placeholder="Search..." />
          <button class="theme-change" @click="handle_toggle_theme">
            {{ is_dark_theme ? "Dark" : "Light" }}
          </button>
        </form>
      </div>
    </div>

    <!-- Model -->
    <div v-else>
      <div class="header">
        <form @submit.prevent="handle_submit">
          <input v-model="input_value" placeholder="Search..." />
        </form>
      </div>

      <!-- CardView -->
      <div class="cardview-container">
        <Card v-for="res in search_results.media" :key="res.id" :res="res" />
      </div>

      <!-- Loading -->
      <div class="loading-container" v-if="is_loading">
        <img alt="Loading..." :src="require('../assets/Wedges-3s-251px.png')" />
      </div>
    </div>
  </div>
</template>

<script>
import { watch, computed, ref } from "vue";
import { useStore } from "vuex";
import { get_fetch } from "../lib/get_fetch";

import Card from "../components/cardview";

export default {
  setup() {
    // variables
    const store = useStore();
    const is_dark_theme = computed(() => store.state.is_dark_theme);
    const input_value = ref("");
    const is_loading = ref(false);
    const search_results = ref([]);

    // functions
    function handle_toggle_theme() {
      store.commit("toggle_theme");
    }

    async function handle_submit() {
      is_loading.value = true;
      const params = {
        page_number: 1,
      };
      const res = await get_fetch(input_value.value, "SEARCH", params);
      is_loading.value = false;
      search_results.value = res.data.Page;
    }

    // set watchers
    watch(input_value, (newValue, oldValue) => {
      if (newValue === "") {
        search_results.value = [];
        console.log("cleared");
      }
    });

    // return everything
    return {
      is_dark_theme,
      input_value,
      is_loading,
      search_results,
      handle_toggle_theme,
      handle_submit,
      Card,
    };
  },
  created() {
    // set theme attribute
    document
      .getElementById("app")
      .setAttribute("theme", this.is_dark_theme ? "dark" : "light");

    // set focus on the input
    document.addEventListener("keydown", () => {
      document.querySelector("input").focus();
    });
  },
};
</script>

<style>
.container {
  width: 100vw;
  height: 100vh;
}

.cardview-container {
  width: 100%;
  height: 100%;
}

.loading-container {
  display: flex;
  justify-content: center;
}

.loading-container img {
  width: 7%;
}

.header {
  width: 100%;
  height: 5rem;
  background: var(--background-secondary);
}

form {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

input {
  background: var(--background-primary);
  border-style: none;
  height: 50%;
  width: 50%;
  border-radius: 5px;
  color: var(--text-color);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  padding: 0 0 0 1rem;
}

.theme-change {
  height: 50%;
  width: 6rem;
  margin: 0 0 0 1rem;
  background: var(--background-primary);
  color: var(--text-color);
  border-style: solid;
  border-radius: 5px;
  border-color: var(--contrast);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}
</style>
