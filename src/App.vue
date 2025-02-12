<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView } from 'vue-router';
import { useThemeStore } from './stores/theme';
import { storeToRefs } from 'pinia';
import ThemeChanger from './components/ThemeChanger.vue';

const themeStore = useThemeStore();
const { theme } = storeToRefs(themeStore);
const themeClass = ref<string>('');
watch(theme, (newVal) => (themeClass.value = `theme__${newVal}`), { immediate: true });
</script>

<template>
	<div :class="themeClass">
		<RouterView />
	</div>
</template>

<style scoped lang="scss">
$light: 'light';
$dark: 'dark';

:global(.theme__#{light}) {
	background: white;
	color: black;
}

:global(.theme__#{dark}) {
	background: darkslategray;
	color: white;
}
</style>
