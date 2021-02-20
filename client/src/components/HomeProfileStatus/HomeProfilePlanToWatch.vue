<template>
  <div class="home-profile-plan-to-watch">Plan to Watch</div>
  <div v-for="(show, index) in shows" :key="index">
    <PlanToWatchShowCard
      :data="show"
      v-if="show.user_show_data.status === 'plan to watch'"
    />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import PlanToWatchShowCard from "../ShowCards/PlanToWatchShowCard";
export default {
  name: "HomeProfilePlanToWatch",
  components: { PlanToWatchShowCard },
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
.home-profile-plan-to-watch {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>