<template>
  <div class="interaction-search-container">
    <form @submit.prevent="handle_fetch">
      <label>Search</label>
      <input v-model="search_term" class="input-bar" />
    </form>
    <button @click="handle_interaction_toggle">Profile</button>
  </div>
  <div class="label-search" v-if="search_results.length !== 0">
    Search Results
  </div>
  <div class="card-container" v-for="show in search_results" :key="show.id">
    <MyShowCard :type="'SEARCH'" :data="show" />
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useStore } from "vuex";

import fetch_api from "../lib/fetch_api";

import MyShowCard from "../components/MyShowCard";

export default {
  name: "InteractionSearch",
  components: { MyShowCard },
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
      console.log(search_results._rawValue);
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

<style scoped>
.interaction-search-container {
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
  font-size: larger;
  font-weight: bolder;
  opacity: 70%;
  margin-top: 2vmin;
}

input {
  width: 100%;
  height: 7vmin;
  padding-left: 2vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: "Overpass", sans-serif;
  font-weight: bold;
  font-size: medium;
}

button {
  width: 25%;
  height: 7vmin;
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

.card-container {
  width: 100%;
}

.label-search {
  font-size: xx-large;
  font-weight: bolder;
  font-family: "Overpass", sans-serif;
  letter-spacing: 0.2vmin;
  opacity: 90%;
  margin-top: 6vmin;
}
</style>