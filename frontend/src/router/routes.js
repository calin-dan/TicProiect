
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: "/login",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Login.vue")
      }
    ],
    // beforeEnter: (to, from, next) => {
    //   if (window.sessionStorage.getItem("token") === "") {
    //     next("/login");
    //   } else {
    //     next();
    //   }
    // }
  },
  {
    path: "/register",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/Register.vue")
      }
    ],
  },
  {
    path: "/about-us",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/AboutUs.vue")
      }
    ],
  },
  // { path: '/login', component: () => import('pages/Login.vue') },
  // { path: '/register', component: () => import('pages/Register.vue') },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
