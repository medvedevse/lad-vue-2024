<template>
	<div class="wrapper">
		<div>
			<h1>Page 404</h1>
			<p>Oops, page is not found!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
defineOptions({ name: 'NotFoundComponent' });
</script>

<style scoped>
.wrapper {
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	h1 {
		margin: 0;
		text-align: center;
	}
}
</style>
