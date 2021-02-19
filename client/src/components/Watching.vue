<template>
  <div>Watching</div>
  <div v-for="(show, index) in shows" :key="index">
    <MyShowCard :data="show" />
  </div>
</template>

<script>
import { ref } from "vue";

import MyShowCard from "../components/MyShowCard";

export default {
  name: "Watching",
  components: { MyShowCard },
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