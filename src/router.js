import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import ContactsView from './views/ContactsView.vue';
import ProjectsView from './views/ProjectsView.vue';
import SingleProjectView from './views/SingleProjectView.vue';
import NotFound from './views/NotFound.vue';

const routes = [
    { path: '/', component: HomeView },
    { path: '/about', component: AboutView },
    { path: '/contacts', component: ContactsView },
    { path: '/projects', component: ProjectsView },
    { path: '/projects/:slug', name: 'project', component: SingleProjectView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export { router }