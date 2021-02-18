<template>
  <div class="drop-down-container">
    <div class="option-selected">{{ optionSelected.name }}</div>
    <div class="option-container">
      <div v-for="(option, index) in options" :key="index">
        <div
          @click="handle_option_selected(option)"
          class="options"
          v-if="option != optionSelected"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "ShowDropDown",
  props: ["data", "isAdded"],
  setup(props) {
    const options = ref({
      WATCHING: {
        name: "watching",
      },
      PLAN_TO_WATCH: {
        name: "plan to watch",
      },
      ON_HOLD: {
        name: "on hold",
      },
      DROPPED: {
        name: "dropped",
      },
      COMPLETED: {
        name: "completed",
      },
      CLEAR: {
        name: "clear",
      },
    });
    const optionSelected = ref(options.value.WATCHING);

    function handle_option_selected(option) {
      switch (option.name) {
        case "dropped":
          optionSelected.value = options.value.DROPPED;
          break;
        case "watching":
          optionSelected.value = options.value.WATCHING;
          break;
        case "plan to watch":
          optionSelected.value = options.value.PLAN_TO_WATCH;
          break;
        case "completed":
          optionSelected.value = options.value.COMPLETED;
          break;
        case "on hold":
          optionSelected.value = options.value.ON_HOLD;
          break;
        case "clear":
          const ls = JSON.parse(localStorage.getItem("added_shows"));
          const filter = ls.filter((item) => item.id !== props.data.id);
          localStorage.setItem("added_shows", JSON.stringify(filter));
          props.isAdded = false;
          console.log(props.isAdded);
          break;
      }
    }

    return {
      options,
      optionSelected,
      handle_option_selected,
    };
  },
};
</script>

<style>
.drop-down-container {
  position: relative;
  background: var(--background-primary);
  width: 150px;
}
.option-selected {
}
.option-container {
  width: inherit;
  position: absolute;
  z-index: 1;
  background: var(--background-secondary);
  border-radius: 0.5vmin;
}
.options:hover {
  background: var(--background-primary);
}
</style>