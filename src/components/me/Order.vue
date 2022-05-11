<template>
  <div class="order">
    <h2>{{ title }}</h2>
    <div class="order-list">
      <div class="order-item" v-for="(item,index) in orderList" :key="index">
        <i class="bi" :class="`${item.icon}`"></i>
        <p>{{ item.desc }}</p>
      </div>
    </div>

  </div>
</template>


<script>
export default {
  name: "Order",
  props: {
    title: {
      type: String,
      default: "我的内容"
    },
    orderList: {
      type: Array,
      default: () => {
        return [
          {
            id: 1,
            icon: "bi-archive",
            desc: "待付款"
          },
          {
            id: 1,
            icon: "bi-archive",
            desc: "待付款"
          },
          {
            id: 1,
            icon: "bi-archive",
            desc: "待付款"
          },
          {
            id: 1,
            icon: "bi-archive",
            desc: "待付款"
          }
        ];
      }
    }
  }
};
</script>

<style scoped>
.order{
  border-bottom: 10px solid rgba(0,0,0,0.2);
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

.order {
  height: 90px;
  display: flex;
  flex-direction: column;

}

.order h2 {
  flex: 1;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  height: 30%;
}

.order-list {
  flex: 3;
  height: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
}
</style>

