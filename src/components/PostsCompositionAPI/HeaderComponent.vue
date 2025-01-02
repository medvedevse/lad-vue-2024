<template>
	<header :class="props.themeProp">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</nav>
		<a href="#" class="theme-changer" @click="changeTheme"
			><img src="https://cdn-icons-png.flaticon.com/512/12180/12180746.png" alt="" width="30"
		/></a>
	</header>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import type { IHeaderComponentEmits, IHeaderComponentProps } from './types';

defineOptions({ name: 'HeaderComponent' });

const props = withDefaults(defineProps<IHeaderComponentProps>(), { themeProp: 'light' });

const savedTheme = localStorage.getItem('theme') as 'light' | 'dark';
const theme = ref<'light' | 'dark'>(savedTheme || 'dark');

const changeTheme = () => {
	theme.value === 'dark' ? (theme.value = 'light') : (theme.value = 'dark');
	localStorage.setItem('theme', theme.value);
};

const emits = defineEmits<IHeaderComponentEmits>();

watch(theme, (newValue: string) => emits('themeSwitcher', newValue), { immediate: true });
</script>

<style scoped>
header {
	display: flex;
}

nav {
	padding: 5px 10px;
}

.theme-changer {
	margin-left: auto;
	img {
		border-radius: 10px;
	}
}
</style>
