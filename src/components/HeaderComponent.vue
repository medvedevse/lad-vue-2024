<template>
	<header :class="themeProp">
		<a href="#" class="theme-changer" @click="changeTheme"
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
			theme: { kind: 'dark' },
		};
	},
	emits: ['themeSwitcher'],
	methods: {
		changeTheme() {
			this.theme.kind === 'dark' ? (this.theme.kind = 'light') : (this.theme.kind = 'dark');
		},
	},
	watch: {
		'theme.kind': {
			handler(newVal, prevVal) {
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

.theme-changer {
	margin-left: auto;
	img {
		border-radius: 10px;
	}
}
</style>
