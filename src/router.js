import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import RegisterEvents from "./views/RegisterEvents.vue";
import RegisterTransparency from "./views/RegisterTransparency.vue";
import Profile from "./views/Profile.vue";
import ForgotPassword from "./views/ForgotPassword.vue";  
import ResetPassword from "./views/ResetPassword.vue";  
import About from "./views/About.vue"; 
import History from "./views/History.vue"; 
import Transparency from "./views/Transparency.vue"; 

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      },
      alias: ['/team', '/donate', '/services', '/home', '/app']
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/about",
      name: "about",
      components: {
        header: AppHeader,
        default: About,
        footer: AppFooter
      }
    },
    {
      path: "/history",
      name: "history",
      components: {
        header: AppHeader,
        default: History,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        default: Login
      }
    },
    {
      path: "/forgotpassword",
      name: "ForgotPassword",
      components: {
        default: ForgotPassword
      }
    },
    {
      path: "/resetpassword",
      name: "ResetPassword",
      components: {
        default: ResetPassword
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        // header: AppHeader,
        default: Register,
        // footer: AppFooter
      }
    },
    {
      path: "/registerevents",
      name: "registerEvents",
      components: {
        header: AppHeader,
        default: RegisterEvents,
        footer: AppFooter
      }
    },
    {
      path: "/registertransparency",
      name: "RegisterTransparency",
      components: {
        header: AppHeader,
        default: RegisterTransparency,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "Profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/transparency",
      name: "Transparency",
      components: {
        header: AppHeader,
        default: Transparency,
        footer: AppFooter
      }
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
