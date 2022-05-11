<template>
  <div class="my">
    <div class="header">
      <img src="../../assets/images/avatar/avatar1.png" alt="">
      <div class="header-left">
        <p>username
          <i class="bi bi-chat"></i>
        </p>
      </div>
    </div>
    <Order title="我的订单"></Order>
    <Order title="我的服务"></Order>
    <ProductList></ProductList>
  </div>
</template>

<script>
import Order from "../../components/me/Order";
import ProductList from "../../components/common/ProductList";

export default {
  components: { ProductList, Order }
};
</script>

<style scoped>
.header {
  width: 100%;
  /*background-color: skyblue;*/
  height: 55px;
  display: flex;
}

.header-left {
  /*background-color: deepskyblue;*/
  width: 100%;
  display: flex;
}

.header-left p {
  margin-left: 10px;
  margin-top: 10px;
  font-size: 18px;
}

.header img {
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
}


</style>

