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
      <div v-if="!isAdded" @click="handle_add_show" class="not-added-btn">
        Add
      </div>
      <div v-else>
        <ShowDropDown
          :data="show_data"
          :handle_add_show="handle_add_show"
          :isAdded="isAdded"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import ShowDropDown from "../components/ShowDropDown";
export default {
  name: "MyShowCard",
  props: ["data"],
  components: {
    ShowDropDown,
  },
  setup(props) {
    const isAdded = ref(false);
    const show_data = ref(props.data);

    function handle_add_show() {
      isAdded.value = !isAdded.value;

      function handle_filter(item) {
        return item.id !== props.data.id;
      }

      // get the local storage ref
      const ls = JSON.parse(localStorage.getItem("added_shows"));

      // if added
      if (isAdded.value) {
        let user_show_data = props.data;
        user_show_data.user_show_data.status = "watching";
        ls.push(user_show_data);
        localStorage.setItem("added_shows", JSON.stringify(ls));
      }
      // not added
      else {
        const filtered = ls.filter((item) => handle_filter(item));
        localStorage.setItem("added_shows", JSON.stringify(filtered));
      }
    }

    return {
      isAdded,
      show_data,
      handle_add_show,
    };
  },
  mounted() {
    const ls = JSON.parse(localStorage.getItem("added_shows"));
    ls.forEach((element) => {
      if (element.id === this.$props.data.id) {
        this.isAdded = true;
        this.show_data.status = element.status;
      }
    });
  },
};
</script>

<style scoped>
.card-search {
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
  width: 150px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3vmin;
  border: 1px solid;
  border-color: var(--text-color);
  cursor: pointer;
}
</style>