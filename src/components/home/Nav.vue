<template>
<div class="nav">
    <ul class="nav-ul">
        <li v-for="(item,index) in navList" :key="index">
            {{item.title}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Nav',
    data() {
        return {
            navList: [{
                    id: 1,
                    title: '推荐',
                },
                {
                    id: 2,
                    title: '百货',
                },
                {
                    id: 3,
                    title: '食品',
                },
                {
                    id: 4,
                    title: '男装',
                },
                {
                    id: 5,
                    title: '手机',
                },
                {
                    id: 6,
                    title: '学习',
                },
                {
                    id: 7,
                    title: '内容',
                },
                {
                    id: 8,
                    title: '游戏',
                },
                {
                    id: 9,
                    title: '内容1',
                },
                {
                    id: 10,
                    title: '内容2',
                },

            ]
        }
    },
}
</script>

<style scoped>
.nav {
    position: absolute;
    width: 100%;
    /* background-color: blanchedalmond; */
    overflow: hidden;
}

.nav-ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
}

.nav-ul li {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px !important;
    height: 44px !important;
}
</style>
