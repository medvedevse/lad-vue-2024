<template>
	<header :class="themeProp">
		<nav>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/posts">Posts</RouterLink>
			<RouterLink to="/users">Users</RouterLink>
		</nav>
		<button class="theme-changer" @click="changeTheme">
			<img
				src="https://cdn-icons-png.flaticon.com/512/12180/12180746.png"
				alt="Изменить тему"
				width="30"
			/>
		</button>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HeaderComponent',
	data() {
		return {
			theme: localStorage.getItem('theme') || 'dark',
		};
	},
	emits: ['themeSwitcher'],
	methods: {
		changeTheme() {
			this.theme === 'dark' ? (this.theme = 'light') : (this.theme = 'dark');
			localStorage.setItem('theme', this.theme);
		},
	},
	watch: {
		theme: {
			handler(newVal) {
				this.$emit('themeSwitcher', newVal);
			},
			immediate: true,
		},
	},
	props: {
		themeProp: {
			type: String,
			default: 'light',
		},
	},
});
</script>

<style scoped>
header {
	display: flex;
}

nav {
	padding: 5px 10px;
}

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
