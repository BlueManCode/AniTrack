<template>
  <div v-if="data" class="trending-card-container">
    <img :src="data.coverImage.large || data.coverImage.medium" />
    <div class="card-data">
      <div v-if="data.status !== 'NOT_YET_RELEASED'" class="card-data-top">
        {{
          data.nextAiringEpisode
            ? `Episode ${data.nextAiringEpisode.episode} of ${
                data.episodes || "TBD"
              }`
            : "Ended on:"
        }}
      </div>
      <div v-else class="card-data-top">Starts in</div>
      <div v-if="data.status !== 'NOT_YET_RELEASED'" class="card-data-middle">
        {{
          next_airining
            ? next_airining.day + " Day, " + next_airining.hour + " hrs"
            : end_date
        }}
      </div>
      <div v-else class="card-data-middle">
        {{
          next_airining
            ? next_airining.day + " Day, " + next_airining.hour + " hrs"
            : data.startDate.month
            ? start_date + " " + data.startDate.year
            : "TBD"
        }}
      </div>
      <div class="card-data-bottom">
        {{ data.title.english || data.title.romaji }}
      </div>
    </div>
    <div class="card-interaction">
      <div>{{ "#" + (index + 1) }}</div>
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </div>
  </div>
</template>

<script>
// vue functions
import { onMounted, ref } from "vue";

// custom functions
import {
  convert_next_airing,
  convert_end_date,
} from "../lib/fetch_shows_trending";

export default {
  name: "TrendingCard",
  props: ["data", "index"],
  setup(props) {
    const end_date = ref(null);
    const start_date = ref(null);
    const next_airining = ref(null);
    onMounted(async () => {
      if (!props.data.nextAiringEpisode) {
        end_date.value = await convert_end_date(props.data.endDate);
        start_date.value = await convert_end_date(props.data.startDate);
      } else {
        next_airining.value = await convert_next_airing(
          props.data.nextAiringEpisode.timeUntilAiring
        );
      }
    });
    return {
      end_date,
      next_airining,
      start_date,
    };
  },
};
</script>

<style scoped>
.trending-card-container {
  width: 57vmin;
  height: 18vmin;
  background: var(--background-secondary);
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  font-size: bolder;
}

img {
  width: 13vmin;
  height: 100%;
  border-radius: 6px 0 0 6px;
}

.card-data {
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 2vmin 0 0 2vmin;
}

.card-data-top {
  opacity: 60%;
  font-weight: bold;
  font-size: 1.65vmin;
}

.card-data-middle {
  font-weight: bolder;
  font-size: 3.5vmin;
  opacity: 90%;
}

.card-data-bottom {
  opacity: 60%;
  font-weight: bold;
  font-size: 1.65vmin;
}

.card-interaction {
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  flex-direction: column;
  padding: 1vmin 1vmin 1vmin 0;
}

.card-interaction svg {
  width: 3vmin;
  stroke: var(--yellow-primary);
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.card-interaction div {
  font-size: 4vmin;
  opacity: 90%;
}
</style>