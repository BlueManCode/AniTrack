<template>
  <div v-if="show_data" class="trending-card-container">
    <img :src="show_data.coverImage.large || show_data.coverImage.medium" />
    <div class="card-data">
      <div v-if="show_data.status !== 'NOT_YET_RELEASED'" class="card-data-top">
        {{
          show_data.nextAiringEpisode
            ? `Episode ${show_data.nextAiringEpisode.episode} of ${
                show_data.episodes || "TBD"
              }`
            : "Ended on:"
        }}
      </div>
      <div v-else class="card-data-top">Starts in</div>
      <div
        v-if="show_data.status !== 'NOT_YET_RELEASED'"
        class="card-data-middle"
      >
        {{
          show_data.nextAiringEpisode
            ? show_data.nextAiringEpisode.timeUntilAiring.day +
              " Day, " +
              show_data.nextAiringEpisode.timeUntilAiring.hour +
              " hrs"
            : show_data.endDate
        }}
      </div>
      <div v-else class="card-data-middle">
        {{
          show_data.nextAiringEpisode
            ? show_data.nextAiringEpisode.timeUntilAiring.day +
              " Day, " +
              show_data.nextAiringEpisode.timeUntilAiring.hour +
              " hrs"
            : "TBD"
        }}
      </div>
      <div class="card-data-bottom">
        {{ show_data.title.english || show_data.title.romaji }}
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
import { onMounted, ref } from "vue";
import fetch_api from "../lib/fetch_api";

export default {
  name: "TrendingCard",
  props: ["data", "index"],
  setup(props) {
    const show_data = ref(null);

    onMounted(() => {
      async function get_fetch() {
        const data = await fetch_api("SHOW", { id: props.data.id });
        const res = data.data.Media;
        show_data.value = res;
        if (res.nextAiringEpisode) {
          const result = await fetch_api("NEXT_AIRING", {
            id: res.nextAiringEpisode.id,
          });
          show_data.value.nextAiringEpisode = result.data.AiringSchedule;
          show_data.value.nextAiringEpisode.timeUntilAiring = convert_next_airing(
            show_data.value.nextAiringEpisode.timeUntilAiring
          );
        } else {
          show_data.value.endDate = convert_end_date(show_data.value.endDate);
        }
      }
      get_fetch();
    });

    function convert_next_airing(time_remaining) {
      return {
        day: Math.floor(time_remaining / (3600 * 24)),
        hour: Math.floor((time_remaining % (3600 * 24)) / 3600),
        min: Math.floor((time_remaining % 3600) / 60),
      };
    }

    function convert_end_date(endDate) {
      const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      return `${endDate.day + " " + months[endDate.month - 1]}`;
    }

    return {
      show_data,
    };
  },
};
</script>

<style scoped>
.trending-card-container {
  width: 60vmin;
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
  width: auto;
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
  font-size: 1.75vmin;
}

.card-data-middle {
  font-weight: bolder;
  font-size: 4vmin;
}

.card-data-bottom {
  opacity: 60%;
  font-weight: bold;
  font-size: 1.75vmin;
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