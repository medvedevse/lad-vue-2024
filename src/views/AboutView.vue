<script setup lang="ts">
import CounterOptions from '@/components/Counter/CounterOptions.vue';
import InputOptions from '@/components/InputBlock/InputOptions.vue';
</script>

<template>
  <div class="about">
    <h1 class='header'>Options API Examples</h1>
		<CounterOptions/>
		<InputOptions/> 
  </div>
</template>

<style scoped>
.header {
  color: hsla(160, 100%, 37%, 1);
  font-size: 30px;
  font-weight: bold;
	text-align: center;
}
</style>

