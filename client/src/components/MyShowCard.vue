<template>
  <div v-if="type === 'SEARCH'" class="card-search">
    <img :src="data.coverImage.large || data.coverImage.medium" />
    <div class="data-container">
      <div class="title">{{ data.title.english || "title not found" }}</div>
      <div class="sub-data">
        <div>
          {{ "season: " + data.season + " " + data.seasonYear }}
        </div>
        <div>{{ "episode count: " + data.episodes }}</div>
        <div>{{ "status: " + data.status }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyShowCard",
  props: ["data", "type"],
};
</script>

<style scoped>
.card-search {
  width: 100%;
  height: 17vmin;
  background: var(--background-secondary);
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  font-size: bolder;
}

.card-search img {
  width: auto;
  height: 100%;
  border-radius: 6px 0 0 6px;
}

.data-container {
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  padding: 2vmin 0 4vmin 4vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-between;
}

.title {
  width: 30rem;
  font-size: x-large;
  opacity: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.sub-data {
  font-size: small;
  opacity: 70%;
}
</style>