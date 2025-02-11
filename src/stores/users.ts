import { api } from '@/api/api';
import type { AxiosError } from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface IUser {
	id: number;
	name: string;
	username: string;
	email: string;
}

export const useUserStore = defineStore('users', () => {
	const usersData = ref<IUser[]>([]);
	const isLoading = ref<boolean>(false);
	const isError = ref<boolean>(false);

	const fetchUsers = async () => {
		isError.value = false;
		isLoading.value = true;
		try {
			const { data } = await api.get('/users');
			usersData.value = data;
		} catch (err) {
			isError.value = true;
			console.error((err as AxiosError).message);
		} finally {
			isLoading.value = false;
		}
	};

	return { fetchUsers, usersData, isLoading, isError };
});
