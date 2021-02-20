<template>
  <div class="home-profile-completed">Completed</div>
  <div v-for="(show, index) in shows" :key="index">
    <CompletedShowCard
      :data="show"
      v-if="show.user_show_data.status === 'completed'"
    />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import CompletedShowCard from "../ShowCards/CompletedShowCard";
export default {
  name: "HomeProfileCompleted",
  components: { CompletedShowCard },
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
.home-profile-completed {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>