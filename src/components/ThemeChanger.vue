<template>
	<button class="theme-changer" @click="changeTheme">
		<img
			src="https://cdn-icons-png.flaticon.com/512/12180/12180746.png"
			alt="Изменить тему"
			width="30"
		/>
	</button>
</template>

<script setup lang="ts">
import { useThemeStore } from '@/stores/theme';
import { defineComponent } from 'vue';

defineComponent({ name: 'ThemeChanger' });

const themeStore = useThemeStore();
const { changeTheme } = themeStore;
</script>

<style scoped lang="scss">
.theme-changer {
	border: none;
	background: transparent;
	cursor: pointer;
	margin-left: auto;
	img {
		border-radius: 10px;
	}
}
</style>
