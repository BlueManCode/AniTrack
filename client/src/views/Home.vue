<template>
  <div>
    <HeaderSmall />
    <div class="home-container">
      <div class="container-content">
        <div v-if="is_show_profile">
          <InteractionProfile />
        </div>
        <div v-else>
          <InteractionSearch />
        </div>
        <!-- <div class="card-container">
          <MyShowCard />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { useStore } from "vuex";

import HeaderSmall from ".././components/HeaderSmall";
import InteractionSearch from ".././components/InteractionSearch";
import InteractionProfile from "../components/InteractionProfile";
import MyShowCard from ".././components/MyShowCard";

export default {
  components: {
    HeaderSmall,
    InteractionSearch,
    MyShowCard,
    InteractionProfile,
  },
  setup() {
    const store = useStore();

    return {
      is_show_profile: computed(() => store.state.is_show_profile),
    };
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