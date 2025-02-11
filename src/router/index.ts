import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import NotFoundComponent from '@/components/NotFoundComponent.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue'),
		},
		{
			path: '/posts',
			name: 'posts',
			component: () => import('../views/PostsView.vue'),
		},
		{
			path: '/post/:post',
			name: 'post',
			component: () => import('../views/PostView.vue'),
		},
		{
			path: '/users',
			name: 'users',
			component: () => import('../views/UsersView.vue'),
		},
		{
			path: '/:pathMatch(.*)',
			component: NotFoundComponent,
		},
	],
});

export default router;
