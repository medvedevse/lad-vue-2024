<template>
	<footer :class="props.themeProp">Футер</footer>
</template>

<script setup lang="ts">
import type { IFooterComponentProps } from './types';

defineOptions({ name: 'FooterComponent' });

const props = withDefaults(defineProps<IFooterComponentProps>(), { themeProp: 'light' });
</script>

<style scoped></style>
