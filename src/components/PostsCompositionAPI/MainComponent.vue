<template>
	<main :class="props.themeProp">
		<h1>Посты Composition API</h1>
		<ul class="posts">
			<li class="post" v-for="(post, index) in compositionPosts.slice(0, 20)" :key="post.id">
				<div v-if="index < idx">
					<h2 class="post-title">
						{{ index + 1 + '. ' + post.title.replace(post.title[0], post.title[0].toUpperCase()) }}
					</h2>
					<div class="post-text">
						{{ post.body.replace(post.body[0], post.body[0].toUpperCase()) }}
					</div>
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
import { compositionPosts } from '@/data/posts';
import type { IMainComponentProps } from './types';

defineOptions({ name: 'MainComponent' });

const props = withDefaults(defineProps<IMainComponentProps>(), { themeProp: 'light' });

const tenPostsTitle: string = 'Показать первые 10';
const allPostsTitle: string = 'Показать все';
const idx = ref<number>(compositionPosts.length);

const showTenPosts = () => (idx.value = 10);
const showAllPosts = () => (idx.value = compositionPosts.length);
</script>

<style scoped>
.container {
	display: flex;
	margin-left: 34px;
	margin-bottom: 50px;
}

.posts {
	max-width: 80%;
	min-height: 60vh;
	list-style: none;
	padding-bottom: 0;
	margin-bottom: 20px;
}

.post-title {
	line-height: normal;
	margin-bottom: 10px;
}

@media (min-width: 640px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(2, 200px);
		gap: 30px;
	}
}

@media (min-width: 1024px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(3, 240px);
		gap: 40px;
	}
}

@media (min-width: 1280px) {
	.posts {
		display: grid;
		grid-template-columns: repeat(3, 280px);
		gap: 50px;
	}
}
</style>
