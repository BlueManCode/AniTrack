<template>
  <div class="drop-down-container">
    <div
      @click="toggle_container"
      class="option-selected"
      :style="{ background: option_selected.color }"
    >
      {{ option_selected.name }}
    </div>
    <div v-if="is_container_open" class="option-container">
      <div v-for="(option, index) in options" :key="index">
        <div
          @click="handle_option_selected(option.name)"
          class="options"
          v-if="option != option_selected"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
export default {
  name: "ShowDropDown",
  props: ["data", "handle_add_show", "isAdded"],
  setup(props) {
    const options = ref({
      WATCHING: {
        name: "watching",
        color: "#D9B60C",
      },
      PLAN_TO_WATCH: {
        name: "plan to watch",
        color: "#0C45D9",
      },
      ON_HOLD: {
        name: "on hold",
        color: "#BE1212",
      },
      DROPPED: {
        name: "dropped",
        color: "#BE1212",
      },
      COMPLETED: {
        name: "completed",
        color: "#4BB543",
      },
      CLEAR: {
        name: "clear",
      },
    });
    const option_selected = ref(options.value.WATCHING);
    const is_container_open = ref(false);

    function handle_option_selected(status) {
      const ls = JSON.parse(localStorage.getItem("added_shows"));
      switch (status) {
        case "dropped":
          option_selected.value = options.value.DROPPED;
          update_status(props.data.id, "dropped");
          toggle_container();
          break;
        case "watching":
          option_selected.value = options.value.WATCHING;
          toggle_container();
          break;
        case "plan to watch":
          option_selected.value = options.value.PLAN_TO_WATCH;
          toggle_container();
          break;
        case "completed":
          option_selected.value = options.value.COMPLETED;
          toggle_container();
          break;
        case "on hold":
          option_selected.value = options.value.ON_HOLD;
          toggle_container();
          break;
        case "clear":
          const filter = ls.filter((item) => item.id !== props.data.id);
          localStorage.setItem("added_shows", JSON.stringify(filter));
          props.handle_add_show();
          toggle_container();
          break;
      }
    }

    function update_status(id, status) {
      const ls = JSON.parse(localStorage.getItem("added_shows"));
      ls.forEach((element, index) => {
        if (element.id === id) {
          ls[index].status = status;
          console.log(ls[index].status);
        }
      });
      localStorage.setItem("added_shows", JSON.stringify(ls));
    }

    function toggle_container() {
      is_container_open.value = !is_container_open.value;
    }

    onMounted(() => {
      handle_option_selected(props.data.status);
    });

    return {
      options,
      option_selected,
      is_container_open,
      handle_option_selected,
      toggle_container,
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
  color: white;
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