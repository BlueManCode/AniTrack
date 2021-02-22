<template>
  <div class="header-popular-seasons-container">
    <div class="header-popular-seasons-option-container">
      <div
        class="header-popular-seasons-option"
        @click="this.$router.push('/')"
      >
        <span
          class="header-popular-seasons-option-title"
          :style="{
            opacity: this.$route.path === '/' ? '1.0' : '0.7',
          }"
          >My Shows</span
        >
        <span class="header-popular-seasons-option-year">{{ year }}</span>
      </div>
      <div
        class="header-popular-seasons-option"
        @click="this.$router.push('/winter')"
      >
        <span
          class="header-popular-seasons-option-title"
          :style="{
            opacity: this.$route.path === '/winter' ? '1.0' : '0.7',
          }"
          >Winter</span
        >
        <span class="header-popular-seasons-option-year">{{ year }}</span>
      </div>
      <div
        class="header-popular-seasons-option"
        @click="this.$router.push('/spring')"
      >
        <span
          class="header-popular-seasons-option-title"
          :style="{
            opacity: this.$route.path === '/spring' ? '1.0' : '0.7',
          }"
          >Spring</span
        >
        <span class="header-popular-seasons-option-year">{{ year }}</span>
      </div>
      <div
        class="header-popular-seasons-option"
        @click="this.$router.push('/summer')"
      >
        <span
          class="header-popular-seasons-option-title"
          :style="{
            opacity: this.$route.path === '/summer' ? '1.0' : '0.7',
          }"
          >Summer</span
        >
        <span class="header-popular-seasons-option-year">{{ year }}</span>
      </div>
      <div
        class="header-popular-seasons-option"
        @click="this.$router.push('/fall')"
      >
        <span
          class="header-popular-seasons-option-title"
          :style="{
            opacity: this.$route.path === '/fall' ? '1.0' : '0.7',
          }"
          >Fall</span
        >
        <span class="header-popular-seasons-option-year">{{ year - 1 }}</span>
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
.header-popular-seasons-container {
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

.header-popular-seasons-option-container {
  display: flex;
}

.header-popular-seasons-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vmin;
  line-height: 2vmin;
  cursor: header-popular-seasonsnter;
}

.header-popular-seasons-option-title {
  font-size: x-large;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 0.7;
}

.header-popular-seasons-option-title:hover {
  opacity: 1;
}

.header-popular-seasons-option-year {
  opacity: 0.5;
  font-size: medium;
}
</style>