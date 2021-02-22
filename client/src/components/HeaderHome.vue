<template>
  <div class="header-home-container">
    <div class="header-home-options-container">
      <div class="header-home-option" @click="this.$router.push('/')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/' ? '1.0' : '0.7',
          }"
          >My Shows</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/winter')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/winter' ? '1.0' : '0.7',
          }"
          >Winter</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/spring')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/spring' ? '1.0' : '0.7',
          }"
          >Spring</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/summer')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/summer' ? '1.0' : '0.7',
          }"
          >Summer</span
        >
        <span class="header-home-option-year">{{ year }}</span>
      </div>
      <div class="header-home-option" @click="this.$router.push('/fall')">
        <span
          class="header-home-option-title"
          :style="{
            opacity: this.$route.path === '/fall' ? '1.0' : '0.7',
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
  opacity: 0.7;
}

.header-home-option-title:hover {
  opacity: 1;
}

.header-home-option-year {
  opacity: 0.5;
  font-size: medium;
}
</style>