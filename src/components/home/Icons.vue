<template>
<div class="icons">
    <ul>
        <li v-for="(item,index) in iconsList" :key="index">
            <img :src="item.imgUrl" alt="">
            <span>{{item.content}}</span>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Icons',
    data() {
        return {
            iconsList: [{
                id: 1,
                content: '限时秒杀',
                imgUrl: 'https://cdn.jsdelivr.net/gh/wuxin0011/wuxin@main//blog-resource/typora/image-20220430105808595.png'

            }]
        }
    },
}
</script>

<style scoped>
.icons {
    width: 100%;
    height: 100px !important;
    background-color: green;
}

.icons ul li {
    display: flex;
}

.icons ul li {}
</style>
