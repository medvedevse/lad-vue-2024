<template>
	<div class="child" :style="{ color: count > 5 ? 'yellow' : 'green' }">{{ title }}</div>
	<button class="counter" @click="count++" :style="{ background }">{{ count }}</button>
	<div class="old-count">{{ oldCount }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ChildComponent',
	data() {
		return {
			title: 'Child',
			count: 0,
			oldCount: 0,
			background: 'white',
		};
	},
	computed: {
		doubleCount() {
			return this.count * 2;
		},
	},
	emits: ['test'],
	watch: {
		doubleCount(newVal, prevVal) {
			this.oldCount = prevVal;
			this.$emit('test', newVal);

			if (newVal === 10) this.background = 'red';
		},
	},
});
</script>

<style scoped>
.child {
	background: gainsboro;
}
</style>
