export default {
  root: "#app",
  routes: [
    {
      path: "/navbar",
      component: () => import("./pages/navbar"),
    },
    {
      path: "/foo",
      component: () => import("./pages/foo"),
    },
  ],
};
