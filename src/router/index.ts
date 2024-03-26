import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SocialMediaIndexView from '../views/SocialMediaIndexView.vue'
import SocialMediaView from '../views/SocialMediaView.vue'
import WebsiteView from '../views/WebsiteView.vue'
import ContributeView from '../views/ContributeView.vue'
import ReportView from '../views/ReportView.vue'
import DocsView from '../views/DocsView.vue'
import PolicyView from '../views/PolicyView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'error',
            component: () => import('../views/ErrorView.vue')
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/social-media',
            name: 'social-media-index',
            component: SocialMediaIndexView
        },
        {
            path: '/social-media/:network',
            name: 'social-media',
            component: SocialMediaView
        },
        {
            path: '/websites/:category',
            name: 'websites',
            component: WebsiteView
        },
        {
            path: '/contribute',
            name: 'contribute',
            component: ContributeView
        },
        {
            path: '/report',
            name: 'report',
            component: ReportView
        },
        {
            path: '/docs',
            name: 'docs',
            component: DocsView
        },
        {
            path: '/policy',
            name: 'policy',
            component: PolicyView
        },
    ]
})

export default router
