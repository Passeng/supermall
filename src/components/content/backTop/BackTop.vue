<template>
  <div class="back-top">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
};
</script>

<style scoped>
.back-top {
  /* display: flex; */
  position: fixed;
  right: 8px;
  bottom: 55px;
}
.back-top img {
  width: 43px;
  height: 43px;
}
</style>
