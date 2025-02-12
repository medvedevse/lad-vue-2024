<template>
	<div class="wrapper">
		<div class="controls-wrapper">
			<GoBack />
			<ThemeChanger />
		</div>
		<h1>Информация о посте</h1>
		<PostComponent />
	</div>
</template>

<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import PostComponent from '@/components/PostComponent.vue';
import ThemeChanger from '@/components/ThemeChanger.vue';
import { onBeforeRouteLeave } from 'vue-router';

defineOptions({ name: 'PostView' });

onBeforeRouteLeave((to, from, next) => {
	const exitToPosts = confirm('Вы уверены, что хотите выйти?');
	if (exitToPosts) next();
	else next(false);
});
</script>

<style scoped>
.wrapper {
	min-height: 100vh;
}

.controls-wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
