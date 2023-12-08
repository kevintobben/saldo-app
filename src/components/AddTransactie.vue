<template>
  <h3>Nieuwe transactie toevoegen</h3>
  <form id="form" @submit.prevent="onSubmit">
    <div class="form-control">
      <label for="text">Text</label>
      <input type="text" id="text" placeholder="Wc bril..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
      >Hoeveel centjes</label
      >
      <input
          type="text"
          id="amount"
          placeholder="20000 miljard..."
          v-model="amount"
      />
    </div>
    <button class="btn">Voeg nieuwe transactie toe</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { useToast } from 'vue-toastification';

const text = ref('');
const amount = ref('');

const emit = defineEmits(['transactionsSubmitted']);


const toast = useToast();
const onSubmit = () => {
  if (!text.value || !amount.value) {
    toast.error('Beide velden invullen SUIVUPLEE');
    return;

  }

  const transactionData = {
    text: text.value,
    amount: parseFloat(amount.value)
  }

  emit('transactionsSubmitted', transactionData)

  text.value = '';
  amount.value = '';
};

</script>