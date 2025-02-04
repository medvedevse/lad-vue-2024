<template>
	<a href="#" @click="router.back()" class="back-link">
		<img
			src="https://cdn-icons-png.flaticon.com/512/54/54623.png "
			alt="Назад"
			width="26"
			height="26"
		/>
	</a>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<style scoped>
.back-link {
	padding: 0 8px;
}
</style>
