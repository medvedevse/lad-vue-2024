<template>
	<div class="post-body" v-if="post?.body">
		{{ post.body[0].toUpperCase() + post.body.slice(1) }}
	</div>
</template>

<script setup lang="ts">
import { getPost, type IPost } from '@/data/posts';
import { AxiosError } from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({ name: 'PostComponent' });
const route = useRoute();

const post = ref<IPost>();
const isLoading = ref<boolean>(false);
const isError = ref<boolean>(false);
const postId: number = Number(route.params.post);

onMounted(async () => {
	isError.value = false;
	isLoading.value = true;
	try {
		const { data } = await getPost(postId);
		post.value = data;
	} catch (err) {
		if (err instanceof AxiosError) {
			isError.value = true;
			console.error(err.message);
		}
	} finally {
		isLoading.value = false;
	}
});
</script>

<style scoped>
.post-body {
	padding: 0 30px;
}
</style>
