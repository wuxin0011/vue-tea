<template>
<div class="home">
    <!-- 头部 -->
    <Header />
    <Nav />
    <Icons />
</div>
</template>

<script>
import Nav from "../components/home/Nav.vue";
import Header from '../components/common/Header.vue';
import Icons from "../components/home/Icons.vue";
export default {
    name: "Home",
    components: {
        Header,
        Nav,
        Icons
    }
};
</script>
