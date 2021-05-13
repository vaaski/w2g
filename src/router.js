import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/r/:id",
      name: "room",
      redirect: to => {
        window.location.href = `https://resync.tv/${to.params.id}`
      },
    },
    {
      path: "/room/:id",
      redirect: "/r/:id",
    },
    {
      path: "/signup",
      name: "signup",
      component: require("./views/signup.vue").default,
    },
    {
      path: "/",
      // component: require("./views/frontpage.vue").default,
      redirect: () => (window.location.href = "https://resync.tv"),
    },
    {
      path: "/iframe",
      component: require("./views/iframe.vue").default,
    },
    {
      path: "*",
      // redirect: "/",
      redirect: () => (window.location.href = "https://resync.tv"),
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue"),
    // },
  ],
})
