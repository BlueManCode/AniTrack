<template>
  <div class="header-home-container">
    <div class="header-home-options-container">
      <div class="header-home-option" @click="this.$router.push('/')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/' ? '100%' : '70%',
          }"
          >My Shows</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/winter')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/winter' ? '100%' : '70%',
          }"
          >Winter</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/spring')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/spring' ? '100%' : '70%',
          }"
          >Spring</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/summer')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/summer' ? '100%' : '70%',
          }"
          >Summer</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/fall')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/fall' ? '100%' : '70%',
          }"
          >Fall</span
        >
        <span class="header-home-option-year">{{ year - 1 }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// vue functions
import { ref } from "vue";

export default {
  name: "HeaderHome",
  setup() {
    const year = ref(new Date().getFullYear());
    return {
      year,
    };
  },
};
</script>

<style>
.header-home-container {
  width: 100%;
  height: 13vmin;
  background: var(--yellow-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-home-options-container {
  display: flex;
}

.header-home-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vmin;
  line-height: 2vmin;
  cursor: pointer;
}

.header-home-option-title {
  font-size: x-large;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 70%;
}

.header-home-option-title:hover {
  opacity: 100%;
}

.header-home-option-year {
  opacity: 50%;
  font-size: medium;
}
</style>