import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import About from '@/views/About.vue';

const routes = [
    {
        name: 'Home',
        path: '/',
        component: Home, 
        meta: {
            title: 'Home',
            description: 'Welcome on my portfolio!'
        },
    }, {
        name: 'About',
        path: '/About',
        component: About, 
        meta: {
            title: 'About',
            description: 'Welcome on my portfolio!'
        },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.afterEach((from, to) => {
    console.log(from, to);
    document.title = from.meta.title;
})

export default router;