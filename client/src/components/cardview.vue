<template>
  <!-- Main Card -->
  <div class="card">
    <img class="poster-img" :src="res.coverImage.extraLarge" />
    <div class="text-container">
      <span>{{ res.title.english || res.title.romaji }}</span>
    </div>
    <!-- Info Card -->
    <div class="card-info-card">
      {{ res.title.english || res.title.romaji }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["res"],
};
</script>

<style>
body {
  color: var(--text-color);
  font-family: Overpass, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
}

.card-info-card {
  width: 200px;
  height: 200px;
  background: var(--background-secondary);
  position: absolute;
  display: none;
}

.card {
  position: relative;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.poster-img {
  width: 85%;
  height: 13rem;
  border-radius: 3px;
  box-shadow: 20px;
  object-fit: cover;
}

@media only screen and (min-width: 900px) {
  .poster-img {
    height: 18rem;
  }
}

.text-container {
  width: 85%;
}

.text-container span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: start;
}
</style>