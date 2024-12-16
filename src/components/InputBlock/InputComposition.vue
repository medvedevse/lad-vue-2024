<template>
  <div class="wrapper">
    <h2 class="input-block-header">Input Block</h2>
    <input type="text" v-model="text" />
    <div class="text-block">{{ text }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const text = ref<string>('');
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-block-header {
  color: hsla(160, 100%, 37%, 1);
  font-size: 24px;
  font-weight: bold;
}

.text-block {
  word-break: break-all;
}
</style>
