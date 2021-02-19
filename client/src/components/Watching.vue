<template>
  <div>Watching</div>
  <div v-for="(show, index) in shows" :key="index">
    <SearchShowCard :data="show" />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import SearchShowCard from "../components/SearchShowCard";

export default {
  name: "Watching",
  components: { SearchShowCard },
  setup() {
    const shows = ref([]);
    return {
      shows,
    };
  },
  mounted() {
    const ls = JSON.parse(localStorage.getItem("added_shows"));
    this.shows = ls;
  },
};
</script>

<style>
</style>