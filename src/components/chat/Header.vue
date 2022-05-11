<template>
  <div>
    <HeaderLayout>
      <h2>聊天</h2>
      <div slot="right">
        <i class="bi bi-chat"></i>
        发起
      </div>
    </HeaderLayout>
  </div>
</template>
<script>
import HeaderLayout from "../common/HeaderLayout";

export default {
  name: "ChatHeader",
  components: { HeaderLayout }
};
</script>
<style scoped>

</style>