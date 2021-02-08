<template>
  <div class="card"></div>
</template>

<script>
export default {
  name: "MyShowCard",
};
</script>

<style>
.card {
  width: 100%;
  height: 12vmin;
  background: var(--background-secondary);
  color: var(--text-color);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin-top: 20px;
  background-image: url("https://s4.anilist.co/file/anilistcdn/media/anime/banner/97938-lKCFtaxOLctp.png");
  background-size: 40%;
  background-repeat: no-repeat;
}
</style>