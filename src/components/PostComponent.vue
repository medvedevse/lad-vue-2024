<template>
	<div class="post-body" v-if="post?.body">
		{{ post.body[0].toUpperCase() + post.body.slice(1) }}
	</div>
</template>

<script setup lang="ts">
import { getPost, type IPost } from '@/data/posts';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

defineOptions({ name: 'PostComponent' });
const route = useRoute();

const post = ref<IPost>();
const postId: number = Number(route.params.post);

onMounted(async () => {
	const { data } = await getPost(postId);
	post.value = data;
});
</script>

<style scoped>
.post-body {
	padding: 0 30px;
}
</style>
