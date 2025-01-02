<template>
	<main :class="props.themeProp">
		<h1>Посты Composition API</h1>
		<ul class="posts">
			<li class="post" v-for="(post, index) in posts" :key="post.id">
				<div v-if="index < idx">
					<h2 class="post-title">{{ post.title }}</h2>
					<div class="post-text">{{ post.text }}</div>
				</div>
			</li>
		</ul>
		<div class="container">
			<ButtonComponent :title="tenPostsTitle" :click="showTenPosts" />
			<ButtonComponent :title="allPostsTitle" :click="showAllPosts" />
		</div>
	</main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ButtonComponent from '../ButtonComponent.vue';
import { posts } from '@/data/posts';
import type { IMainComponentProps } from './types';

defineOptions({ name: 'MainComponent' });

const props = withDefaults(defineProps<IMainComponentProps>(), { themeProp: 'light' });

const tenPostsTitle: string = 'Показать первые 10';
const allPostsTitle: string = 'Показать все';
const idx = ref<number>(posts.length);

const showTenPosts = () => (idx.value = 10);
const showAllPosts = () => (idx.value = posts.length);
</script>

<style scoped>
.container {
	display: flex;
	margin-left: 34px;
}

.posts {
	min-height: 60vh;
	list-style: none;
	padding-bottom: 0;
	margin-bottom: 20px;
}

@media (min-width: 640px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(2, 200px);
		gap: 20px;
	}
}

@media (min-width: 1024px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(3, 240px);
		gap: 20px;
	}
}

@media (min-width: 1280px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(4, 280px);
		gap: 20px;
	}
}
</style>
