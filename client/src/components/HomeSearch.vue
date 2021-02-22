<template>
  <div class="home-search-container">
    <form @submit.prevent="handle_fetch">
      <label>Search</label>
      <input v-model="search_term" class="input-bar" />
    </form>
    <button @click="handle_interaction_toggle">Profile</button>
  </div>
  <div class="home-search-input-label" v-if="search_results.length !== 0">
    Search Results
  </div>
  <div
    class="home-search-results-container"
    v-for="show in search_results"
    :key="show.id"
  >
    <div v-if="show.title.english || show.title.romaji">
      <SearchShowCard :data="show" />
    </div>
  </div>
</template>

<script>
// vue functions
import { ref, watch } from "vue";
import { useStore } from "vuex";

// custom functions
import fetch_api from "../lib/fetch_api";

// components
import SearchShowCard from "../components/ShowCards/SearchShowCard";

export default {
  name: "HomeSearch",
  components: { SearchShowCard },
  setup() {
    const search_term = ref("");
    const search_results = ref([]);
    const store = useStore();

    function handle_interaction_toggle() {
      store.commit("toggle_profile");
    }

    async function handle_fetch() {
      const data = await fetch_api("SEARCH", {
        search_term: search_term.value,
      });
      search_results.value = data.data.Page.media;
    }

    watch(search_term, (new_value) => {
      if (new_value === "") {
        search_results.value = [];
      }
    });

    return {
      search_term,
      search_results,
      handle_interaction_toggle,
      handle_fetch,
    };
  },
};
</script>

<style>
.home-search-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
}

form {
  width: 60%;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
}

label {
  font-size: 2vmin;
  font-weight: bolder;
  opacity: 0.7;
  margin-top: 2vmin;
}

input {
  width: 100%;
  height: 6vmin;
  padding-left: 2vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: "Overpass", sans-serif;
  font-weight: bold;
  font-size: 2.3vmin;
}

input:focus {
  outline: none;
}

button {
  width: 25%;
  height: 6vmin;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border-style: none;
  background: var(--yellow-primary);
  color: white;
  font-size: larger;
  font-weight: bolder;
  font-family: "Overpass", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}

button svg {
  padding: 0;
  margin: 0;
}

.home-search-results-container {
  width: 100%;
}

.home-search-input-label {
  font-size: xx-large;
  font-weight: bolder;
  font-family: "Overpass", sans-serif;
  letter-spacing: 0.2vmin;
  opacity: 0.9;
  margin-top: 6vmin;
  color: var(--text-color);
}
</style>