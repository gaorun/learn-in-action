export default {
  root: "#app",
  pathname: "/learn-in-action(\/)?",
  routes: [
    {
      hash: "/navbar",
      component: () => import("./pages/navbar"),
    },
    {
      hash: "/foo",
      component: () => import("./pages/foo"),
    },
    {
      hash: "/",
      component: () => import("./pages/foo"),
    },
  ],
};
