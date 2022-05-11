<template>
  <HeaderLayout>
    <h2 slot="left">购物</h2>
    <div class="center">
      <i class="bi bi-search" @click="search"></i>
      <input type="text" placeholder="请输入一点什么..." v-model="keywords" @keyup.enter="search">
    </div>
  </HeaderLayout>
</template>

<script>
import HeaderLayout from "../common/HeaderLayout";

export default {
  name: "HomeHeader",
  components: { HeaderLayout },
  data() {
    return {
      keywords: ""
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    search() {
      if (!this.keywords || this.keywords === this.$route.query.keywords) {
        return false;
      }
      this.$router.push(`/search?keywords=${this.keywords}`);
    }
  }
};
</script>

<style scoped>

.center {
  padding: 0 10px;
  height: 30px;
  width: 100%;
  border-radius: 20px;
  background-color: #fff;
}

.center input {
  /*background-color: red;*/
  width: 90%;
  height: 30px;
  padding-left: 10px;
}

</style>
