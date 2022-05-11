<template>
<div class="search">
    <Header></Header>
    <div class="search-history" v-if="historyList">
        <div class="history-header">
            <span> <i class="bi bi-clock"></i> 历史搜索</span>
            <span @click="deleteHistory" class="cursor">清空历史</span>
        </div>
        <div class="history-list">
            <ul>
                <li v-for="(item, index) in historyList" :key="index">
                    {{ item }}
                </li>
            </ul>
        </div>
    </div>
    <div v-else>暂无历史记录 {{ typeof historyList }}</div>
</div>
</template>

<script>
import Header from "@/components/home/Header.vue";
import {
    setStore,
    getStore,
    remove,
} from "@/util/localStore.js";
export default {
    name: "Search",
    components: {
        Header,
    },
    data() {
        return {
            keywords: "",
            historyList: [],
            list: [],
        };
    },
    created() {
        this.keywords = this.$route.query.keywords || "";
        this.historyList = getStore("history") || [];
        this.queryList();
    },
    methods: {
        queryList() {
            // 根据关键词搜索内容
            console.log("查询关键词内容为：", this.keywords);
            this.historyList.push(this.keywords)
            setStore('history', this.historyList)
        },
        deleteHistory() {
            remove("history");
        },
    },
};
</script>

<style scoped>
.search {
    width: 100%;
    background-color: #cdcdcd;
    height: 100vh;
}

.history-header {
    height: 44px;
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
}

.history-header span {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    height: 30px;
    padding: 0 10px;
}

</style>
