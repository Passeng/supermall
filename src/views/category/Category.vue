<template>
  <div class="wrapper">
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
import { backTopMixin } from "@/common/mixin";

export default {
  name: "Category",
  mixins: [backTopMixin],
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;
}
</style>
