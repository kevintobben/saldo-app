<template>
  <div class="ink-uit-container">
    <div>
      <h4>Inkomen</h4>
      <p id="centjes-plus" class="centjes plus">+€{{ income }}</p>
    </div>
    <div>
      <h4>Uitgaven</h4>
      <p id="centjes-minus" class="centjes minus">€{{ expenses }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  income: {
    type: Number,
    required: true,
  },
  expenses: {
    type: Number,
    required: true,
  },
});
</script>