<script lang="ts">
import { defineComponent } from 'vue';
import AsideComponent from '@/components/AsideComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import MainComponent from '@/components/MainComponent.vue';

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
	<div class="container">
		<HeaderComponent @themeSwitcher="theme = $event" :themeProp="theme" />
		<div class="wrapper">
			<MainComponent :themeProp="theme" />
			<AsideComponent :themeProp="theme" />
		</div>
		<FooterComponent :themeProp="theme" />
	</div>
</template>

<style scoped>
.wrapper {
	display: grid;
	grid-template-columns: 4fr 1fr;
}
</style>
