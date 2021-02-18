<template>
  <div class="interaction-search-container">
    <form>
      <label>Profile Option</label>
      <div class="profile-selector">
        <div
          :style="{
            padding: '0 0 0 2vmin',
          }"
        >
          {{ option_selected.name }}
        </div>
        <div class="options-container">
          <div
            class="profile-selector-options"
            v-for="(option, index) in options"
            :key="index"
          >
            <div
              @click="handle_option_selected(option.name)"
              class="profile-selector-option"
              v-if="option.name != option_selected.name"
            >
              {{ option.name }}
            </div>
          </div>
        </div>
      </div>
    </form>
    <button @click="handle_interaction_toggle">Search</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "InteractionProfile",
  setup() {
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
      STATUS: {
        name: "status",
      },
    });
    const option_selected = ref(options.value.WATCHING);
    const store = useStore();

    function handle_interaction_toggle() {
      store.commit("toggle_profile");
    }

    function handle_option_selected(status) {
      // const ls = JSON.parse(localStorage.getItem("added_shows"));
      switch (status) {
        case "dropped":
          option_selected.value = options.value.DROPPED;
          // update_status(props.data.id, "dropped");
          // is_container_open.value = false;
          break;
        case "watching":
          option_selected.value = options.value.WATCHING;
          // update_status(props.data.id, "watching");
          // is_container_open.value = false;
          break;
        case "plan to watch":
          option_selected.value = options.value.PLAN_TO_WATCH;
          // update_status(props.data.id, "plan to watch");
          // is_container_open.value = false;
          break;
        case "completed":
          option_selected.value = options.value.COMPLETED;
          // update_status(props.data.id, "completed");
          // is_container_open.value = false;
          break;
        case "on hold":
          option_selected.value = options.value.ON_HOLD;
          // update_status(props.data.id, "on hold");
          // is_container_open.value = false;
          break;
        case "status":
          option_selected.value = options.value.STATUS;
          // update_status(props.data.id, "on hold");
          // is_container_open.value = false;
          break;
      }
    }

    return {
      options,
      option_selected,
      handle_interaction_toggle,
      handle_option_selected,
    };
  },
};
</script>

<style scoped>
.interaction-search-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 20px;
}

form {
  width: 60%;
  display: flex;
  flex-direction: column;
  color: var(--text-color);
}

label {
  font-size: 2.5vmin;
  font-weight: bolder;
  opacity: 70%;
  margin-top: 2vmin;
}

.profile-selector {
  width: 100%;
  height: 6vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  opacity: 80%;
  font-size: medium;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.options-container {
  width: inherit;
  position: absolute;
  top: 6.5vmin;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: var(--background-secondary);
}

.profile-selector-option {
  padding: 2vmin;
}

.profile-selector-option:hover {
  background: var(--background-primary);
}

button {
  width: 25%;
  height: 6vmin;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  border-style: none;
  background: var(--yellow-primary);
  color: white;
  font-size: larger;
  font-weight: bolder;
  font-family: "Overpass", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>