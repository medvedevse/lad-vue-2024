<template>
	<GoBack />
	<h1>Каталог постов</h1>
	<PostCatalog />
</template>

<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import PostCatalog from '@/components/PostCatalog.vue';

defineOptions({ name: 'PostsView' });
</script>

<style scoped></style>
