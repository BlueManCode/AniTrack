<template>
  <div class="season-container">
    <HeaderLarge />
    <div class="trending-container">
      <div class="trending-options">
        <div v-for="(show, index) in results" :key="index">
          <TrendingCard :data="show" :index="index" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

import fetch_shows_trending from "../lib/fetch_shows_trending";
import HeaderLarge from "../components/HeaderLarge";
import TrendingCard from "../components/TrendingCard";

export default {
  name: "Summer",
  components: { HeaderLarge, TrendingCard },
  setup() {
    // check if cache data exist
    const results = ref([]);
    onMounted(async () => {
      const fetch_options = {
        season: "SUMMER",
        cache_unit: "trending_summer",
        season_year: new Date().getFullYear(),
      };
      await fetch_shows_trending(results, fetch_options);
    });
    return {
      results,
    };
  },
};
</script>

<style scoped>
.season-container {
  background: var(--background-primary);
}

.trending-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.trending-options {
  width: 90%;
  display: grid;
  z-index: 1;
  margin-top: 10vmin;
  grid-template-columns: repeat(3, 1fr);
}
</style>