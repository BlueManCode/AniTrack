<template>
  <div class="season-container">
    <HeaderPopularSeasons />
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
// vue functions
import { ref, onMounted } from "vue";

// components
import fetch_shows_trending from "../lib/fetch_shows_trending";
import HeaderPopularSeasons from "../components/HeaderPopularSeasons";
import TrendingCard from "../components/TrendingCard";

export default {
  name: "Winter",
  components: { HeaderPopularSeasons, TrendingCard },
  setup() {
    // check if cache data exist
    const results = ref([]);
    onMounted(async () => {
      const fetch_options = {
        season: "WINTER",
        cache_unit: "trending_winter",
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