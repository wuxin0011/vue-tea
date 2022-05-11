<template>
  <div class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item,index) in imgList" :key="index">
        <img :src="item.url" alt="">
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
<script>
// import Swiper from 'Swiper'
export default {
  name: "Swiper",
  data() {
    return {
      imgList: [
        {
          id: 1,
          url: require("../../assets/images/tea/1.jpg")
        }, {
          id: 2,
          url: require("../../assets/images/tea/2.jpg")
        },
        {
          id: 3,
          url: require("../../assets/images/tea/3.jpg")
        },
        {
          id: 4,
          url: require("../../assets/images/tea/7.jpg")
        }

      ]
    };
  },
  mounted() {
    // var mySwiper = new Swiper(".swiper", {
    //   direction: "vertical", // 垂直切换选项
    //   loop: true, // 循环模式选项
    //
    //   // 如果需要分页器
    //   pagination: {
    //     el: ".swiper-pagination"
    //   },
    //
    //   // 如果需要前进后退按钮
    //   navigation: {
    //     nextEl: ".swiper-button-next",
    //     prevEl: ".swiper-button-prev"
    //   },
    //
    //   // 如果需要滚动条
    //   scrollbar: {
    //     el: ".swiper-scrollbar"
    //   }
    // });
  }
};
</script>
<style scoped>

.swiper-wrapper{
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.swiper-wrapper, .swiper-wrapper .swiper-slide, .swiper-slide img {
  height: 300px;
}

.swiper-slide img{
  width: 400px;
}

</style>