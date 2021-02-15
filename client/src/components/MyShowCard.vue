<template>
  <div class="card-search">
    <img :src="data.coverImage.large || data.coverImage.medium" />
    <div class="data-container">
      <div class="title">
        {{ data.title.english || "title not found" }}
      </div>
      <div class="sub-data">
        <div>
          {{ "Season:  " + data.season.toLowerCase() + " " + data.seasonYear }}
        </div>
        <div>{{ "Episodes:  " + data.episodes }}</div>
        <div>{{ "Status:  " + data.status.toLowerCase() }}</div>
      </div>
      <div class="not-added-btn">Add</div>
      <!-- <div class="added-btn">Added</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "MyShowCard",
  props: ["data"],
};
</script>

<style scoped>
.card-search {
  width: 100%;
  height: 18vmin;
  background: var(--background-secondary);
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  font-size: bolder;
}

.card-search-trending {
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

.card-search img {
  width: auto;
  height: 100%;
  border-radius: 6px 0 0 6px;
}

.data-container {
  font-family: "Overpass", sans-serif;
  padding: 1vmin 0 1vmin 5vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.title {
  width: 54vmin;
  font-size: 3vmin;
  opacity: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.sub-data {
  font-size: 1.8vmin;
  opacity: 60%;
  padding: 1vmin 0 2vmin 0;
}

.not-added-btn {
  width: 9vmin;
  height: 3vmin;
  border-radius: 4vmin;
  font-size: 1.8vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid;
  border-color: var(--text-color);
}

.added-btn {
  width: 9vmin;
  height: 3vmin;
  border-radius: 4vmin;
  font-size: 1.8vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 2px solid;
  border-color: var(--yellow-primary);
  background: var(--yellow-primary);
}
</style>