<template>
	<div class="wrapper">
		<div class="controls-wrapper">
			<GoBack />
			<ThemeChanger />
		</div>
		<h1>Пользователи</h1>
		<div v-if="isLoading" class="loader">...Загрузка</div>
		<div v-else-if="isError" class="error">Произошла ошибка!</div>
		<div class="user-container" v-else>
			<UserComponent
				v-for="(user, idx) in usersData"
				:key="user.id"
				:position="idx + 1"
				:name="user.name"
				:username="user.username"
				:email="user.email"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import GoBack from '@/components/GoBack.vue';
import ThemeChanger from '@/components/ThemeChanger.vue';
import UserComponent from '@/components/UserComponent.vue';
import { useUserStore } from '@/stores/users';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const userStore = useUserStore();
const { fetchUsers } = userStore;
const { usersData, isError, isLoading } = storeToRefs(userStore);

onMounted(() => fetchUsers());
</script>

<style scoped lang="scss">
.wrapper {
	min-height: 100vh;
}
.loader {
	min-height: 100vh;
	font-size: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.error {
	min-height: 100vh;
	font-size: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.user-container {
	padding: 0 30px;
	min-height: 100px;
	display: grid;
	grid-template-columns: repeat(2, 400px);
	gap: 20px;
}

.controls-wrapper {
	display: flex;
	justify-content: space-between;
}
</style>
