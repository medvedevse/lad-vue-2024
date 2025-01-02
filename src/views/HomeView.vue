<script lang="ts">
import { defineComponent } from 'vue';
import AsideComponent from '@/components/PostsOptionsAPI/AsideComponent.vue';
import FooterComponent from '@/components/PostsOptionsAPI/FooterComponent.vue';
import HeaderComponent from '@/components/PostsOptionsAPI/HeaderComponent.vue';
import MainComponent from '@/components/PostsOptionsAPI/MainComponent.vue';

export default defineComponent({
	name: 'HomeView',
	components: { HeaderComponent, MainComponent, AsideComponent, FooterComponent },
	data() {
		return {
			theme: '',
		};
	},
});
</script>

<template>
	<HeaderComponent @themeSwitcher="theme = $event" :themeProp="theme" />
	<div class="wrapper">
		<MainComponent :themeProp="theme" />
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
