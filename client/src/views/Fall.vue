<template>
  <div class="season-container">
    <HeaderLarge />
    <div class="trending-container">
      <div class="trending-options">
        <div v-for="show in results" :key="show.id">
          <MyShowCard :type="'TREND'" :data="show" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fetch_api from "../lib/fetch_api";
import { ref, onMounted } from "vue";

import HeaderLarge from "../components/HeaderLarge";
import MyShowCard from "../components/MyShowCard";

export default {
  name: "Fall",
  components: { HeaderLarge, MyShowCard },
  setup() {
    const results = ref([]);

    onMounted(() => {
      async function get_fetch() {
        const option = {
          season: "FALL",
          season_year: new Date().getFullYear(),
        };
        const data = await fetch_api("POPULAR", option);
        results.value = data.data.Page.media;
      }
      get_fetch();
    });

    return {
      results,
    };
  },
};
</script>

<style>
.season-container {
  position: relative;
  height: 100vh;
  background: var(--background-primary);
}

.trending-container {
  width: 100%;
  display: flex;
  justify-content: center;
}
.trending-options {
  width: 70%;
  position: absolute;
  top: 10vmin;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>