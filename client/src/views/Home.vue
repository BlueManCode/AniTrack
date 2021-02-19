<template>
  <div>
    <HeaderHome />
    <div class="home-container">
      <div class="home-content">
        <div v-if="is_show_profile">
          <HomeProfile />
        </div>
        <div v-else>
          <HomeSearch />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// vue functions
import { computed } from "vue";
import { useStore } from "vuex";

// components
import HeaderHome from ".././components/HeaderHome";
import HomeSearch from ".././components/HomeSearch";
import HomeProfile from "../components/HomeProfile";

export default {
  components: {
    HeaderHome,
    HomeSearch,
    HomeProfile,
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

.home-content {
  width: 70%;
  height: 100%;
}
</style>