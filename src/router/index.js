import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Faq from "@/components/Faq";
import About from "@/components/About";
import Features from "@/components/Features";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/faq",
      name: "Faq",
      component: Faq
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/features",
      name: "Features",
      component: Features
    }
  ]
});
