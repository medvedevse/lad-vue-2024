<template>
	<div class="wrapper">
		<h2 class="input-block-header">Input Block</h2>
		<input type="text" v-model="text" />
		<div class="text-block">{{ text }}</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'InputOptionsAPI',
	data() {
		return {
			text: '',
		};
	},
});
</script>

<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.input-block-header {
	color: hsla(160, 100%, 37%, 1);
	font-size: 24px;
	font-weight: bold;
}

.text-block {
	word-break: break-all;
	height: 100px;
	overflow-y: auto;
}
</style>
