<template>
	<button @click="click" class="btn">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';

export default defineComponent({
	name: 'ButtonComponent',
	props: {
		title: {
			type: String,
			default: 'Кнопка',
		},
		click: {
			type: Function as PropType<() => void>,
		},
	},
});
</script>

<style scoped>
.btn {
	margin: 6px;
}
</style>
