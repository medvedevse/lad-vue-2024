<template>
  <div class="wrapper">
    <h2 class="counter-header">Counter</h2>
    <div class="container">
      <button @click="count++">+</button>
      <div class="count">{{ count }}</div>
      <button @click="decreaseCount">-</button>
    </div>
		<div>Double count: {{ doubleCount }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Counter Options API',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    decreaseCount() {
      this.count--;
    },
	},
	computed: {
		doubleCount() {
			return this.count * 2
		} 
	}
});
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.counter-header {
  color: hsla(160, 100%, 37%, 1);
  font-size: 24px;
  font-weight: bold;
}

.container {
  display: flex;
  gap: 10px;
	margin-bottom: 10px;
  button {
    width: 25px;
    font-size: 16px;
    background: chartreuse;
    border-width: 1px;
    border-radius: 5px;
    cursor: pointer;
  }
}
</style>
