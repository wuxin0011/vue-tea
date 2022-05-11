<template>
  <div class="header">
    <!-- 左侧内容 -->
    <div class="left">
      <slot name="left">

      </slot>
    </div>
    <!-- 中间内容 -->
    <div class="center">
      <slot><span>默认中间内容</span></slot>
    </div>
    <!-- 右侧内容 -->
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderLayout"
};
</script>

<style scoped>
.header {
  width: 100%;
  height: 44px !important;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.center, .left, .right {
  display: flex;
  justify-content: center;
  align-items: center;
}

.center {
  flex: 3;
  background-color: #999fff;
  height: 100%;

}

.right, .left {
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: skyblue;
}


</style>
