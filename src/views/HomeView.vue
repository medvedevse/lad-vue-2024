<script setup lang="ts">
import CounterExample from '../components/Counter/CounterComposition.vue';
import InputComposition from '../components/InputBlock/InputComposition.vue';
</script>

<template>
  <main>
    <h1 class="header">Composition API Examples</h1>
    <CounterExample />
    <InputComposition />
  </main>
</template>

<style scoped>
.header {
  color: hsla(160, 100%, 37%, 1);
  font-size: 30px;
  font-weight: bold;
  text-align: center;
}
</style>
