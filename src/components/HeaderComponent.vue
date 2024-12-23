<template>
	<header :class="themeProp">
		<a href="#" @click="changeTheme"
			><img src="https://cdn-icons-png.flaticon.com/512/12180/12180746.png" alt="" width="30"
		/></a>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HeaderComponent',
	data() {
		return {
			theme: 'light',
		};
	},
	emits: ['themeSwitcher'],
	methods: {
		changeTheme() {
			this.theme === 'dark' ? (this.theme = 'light') : (this.theme = 'dark');
		},
	},
	watch: {
		theme(newVal, prevVal) {
			this.$emit('themeSwitcher', newVal);
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

a {
	margin-left: auto;
}

img {
	border-radius: 10px;
}
</style>
