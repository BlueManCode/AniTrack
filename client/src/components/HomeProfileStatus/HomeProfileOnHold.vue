<template>
  <div class="home-profile-on-hold-container">
    <div class="home-profile-on-hold-title">On Hold ({{ shows.length }})</div>
    <div v-if="shows.length > 0">
      <div v-for="(show, index) in shows" :key="index">
        <OnHoldShowCard :data="show" />
      </div>
    </div>
    <div
      v-else
      :style="{
        color: 'var(--text-color)',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '5vmin',
        opacity: '0.7',
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
import OnHoldShowCard from "../ShowCards/OnHoldShowCard";

export default {
  name: "HomeProfileWatching",
  components: { OnHoldShowCard },
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
      if (element.user_show_data.status === "on hold") {
        arr.push(ls[index]);
      }
    });
    this.shows = arr;
  },
};
</script>

<style>
.home-profile-on-hold-container {
  height: auto;
  margin-bottom: 27vmin;
}
.home-profile-on-hold-title {
  color: var(--text-color);
  font-size: 5vmin;
  opacity: 0.8;
}
</style>