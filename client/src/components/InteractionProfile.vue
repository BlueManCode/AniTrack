<template>
  <div class="interaction-search-container">
    <form>
      <label>Profile Option</label>
      <select class="input-bar">
        <option></option>
        <option>option 1</option>
        <option>option 1</option>
      </select>
    </form>
    <button @click="handle_interaction_toggle">Search</button>
  </div>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "InteractionProfile",
  setup() {
    const store = useStore();
    function handle_interaction_toggle() {
      store.commit("toggle_profile");
    }

    return {
      handle_interaction_toggle,
    };
  },
};
</script>

<style>
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
  font-size: larger;
  font-weight: bolder;
  opacity: 70%;
}

select {
  width: 100%;
  height: 5.2vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: "Overpass", sans-serif;
  font-weight: bolder;
  padding-left: 10px;
  opacity: 80%;
  font-size: medium;
}

button {
  width: 25%;
  height: 5.5vmin;
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

button svg {
  padding: 0;
  margin: 0;
}
</style>