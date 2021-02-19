<template>
  <div class="interaction-search-container">
    <form>
      <label>Profile Option</label>
      <div @click="toggle_option_container" class="profile-selector">
        <div
          :style="{
            padding: '0 0 0 2vmin',
          }"
        >
          {{ option_selected.name }}
        </div>
        <div v-if="is_container_open" class="options-container">
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
  <div class="profiles-container">
    <Watching />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

import Watching from "../components/Watching";

export default {
  name: "InteractionProfile",
  components: { Watching },
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
    const is_container_open = ref(false);
    const store = useStore();

    function handle_interaction_toggle() {
      store.commit("toggle_profile");
    }

    function toggle_option_container() {
      is_container_open.value = !is_container_open.value;
    }

    function handle_option_selected(status) {
      switch (status) {
        case "dropped":
          option_selected.value = options.value.DROPPED;
          break;
        case "watching":
          option_selected.value = options.value.WATCHING;
          break;
        case "plan to watch":
          option_selected.value = options.value.PLAN_TO_WATCH;
          break;
        case "completed":
          option_selected.value = options.value.COMPLETED;
          break;
        case "on hold":
          option_selected.value = options.value.ON_HOLD;
          break;
        case "status":
          option_selected.value = options.value.STATUS;
          break;
      }
    }

    return {
      options,
      option_selected,
      is_container_open,
      handle_interaction_toggle,
      handle_option_selected,
      toggle_option_container,
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

.profiles-container {
  background: red;
  padding-top: 10vmin;
}
</style>