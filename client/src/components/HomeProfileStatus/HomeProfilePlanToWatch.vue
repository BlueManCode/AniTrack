<template>
  <div class="home-profile-plan-to-watch-container">
    <div class="home-profile-plan-to-watch-title">
      Plan To Watch ({{ shows.length }})
    </div>
    <div v-if="shows.length > 0">
      <div v-for="(show, index) in shows" :key="index">
        <PlanToWatchShowCard :data="show" />
      </div>
    </div>
    <div
      v-else
      :style="{
        color: 'var(--text-color)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5vmin',
        opacity: '70%',
        fontStyle: 'italic',
      }"
    >
      No Shows in this Domain
    </div>
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import PlanToWatchShowCard from "../ShowCards/PlanToWatchShowCard";

export default {
  name: "HomeProfileWatching",
  components: { PlanToWatchShowCard },
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
      if (element.user_show_data.status === "plan to watch") {
        arr.push(ls[index]);
      }
    });
    this.shows = arr;
  },
};
</script>

<style>
.home-profile-plan-to-watch-container {
  height: auto;
  margin-bottom: 27vmin;
}
.home-profile-plan-to-watch-title {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>