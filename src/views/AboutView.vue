<script setup lang="ts">
import AsideComponent from '@/components/PostsCompositionAPI/AsideComponent.vue';
import FooterComponent from '@/components/PostsCompositionAPI/FooterComponent.vue';
import HeaderComponent from '@/components/PostsCompositionAPI/HeaderComponent.vue';
import LoaderComponent from '@/components/PostsCompositionAPI/LoaderComponent.vue';
import MainComponent from '@/components/PostsCompositionAPI/MainComponent.vue';
import { ref } from 'vue';

defineOptions({ name: 'AboutView' });

const theme = ref<string>('');
</script>

<template>
	<HeaderComponent @themeSwitcher="theme = $event" :themeProp="theme" />
	<div class="wrapper">
		<Suspense>
			<template #default>
				<MainComponent :themeProp="theme" />
			</template>
			<template #fallback>
				<LoaderComponent :themeProp="theme" />
			</template>
		</Suspense>
		<AsideComponent :themeProp="theme" />
	</div>
	<FooterComponent :themeProp="theme" />
</template>

<style scoped>
.wrapper {
	display: grid;
	grid-template-columns: 4fr 1fr;
}
</style>
