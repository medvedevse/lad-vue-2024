<template>
	<div class="controls-wrapper">
		<GoBack />
		<ThemeChanger />
	</div>
	<h1>Каталог постов</h1>
	<PostCatalog />
</template>

<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import PostCatalog from '@/components/PostCatalog.vue';
import ThemeChanger from '@/components/ThemeChanger.vue';

defineOptions({ name: 'PostsView' });
</script>

<style scoped lang="scss">
.controls-wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
