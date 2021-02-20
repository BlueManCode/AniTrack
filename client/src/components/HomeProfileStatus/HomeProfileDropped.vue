<template>
  <div class="home-profile-dropped">Dropped</div>
  <div v-for="(show, index) in shows" :key="index">
    <DroppedShowCard
      :data="show"
      v-if="show.user_show_data.status === 'dropped'"
    />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import DroppedShowCard from "../ShowCards/DroppedShowCard";
export default {
  name: "HomeProfileDropped",
  components: { DroppedShowCard },
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
.home-profile-dropped {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>