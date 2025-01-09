<template>
	<main :class="themeProp">
		<h1>Посты Options API</h1>
		<ul class="posts">
			<li class="post" v-for="(post, index) in posts" :key="post.id">
				<div v-if="index < idx">
					<h2 class="post-title">{{ post.title }}</h2>
					<div class="post-text">{{ post.body }}</div>
				</div>
			</li>
		</ul>
		<div class="container">
			<ButtonComponent :title="tenPostsTitle" :click="showTenPosts" />
			<ButtonComponent :title="allPostsTitle" :click="showAllPosts" />
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ButtonComponent from '../ButtonComponent.vue';
import { optionsPosts } from '@/data/posts';

export default defineComponent({
	name: 'MainComponent',
	components: { ButtonComponent },
	data() {
		return {
			tenPostsTitle: 'Показать первые 10',
			allPostsTitle: 'Показать все',
			posts: optionsPosts,
			idx: optionsPosts.length,
		};
	},
	methods: {
		showTenPosts() {
			this.idx = 10;
		},
		showAllPosts() {
			this.idx = optionsPosts.length;
		},
	},
	props: {
		themeProp: {
			type: String,
			default: 'light',
		},
	},
});
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
