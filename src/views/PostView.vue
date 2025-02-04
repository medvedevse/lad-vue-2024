<template>
	<GoBack />
	<h1>Информация о посте</h1>
	<PostComponent />
</template>

<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import PostComponent from '@/components/PostComponent.vue';
import { onBeforeRouteLeave } from 'vue-router';

defineOptions({ name: 'PostView' });

onBeforeRouteLeave((to, from, next) => {
	const exitToPosts = confirm('Вы уверены, что хотите выйти?');
	if (exitToPosts) next();
});
</script>

<style scoped></style>
