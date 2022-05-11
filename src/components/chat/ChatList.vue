<template>
  <div class="chat">
    <!--  聊天列表-->
    <div class="chat-list">
      <div class="chat-item" v-for="(item,index) in chatList" :key="index">
        <div class="chat-avatar">
          <img :src="item.avatar" alt="">
        </div>
        <div class="chat-desc">
          <div class="chat-item-left">
            <p class="chat-user">{{ item.name }}</p>
            <p class="chat-content">{{ item.notice }}</p>
          </div>
          <div class="chat-item-right">
            <p class="chat-time">{{ item.date }}</p>
            <p class="chat-total"><span>{{ item.readTotal }}</span></p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chatList: [
        {
          id: 1,
          avatar: require("../../assets/images/avatar/avatar1.png"),
          name: "物流助手1",
          notice: "订单发货通知",
          date: "2022-5-11",
          readTotal: 10

        },
        {
          id: 2,
          avatar: require("../../assets/images/avatar/avatar2.png"),
          name: "物流助手2",
          notice: "订单发货通知2",
          date: "15:22:52",
          readTotal: 1
        },
        {
          id: 3,
          avatar: require("../../assets/images/avatar/avatar3.png"),
          name: "物流助手3",
          notice: "订单发货通知3",
          date: "15:22:52",
          readTotal: 1
        },
        {
          id: 4,
          avatar: require("../../assets/images/avatar/avatar4.png"),
          name: "物流助手5",
          notice: "订单发货通知5",
          date: "15:22:52",
          readTotal: 1
        }
      ]
    };
  }
};
</script>

<style scoped>

.chat-item {
  width: 100%;
  margin: 5px 0;
  display: flex;
  /*background-color: skyblue;*/
}

.chat-item img {
  width: 44px;
  height: 44px;
  border-radius: 50%;
}


.chat-item .chat-desc {
  /*background-color: #000777;*/
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

}


.chat-desc .chat-item-right, .chat-desc .chat-item-left {
  margin: 0 10px;
  padding: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /*align-items: center;*/
}

.chat-item-left {
  align-items: flex-start;
  /*background-color: darkred;*/
  width: 70%;
  overflow: hidden;
}

.chat-user {
  font-size: 16px;
  line-height: 20px;
}

.chat-time, .chat-content {
  font-size: 10px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.4);
}

.chat-item-right {
  width: 30%;
  background-color: #fff;
}

.chat-total span {
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 10px;
  height: 10px;
  background-color: red;
  color: white;
  font-size: 8px;
  padding: 3px;
  font-weight: 100;
}

</style>
