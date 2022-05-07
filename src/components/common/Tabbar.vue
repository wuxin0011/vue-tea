<template>
<div class="tabbar">
    <ul>
        <li v-for="(item, index) in tabbarList" :key="index" @click="toTab(item)">
            <i class="bi" :class="`${item.icon}`"></i>
            <span> {{ item.name }}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: "Tabbar",
    data() {
        return {
            tabbarList: [{
                    id: 1,
                    name: "首页",
                    path: "/home",
                    icon: "bi-house",
                },
                {
                    id: 2,
                    name: "分类",
                    path: "/category",
                    icon: "bi-card-text",
                },
                {
                    id: 3,
                    name: "聊天",
                    path: "/chat",
                    icon: "bi-chat-dots",
                },
                {
                    id: 4,
                    name: "个人中心",
                    path: "/my",
                    icon: "bi-person",
                },
            ],
        };
    },
    methods: {
        toTab(item) {
            this.$router.replace(item.path);
        },
    },
};
</script>

<style scoped>
.tabbar {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    z-index: 100;
}

.tabbar ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 44px;
}

.tabbar ul li {
    cursor: pointer;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 12px !important;
}

.tabbar ul li i,
tabbar ul li span {
    color: #000fff;
}

.actived {
    color: red;
}

.bi {
    font-size: 16px;
}
</style>
