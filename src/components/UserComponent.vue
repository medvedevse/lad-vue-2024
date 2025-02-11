<template>
	<div class="user">
		<div>{{ position + '. ФИО: ' + name }},</div>
		<div>Ник: {{ username }},</div>
		<div>Почта: {{ email }}</div>
	</div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';

interface IUserComponentProps {
	position: number;
	name: string;
	username: string;
	email: string;
}

defineComponent({ name: 'UserComponent' });

defineProps<IUserComponentProps>();
</script>

<style scoped lang="scss">
.user {
	display: flex;
	flex-direction: column;
}
</style>
