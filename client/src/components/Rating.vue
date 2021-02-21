<template>
  <div class="rating-selector" @click="toggle_option_container">
    <div>{{ option_selected === null ? "-" : option_selected }}</div>
    <div class="rating-options-container" v-if="is_option_container_open">
      <div
        class="rating-options"
        v-for="(option, index) in options"
        :key="index"
        @click="handle_selected(option)"
      >
        {{ option.number }}
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Rating",
  props: ["data"],
  setup(props) {
    const options = ref([]);
    const option_selected = ref(null);
    const is_option_container_open = ref(false);
    options.value = [
      {
        number: "-",
      },
      {
        number: "1",
      },
      {
        number: "2",
      },
      {
        number: "3",
      },
      {
        number: "4",
      },
      {
        number: "5",
      },
      {
        number: "6",
      },
      {
        number: "7",
      },
      {
        number: "8",
      },
      {
        number: "9",
      },
      {
        number: "10",
      },
    ];

    function toggle_option_container() {
      is_option_container_open.value = !is_option_container_open.value;
    }

    function handle_selected(option) {
      option_selected.value = option.number;

      const ls = JSON.parse(localStorage.getItem("added_shows"));
      ls.forEach((element, index) => {
        if (props.data.id === element.id) {
          ls[index].user_show_data.user_rating =
            option_selected.value === "-" ? null : option_selected.value;
          localStorage.setItem("added_shows", JSON.stringify(ls));
        }
      });
    }

    return {
      options,
      option_selected,
      is_option_container_open,
      toggle_option_container,
      handle_selected,
    };
  },
  mounted() {
    const ls = JSON.parse(localStorage.getItem("added_shows"));
    ls.forEach((element, index) => {
      if (this.data.id === element.id) {
        this.option_selected =
          ls[index].user_show_data.user_rating === null
            ? "-"
            : ls[index].user_show_data.user_rating;
      }
    });
  },
};
</script>

<style>
.rating-selector {
  font-size: 2vmin;
  width: 7vmin;
  height: 4vmin;
  background: var(--background-primary);
  margin-top: 1.5vmin;
  margin-bottom: 1.25vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  border-radius: 4px;
  cursor: pointer;
}

.rating-options-container {
  z-index: 4;
  width: 7vmin;
  position: absolute;
  background: var(--background-primary);
  top: 4vmin;
  user-select: none;
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
}

.rating-options {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  user-select: none;
}

.rating-options:hover {
  background: var(--background-secondary);
}
</style>