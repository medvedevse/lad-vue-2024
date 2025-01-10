<template>
	<div class="loader" :class="props.themeProp">Loading...</div>
</template>

<script setup lang="ts">
import type { ILoaderComponentProps } from './types';

defineOptions({ name: 'FooterComponent' });

const props = withDefaults(defineProps<ILoaderComponentProps>(), { themeProp: 'light' });
</script>

<style scoped>
.loader {
	min-height: 100vh;
	font-size: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
