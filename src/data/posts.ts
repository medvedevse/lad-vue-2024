import { api } from '@/api/api';

export interface IPost {
	id: number;
	title: string;
	body: string;
}

export const optionsPosts: IPost[] = [
	{ id: 1, title: 'Post1', body: 'Lorem, ipsum dolor.' },
	{ id: 2, title: 'Post2', body: 'Lorem, ipsum dolor.' },
	{ id: 3, title: 'Post3', body: 'Lorem, ipsum dolor.' },
	{ id: 4, title: 'Post4', body: 'Lorem, ipsum dolor.' },
	{ id: 5, title: 'Post5', body: 'Lorem, ipsum dolor.' },
	{ id: 6, title: 'Post6', body: 'Lorem, ipsum dolor.' },
	{ id: 7, title: 'Post7', body: 'Lorem, ipsum dolor.' },
	{ id: 8, title: 'Post8', body: 'Lorem, ipsum dolor.' },
	{ id: 9, title: 'Post9', body: 'Lorem, ipsum dolor.' },
	{ id: 10, title: 'Post10', body: 'Lorem, ipsum dolor.' },
	{ id: 11, title: 'Post11', body: 'Lorem, ipsum dolor.' },
	{ id: 12, title: 'Post12', body: 'Lorem, ipsum dolor.' },
	{ id: 13, title: 'Post13', body: 'Lorem, ipsum dolor.' },
	{ id: 14, title: 'Post14', body: 'Lorem, ipsum dolor.' },
	{ id: 15, title: 'Post15', body: 'Lorem, ipsum dolor.' },
	{ id: 16, title: 'Post16', body: 'Lorem, ipsum dolor.' },
	{ id: 17, title: 'Post17', body: 'Lorem, ipsum dolor.' },
	{ id: 18, title: 'Post18', body: 'Lorem, ipsum dolor.' },
	{ id: 19, title: 'Post19', body: 'Lorem, ipsum dolor.' },
	{ id: 20, title: 'Post20', body: 'Lorem, ipsum dolor.' },
];

export const getPosts = () => api.get<IPost[]>('/posts');

export const getPost = (id: number) => api.get<IPost>(`/posts/${id}`);
