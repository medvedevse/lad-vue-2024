<template>
	<div class="wrapper">
		<p v-for="post in posts" :key="post.id" class="post-title" @click="redirectToPost(post.id)">
			{{ post.id + '. ' + post.title[0].toUpperCase() + post.title.slice(1) }}
		</p>
	</div>
</template>

<script setup lang="ts">
import { getPosts, type IPost } from '@/data/posts';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

defineOptions({ name: 'PostCatalog' });
const router = useRouter();

const posts = ref<IPost[]>();

const redirectToPost = (id: number) => {
	router.push({
		name: 'post',
		params: {
			post: id,
		},
	});
};

onMounted(async () => {
	const { data } = await getPosts();
	posts.value = data;
});
</script>

<style scoped>
.wrapper {
	padding: 0 30px;
}

.post-title {
	cursor: pointer;
}
</style>
