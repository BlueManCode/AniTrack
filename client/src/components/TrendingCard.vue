<template>
  <div v-if="show_data" class="trending-card-container">
    <div class="cover-image-container">
      <img :src="show_data.coverImage.large || show_data.coverImage.medium" />
      <!-- <div class="cover-image-container-title"> -->
      <div>{{ show_data.title.english || show_data.title.romaji }}</div>
      <!-- </div> -->
    </div>
    <!-- <div class="data-container">
      <div class="title">
        {{ data.title.english || "title not found" }}
      </div>
      <div class="sub-data">
        <div>
          {{ "Season:  " + data.season.toLowerCase() + " " + data.seasonYear }}
        </div>
        <div>{{ "Episode count:  " + data.episodes }}</div>
        <div>{{ "Status:  " + data.status.toLowerCase() }}</div>
      </div>
      <div class="not-added-btn">Add</div>
      <div class="added-btn">Added</div>
    </div> -->
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
        show_data.value = data.data.Media;
      }
      get_fetch();
    });

    return {
      show_data,
    };
  },
};
</script>

<style scoped>
.trending-card-container {
  width: 70vmin;
  height: 35vmin;
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

.cover-image-container {
  position: relative;
}

.cover-image-container div {
  position: absolute;
  bottom: 0;
  background-image: rgba(0, 0, 0, 0.5);
}

/* .cover-image-container-title {
  background: 
} */

/* .data-container {
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  padding: 1vmin 0 1vmin 5vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
} */

/*
.title {
  width: 54vmin;
  font-size: x-large;
  opacity: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.sub-data {
  font-size: small;
  opacity: 60%;
  line-height: 2vmin;
  padding: 1vmin 0 2vmin 0;
  font-weight: bolder;
}

.not-added-btn {
  width: 9vmin;
  height: 2vmin;
  border-radius: 4vmin;
  font-size: x-small;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--text-color);
}

.added-btn {
  width: 9vmin;
  height: 2vmin;
  border-radius: 4vmin;
  font-size: x-small;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--yellow-primary);
  background: var(--yellow-primary);
}
*/
</style>