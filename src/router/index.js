import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout/index.vue";
import Home from "../views/home/Home.vue";

Vue.use(VueRouter);

/* 重复点击路由报错问题 */
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
	return originalPush.call(this, location).catch()
}

const routes = [{
    path: "/",
    component: Layout,
    redirect: '/home',
    children: [{
        path: "/home",
        name: "Home",
        component: Home,
        meta:{
          title:'首页'
        }
      },
      {
        path: "/category",
        name: "Category",
        component: () => import("../views/category/Category.vue"),
        meta:{
          title:'分类'
        }
      },
      {
        path: "/chat",
        name: "Chat",
        component: () => import("../views/chat/Chat.vue"),
        meta:{
          title:'聊天'
        }
      },
      {
        path: "/search",
        name: "Search",
        props: route => ({ keywords: route.query.keywords}),
        component: () => import("../views/search/Search.vue"),
        meta:{
          title:'搜索'
        }
      },
      {
        path: "/my",
        name: "My",
        component: () => import("../views/me/My.vue"),
        meta:{
          title:'个人中心'
        }
      },
    ]
  },

  {
    path: "*",
    name: "Error404",
    component: () => import("../views/error/404.vue"),
    meta:{
      title:'Not Found'
    }
  },

];

// 添加路由信息
console.log('router',routes)




const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// 全部路由导航
router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;