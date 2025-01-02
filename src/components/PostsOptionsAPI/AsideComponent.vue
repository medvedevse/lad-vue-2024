<template>
	<aside :class="themeProp">Сайдбар</aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'AsideComponent',
	props: {
		themeProp: {
			type: String,
			default: 'light',
		},
	},
});
</script>

<style scoped>
aside {
	width: 100%;
}
</style>
