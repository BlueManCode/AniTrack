<template>
  <div class="cardview">
    <img :src="res.coverImage.large" />
    <div>{{ res.coverImage.extraLarge }}</div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["res"],
};
</script>

<style>
.cardview {
  width: 100%;
  height: 100%;
}
</style>