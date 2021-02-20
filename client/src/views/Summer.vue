<template>
  <div class="season-container">
    <HeaderPopularSeasons />
    <div class="season-body-container">
      <div class="season-shows-container">
        <div v-for="(show, index) in results" :key="index">
          <PopularShowCard :data="show" :index="index" />
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
import PopularShowCard from "../components/ShowCards/PopularShowCard";

export default {
  name: "Summer",
  components: { HeaderPopularSeasons, PopularShowCard },
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

.season-body-container {
  width: 100%;
  display: flex;
  justify-content: center;
}

.season-shows-container {
  width: 90%;
  display: grid;
  z-index: 1;
  margin-top: 10vmin;
  grid-template-columns: repeat(3, 1fr);
}
</style>