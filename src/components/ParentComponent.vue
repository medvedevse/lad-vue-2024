<template>
	<div class="parent">
		<h1>Parent</h1>
		<ChildComponent @test="console.log($event)" />
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ChildComponent from './ChildComponent.vue';

export default defineComponent({
	name: 'ParentComponent',
	components: { ChildComponent },
});
</script>

<style scoped>
.parent {
	width: 100%;
	background: cadetblue;
	border: 1px solid black;
}
</style>
