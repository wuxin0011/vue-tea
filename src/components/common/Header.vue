<template>
<div class="header">
    <!-- 左侧内容 -->
    <div class="left" v-if="$route.name==='Search'">
        <i class="bi bi-chevron-left cursor" @click="goBack "></i>
    </div>
    <!-- 中间内容 -->
    <div class="center">
        <i class="bi bi-search cursor" @click="search"></i>
        <input type="text" placeholder="请输入关键字...." @keyup.enter="search" v-model="keywords">
    </div>
    <!-- 右侧内容 -->
    <div class="right" v-if="$route.name==='Search'">
        <i class="bi bi-chevron-right cursor"></i>
    </div>
</div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            keywords: ''
        }
    },
    methods: {
        goBack() {
            this.$router.back()
        },
        search() {
            if (!this.keywords || this.keywords === this.$route.query.keywords) {
                return false
            }
            this.$router.push(`/search?keywords=${this.keywords}`)
        }
    },
}
</script>

<style scoped>
.header {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 44px !important;
    background-color: orangered;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 100;
}

.header .center {
    background-color: #fff;
    border-radius: 20px;
    width: 80% !important;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center i {
    padding-left: 20px;
}

.header .center input {
    width: 100%;
    padding: 0 20px;
}
</style>
