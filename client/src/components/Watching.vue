<template>
  <div>Watching</div>
  <div v-for="(show, index) in shows" :key="index">
    <SearchCard :data="show" />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import SearchCard from "../components/SearchCard";

export default {
  name: "Watching",
  components: { SearchCard },
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