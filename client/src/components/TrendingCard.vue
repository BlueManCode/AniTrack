<template>
  <div v-if="show_data" class="trending-card-container">
    <img :src="show_data.coverImage.large || show_data.coverImage.medium" />
    <div class="card-data">
      <div class="card-data-top">
        {{
          show_data.nextAiringEpisode
            ? `Episode ${show_data.nextAiringEpisode.episode} of ${show_data.episodes}`
            : "Ended on:"
        }}
      </div>
      <div class="card-data-middle">
        {{
          show_data.nextAiringEpisode
            ? show_data.nextAiringEpisode.timeUntilAiring
            : show_data.endDate
        }}
      </div>
      <div class="card-data-bottom">
        {{ show_data.title.english || show_data.title.romaji }}
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import fetch_api from "../lib/fetch_api";

export default {
  name: "TrendingCard",
  props: ["data"],
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
  width: 100%;
  padding-left: 2vmin;
}

.card-data-top {
}

.card-data-middle {
}

.card-data-bottom {
}
</style>