<template>
  <div class="header-large-container">
    <div class="menu-option-container">
      <div class="menu-option" @click="this.$router.push('/')">
        <span
          class="menu-option-title"
          :style="{
            opacity: this.$route.path === '/' ? '100%' : '70%',
          }"
          >My Shows</span
        >
        <span class="menu-option-year">{{ year }}</span>
      </div>
      <div class="menu-option" @click="this.$router.push('/winter')">
        <span
          class="menu-option-title"
          :style="{
            opacity: this.$route.path === '/winter' ? '100%' : '70%',
          }"
          >Winter</span
        >
        <span class="menu-option-year">{{ year }}</span>
      </div>
      <div class="menu-option" @click="this.$router.push('/spring')">
        <span
          class="menu-option-title"
          :style="{
            opacity: this.$route.path === '/spring' ? '100%' : '70%',
          }"
          >Spring</span
        >
        <span class="menu-option-year">{{ year }}</span>
      </div>
      <div class="menu-option" @click="this.$router.push('/summer')">
        <span
          class="menu-option-title"
          :style="{
            opacity: this.$route.path === '/summer' ? '100%' : '70%',
          }"
          >Summer</span
        >
        <span class="menu-option-year">{{ year }}</span>
      </div>
      <div class="menu-option" @click="this.$router.push('/fall')">
        <span
          class="menu-option-title"
          :style="{
            opacity: this.$route.path === '/fall' ? '100%' : '70%',
          }"
          >Fall</span
        >
        <span class="menu-option-year">{{ year - 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

export default {
  name: "HeaderPopularSeasons",
  setup() {
    const year = ref(new Date().getFullYear());
    return {
      year,
    };
  },
};
</script>

<style>
.header-large-container {
  width: 100%;
  height: 25vmin;
  background: var(--yellow-primary);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 2vmin;
  position: absolute;
  top: 0;
  z-index: 0;
}

.menu-option-container {
  display: flex;
}

.menu-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vmin;
  line-height: 2vmin;
  cursor: pointer;
}

.menu-option-title {
  font-size: x-large;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 70%;
}

.menu-option-title:hover {
  opacity: 100%;
}

.menu-option-year {
  opacity: 50%;
  font-size: medium;
}
</style>