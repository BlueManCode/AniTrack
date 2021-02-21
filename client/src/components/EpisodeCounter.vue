<template>
  <div class="episode-counter-container">
    <div @click="decrement" class="episode-counter-decrement">-</div>
    <div class="episode-counter-tracker">
      {{ watched }} /
      {{ total }}
    </div>
    <div @click="increment" class="episode-counter-increment">+</div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "EpisodeCount",
  props: ["data"],
  setup(props) {
    const watched = ref(props.data.user_show_data.watched_episodes);
    const total = ref(
      props.data.user_show_data.total_episodes
        ? props.data.user_show_data.total_episodes
        : 0
    );

    function increment() {
      const ls = JSON.parse(localStorage.getItem("added_shows"));
      if (watched.value < total.value) {
        watched.value = watched.value + 1;
        ls.forEach((element, index) => {
          if (element.id === props.data.id) {
            ls[index].user_show_data.watched_episodes = watched.value;
            localStorage.setItem("added_shows", JSON.stringify(ls));
          }
        });
      }
    }

    function decrement() {
      const ls = JSON.parse(localStorage.getItem("added_shows"));
      if (watched.value > 0) {
        watched.value = watched.value - 1;
        ls.forEach((element, index) => {
          if (element.id === props.data.id) {
            ls[index].user_show_data.watched_episodes = watched.value;
            localStorage.setItem("added_shows", JSON.stringify(ls));
          }
        });
      }
    }

    return {
      watched,
      total,
      increment,
      decrement,
    };
  },
};
</script>

<style>
.episode-counter-container {
  display: flex;
  font-size: 4vmin;
}
.episode-counter-tracker {
  background: var(--background-primary);
  width: 17vmin;
  height: 5vmin;
  border-radius: 4px;
  margin-left: 2vmin;
  margin-right: 2vmin;
  /* box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2); */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.2vmin;
}

.episode-counter-increment {
  cursor: pointer;
  user-select: none;
}

.episode-counter-decrement {
  cursor: pointer;
  user-select: none;
}
</style>