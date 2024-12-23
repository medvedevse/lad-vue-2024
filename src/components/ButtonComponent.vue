<template>
	<button @click="click" class="btn">{{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ButtonComponent',
	props: ['title', 'click'],
});
</script>

<style scoped>
.btn {
	margin: 6px;
}
</style>
