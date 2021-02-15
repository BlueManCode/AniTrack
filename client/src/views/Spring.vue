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
import fetch_api from "../lib/fetch_api";
import { ref, onMounted } from "vue";

import HeaderLarge from "../components/HeaderLarge";
import TrendingCard from "../components/TrendingCard";

export default {
  name: "Spring",
  components: { HeaderLarge, TrendingCard },
  setup() {
    const results = ref([]);
    onMounted(() => {
      console.log("fetching fall");
      async function get_fetch() {
        const option = {
          season: "SPRING",
          season_year: new Date().getFullYear(),
        };
        const data = await fetch_api("POPULAR", option);
        localStorage.setItem("trending_spring", JSON.stringify([]));
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