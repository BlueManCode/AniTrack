<template>
  <div class="home-profile-container">
    <form>
      <label>Profile Option</label>
      <div @click="toggle_option_container" class="home-profile-selector">
        <div
          :style="{
            padding: '0 0 0 2vmin',
          }"
        >
          {{ option_selected.name }}
        </div>
        <div
          v-if="is_container_open"
          class="home-profile-selector-options-container"
        >
          <div v-for="(option, index) in options" :key="index">
            <div
              @click="handle_option_selected(option.name)"
              class="home-profile-selector-option"
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
  <div class="home-profile-profiles-container">
    <HomeProfileWatching
      v-if="option_selected.name === options.WATCHING.name"
    />
    <HomeProfileOnHold v-if="option_selected.name === options.ON_HOLD.name" />
    <HomeProfileDropped v-if="option_selected.name === options.DROPPED.name" />
    <HomeProfilePlanToWatch
      v-if="option_selected.name === options.PLAN_TO_WATCH.name"
    />
    <HomeProfileCompleted
      v-if="option_selected.name === options.COMPLETED.name"
    />
  </div>
</template>

<script>
// vue functions
import { ref, onMounted } from "vue";
import { useStore } from "vuex";

// components
import HomeProfileWatching from "../components/HomeProfileStatus/HomeProfileWatching";
import HomeProfileOnHold from "../components/HomeProfileStatus/HomeProfileOnHold";
import HomeProfileDropped from "../components/HomeProfileStatus/HomeProfileDropped";
import HomeProfilePlanToWatch from "../components/HomeProfileStatus/HomeProfilePlanToWatch";
import HomeProfileCompleted from "../components/HomeProfileStatus/HomeProfileCompleted";

export default {
  name: "HomeProfile",
  components: {
    HomeProfileWatching,
    HomeProfileOnHold,
    HomeProfileDropped,
    HomeProfilePlanToWatch,
    HomeProfileCompleted,
  },
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

    onMounted(() => {
      const profile_selector_ref = document.querySelector(
        ".home-profile-selector"
      );

      profile_selector_ref.addEventListener("mouseenter", () => {
        is_container_open.value = true;

        setTimeout(() => {
          const profile_selector_options_ref = document.querySelector(
            ".home-profile-selector-options-container"
          );

          profile_selector_options_ref.addEventListener("mouseenter", () => {
            is_container_open.value = true;
          });

          profile_selector_options_ref.addEventListener("mouseleave", () => {
            is_container_open.value = false;
          });
        }, 0);
      });
    });

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
.home-profile-container {
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
  font-size: 2vmin;
  font-weight: bolder;
  opacity: 70%;
  margin-top: 2vmin;
}

.home-profile-selector {
  width: 100%;
  height: 6vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  font-size: medium;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 2.5vmin;
  z-index: 3;
}

.home-profile-selector-options-container {
  width: inherit;
  position: absolute;
  top: 6.5vmin;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background: var(--background-secondary);
}

.home-profile-selector-option {
  padding: 2vmin;
}

.home-profile-selector-option:hover {
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

.home-profile-profiles-container {
  padding-top: 10vmin;
}
</style>