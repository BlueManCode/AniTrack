<template>
  <div>
    <HeaderSmall />
    <div class="home-container">
      <div class="container-content">
        <InteractionSearch />
        <div class="card-container">
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
          <MyShowCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";

import HeaderSmall from ".././components/HeaderSmall";
import InteractionSearch from ".././components/InteractionSearch";
import MyShowCard from ".././components/MyShowCard";

export default {
  components: { HeaderSmall, InteractionSearch, MyShowCard },
  setup() {
    const data = reactive({});
    return {};
  },
};
</script>

<style>
.home-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background: var(--background-primary);
}

.container-content {
  width: 70%;
  height: 100%;
}

.card-container {
  width: 100%;
}
</style>