<template>
  <div class="layout">
    <!-- 内容 -->
    <div class="main m-padding-top-44">
      <router-view />
    </div>
    <!-- 底部导航 -->
    <Tabbar />
  </div>
</template>

<script>
import Tabbar from "../components/common/Tabbar.vue";

export default {
  name: "Index",
  components: {
    Tabbar
  }
};
</script>

<style scoped>
.layout {
  position: relative;
  min-height: 100vh;
  width: 100%;
}
</style>
