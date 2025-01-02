<template>
	<aside :class="props.themeProp">Сайдбар</aside>
</template>

<script setup lang="ts">
import type { IAsideComponentProps } from './types';

defineOptions({ name: 'AsideComponent' });

const props = withDefaults(defineProps<IAsideComponentProps>(), { themeProp: 'light' });
</script>

<style scoped>
aside {
	width: 100%;
}
</style>
