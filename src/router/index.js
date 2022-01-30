import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";


const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: '/blog',
        name: 'blog',
        component: () =>
            import ('../views/Blog/Index.vue')
    },
    {
        path: '/blog/new',
        name: 'create-blog',
        component: () =>
            import ('../views/Blog/Create.vue')
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;