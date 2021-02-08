<template>
  <div class="interaction-search-container">
    <form>
      <label>Search</label>
      <input class="input-bar" />
    </form>
    <button>
      <!-- <svg
        viewBox="0 0 24 24"
        width="24"
        height="24"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle></svg
      > -->
      Profile
    </button>
  </div>
</template>

<script>
export default {
  name: "InteractionSearch",
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

input {
  width: 100%;
  height: 5vmin;
  background: var(--background-secondary);
  border-style: none;
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
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