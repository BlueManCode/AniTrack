<template>
  <div v-if="!is_property_changed" class="completed-card-container">
    <img :src="data.coverImage.large || data.coverImage.medium" />
    <div class="completed-card-data-container">
      <div class="completed-card-data-title">
        {{ data.title.english || "title not found" }}
      </div>
      <div class="completed-card-sub-data-container">
        <div>
          {{ "Season:  " + data.season.toLowerCase() + " " + data.seasonYear }}
        </div>
        <div>{{ "Episodes:  " + data.episodes }}</div>
        <div>{{ "Status:  " + data.status.toLowerCase() }}</div>
      </div>
      <div>
        <ProfileShowStatusSelector
          :data="show_data"
          :handle_property_changed="handle_property_changed"
          :current_status="current_status"
        />
      </div>
    </div>
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

// components
import ProfileShowStatusSelector from "../Selector/ProfileShowStatusSelector";

export default {
  name: "CompletedShowCard",
  props: ["data"],
  components: {
    ProfileShowStatusSelector,
  },
  setup(props) {
    const show_data = ref(props.data);
    const is_property_changed = ref(false);
    const current_status = ref(props.data.user_show_data.status);
    function handle_property_changed() {
      is_property_changed.value = !is_property_changed.value;
    }

    return {
      show_data,
      is_property_changed,
      current_status,
      handle_property_changed,
    };
  },
};
</script>

<style scoped>
.completed-card-container {
  width: 100%;
  height: 20vmin;
  background: var(--background-secondary);
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  display: flex;
  font-size: bolder;
}

.completed-card-container img {
  width: auto;
  height: 100%;
  border-radius: 6px 0 0 6px;
}

.completed-card-data-container {
  font-family: "Overpass", sans-serif;
  padding: 1vmin 0 1vmin 5vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.completed-card-data-title {
  width: 54vmin;
  font-size: 3vmin;
  opacity: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.completed-card-sub-data-container {
  font-size: 1.8vmin;
  opacity: 60%;
  padding: 1vmin 0 2vmin 0;
}
</style>