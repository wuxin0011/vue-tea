<template>
<div class="error">
    <router-link to="/home">页面未找到！</router-link>
</div>
</template>

<script>
export default {
    name: 'Error404'
}
</script>

<style scoped>
.error {
    position: relative;
    min-height: 100vh !important;
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}

a {
    font-size: 24px !important;
    color: black;
}
</style>
