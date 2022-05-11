<template>
  <div class="product-list">
    <div class="product-item cursor" v-for="(item,index) in productList" :key="index" @click="toDetail(item)">
      <img :src="item.img" alt="">
      <div class="bottom">
        <p class="desc">{{ item.desc }}</p>
        <p class="software">{{ item.software }}</p>
        <p class="price">{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductList",
  props: {
    productList: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            img: require("../../assets/images/tea/1.jpg"),
            desc: "【超低价抢购】 金乡紫皮",
            software: "卷后付款",
            softwarePrice: 1,
            price: 100,
            total: 10000
          },
          {
            id: 2,
            img: require("../../assets/images/tea/2.jpg"),
            desc: "【超低价抢购】 金乡紫皮",
            software: "卷后付款",
            softwarePrice: 1,
            price: 100,
            total: 10000
          },
          {
            id: 3,
            img: require("../../assets/images/tea/7.jpg"),
            desc: "【超低价抢购】 金乡紫皮",
            software: "卷后付款",
            softwarePrice: 1,
            price: 100,
            total: 10000
          },
          {
            id: 4,
            img: require("../../assets/images/tea/3.jpg"),
            desc: "【超低价抢购】 金乡紫皮",
            software: "卷后付款",
            softwarePrice: 1,
            price: 100,
            total: 10000
          }
        ];
      }
    }
  },
  methods: {
    toDetail(item) {
      console.log(item);
    }
  }
};
</script>
<style scoped>
.product-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}


.product-item {
  border: 1px solid burlywood;
  width: 45%;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px;
}

.product-item img {
  height: 70%;
  width: 100%;
}

.product-item .bottom {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

</style>