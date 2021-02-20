<template>
  <div class="home-profile-on-hold">On Hold</div>
  <div v-for="(show, index) in shows" :key="index">
    <OnHoldShowCard
      :data="show"
      v-if="show.user_show_data.status === 'on hold'"
    />
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import OnHoldShowCard from "../ShowCards/OnHoldShowCard";

export default {
  name: "HomeProfileOnHold",
  components: { OnHoldShowCard },
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
.home-profile-on-hold {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 80%;
}
</style>