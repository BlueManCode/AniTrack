<template>
  <div class="home-profile-watching-container">
    <div class="home-profile-watching-title">Watching ({{ shows.length }})</div>
    <div v-if="shows.length > 0">
      <div v-for="(show, index) in shows" :key="index">
        <WatchingShowCard :data="show" />
      </div>
    </div>
    <div
      :style="{
        color: 'var(--text-color)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5vmin',
        opacity: '70%',
        fontStyle: 'italic',
      }"
      v-else
    >
      No Shows in this Domain
    </div>
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import WatchingShowCard from "../ShowCards/WatchingShowCard";

export default {
  name: "HomeProfileWatching",
  components: { WatchingShowCard },
  setup() {
    const shows = ref([]);
    return {
      shows,
    };
  },
  mounted() {
    const ls = JSON.parse(localStorage.getItem("added_shows"));
    const arr = [];
    ls.forEach((element, index) => {
      if (element.user_show_data.status === "watching") {
        arr.push(ls[index]);
      }
    });
    this.shows = arr;
  },
};
</script>

<style>
.home-profile-watching-container {
  height: auto;
  margin-bottom: 27vmin;
}
.home-profile-watching-title {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>