<template>
  <div class="home">
    <!-- 头部 -->
    <HomeHeader></HomeHeader>
    <Swiper></Swiper>
  </div>
</template>

<script>
import HomeHeader from "../../components/home/Header.vue";
import Swiper from "../../components/home/Swiper";

export default {
  name: "Home",
  components: {
    Swiper,
    HomeHeader
  }
};
</script>
<style scoped>
.home-header {
  background-color: var(--background-color) !important;
}

</style>
