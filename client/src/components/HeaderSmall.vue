<template>
  <div class="header-small-container">
    <div class="menu-option-container">
      <div class="menu-option">
        <span class="menu-option-title">My Shows</span>
        <span class="menu-option-year">2021</span>
      </div>
      <div class="menu-option">
        <span class="menu-option-title">Winter</span>
        <span class="menu-option-year">2021</span>
      </div>
      <div class="menu-option">
        <span class="menu-option-title">Spring</span>
        <span class="menu-option-year">2021</span>
      </div>
      <div class="menu-option">
        <span class="menu-option-title">Summer</span>
        <span class="menu-option-year">2021</span>
      </div>
      <div class="menu-option">
        <span class="menu-option-title">Fall</span>
        <span class="menu-option-year">2021</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderSmall",
  setup() {},
};
</script>

<style>
.header-small-container {
  width: 100%;
  height: 13vmin;
  background: var(--yellow-primary);
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu-option-container {
  display: flex;
}

.menu-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  line-height: 1rem;
}

.menu-option-title {
  font-size: large;
  font-weight: bold;
  letter-spacing: 1px;
  opacity: 70%;
}

.menu-option-title:hover {
  opacity: 100%;
}

.menu-option-year {
  opacity: 50%;
  font-size: small;
}
</style>