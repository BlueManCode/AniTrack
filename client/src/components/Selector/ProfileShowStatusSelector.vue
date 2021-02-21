<template>
  <div class="show-status-selector-container">
    <div
      @click="toggle_container"
      class="show-status-selector-option-selected"
      :style="{ background: option_selected.color }"
    >
      {{ option_selected.name }}
    </div>
    <div
      class="show-status-selector-options-container"
      v-if="is_container_open"
    >
      <div v-for="(option, index) in options" :key="index">
        <div
          @click="handle_option_selected(option.name)"
          class="show-status-selector-option"
          v-if="option != option_selected"
        >
          {{ option.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue components
import { ref, onMounted } from "vue";

export default {
  name: "ShowStatusSelector",
  props: ["data", "handle_property_changed", "current_status"],
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
          is_container_open.value = false;
          break;
        case "watching":
          option_selected.value = options.value.WATCHING;
          update_status(props.data.id, "watching");
          is_container_open.value = false;
          break;
        case "plan to watch":
          option_selected.value = options.value.PLAN_TO_WATCH;
          update_status(props.data.id, "plan to watch");
          is_container_open.value = false;
          break;
        case "completed":
          option_selected.value = options.value.COMPLETED;
          update_status(props.data.id, "completed");
          is_container_open.value = false;
          break;
        case "on hold":
          option_selected.value = options.value.ON_HOLD;
          update_status(props.data.id, "on hold");
          is_container_open.value = false;
          break;
        case "clear":
          const filter = ls.filter((item) => item.id !== props.data.id);
          localStorage.setItem("added_shows", JSON.stringify(filter));
          props.handle_property_changed();
          is_container_open.value = false;
          break;
      }

      // status has changed
      option_selected.value.name === props.current_status
        ? null
        : props.handle_property_changed();
    }

    function update_status(id, status) {
      const ls = JSON.parse(localStorage.getItem("added_shows"));
      ls.forEach((element, index) => {
        if (element.id === id) {
          ls[index].user_show_data.status = status;
        }
      });
      localStorage.setItem("added_shows", JSON.stringify(ls));
    }

    function toggle_container() {
      is_container_open.value = !is_container_open.value;
    }

    onMounted(() => {
      handle_option_selected(props.data.user_show_data.status);
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
.show-status-selector-container {
  position: relative;
  background: var(--background-primary);
  width: 150px;
  cursor: pointer;
}
.show-status-selector-option-selected {
  color: white;
  /* box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2); */
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5vmin;
}
.show-status-selector-options-container {
  width: inherit;
  position: absolute;
  z-index: 1;
  background: var(--background-secondary);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
}
.show-status-selector-option {
  padding: 1.5vmin 0 0 1.5vmin;
}
.show-status-selector-option:hover {
  background: var(--background-primary);
}
</style>