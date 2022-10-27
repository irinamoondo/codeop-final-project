import Home from "./views/Home.vue"
import Beer from "./views/Beer.vue"
import NotFound from "./views/NotFound.vue";

export const routes = [
    { path: "/", component: Home },
    { path: "/beers/:id", component: Beer, props: true },
    { path: "/:path(.*)", component: NotFound },
]