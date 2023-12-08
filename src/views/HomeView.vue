<template>
  <main>
    <Saldo :total="total" />
    <InkomenUitgaven :income="+income" :expenses="+expenses" />
    <TransactieLijst :transactions="transactions" @transactionDeleted="handleTransactionDeleted" />
    <AddTransactie
        @transactionsSubmitted="handleTransactionSubmitted" />
  </main>
</template>

<script setup>
import Saldo from '../components/Saldo.vue'
import InkomenUitgaven from "@/components/InkomenUitgaven.vue";
import TransactieLijst from "@/components/TransactieLijst.vue";
import AddTransactie from "@/components/AddTransactie.vue";

import { useToast } from 'vue-toastification';

import {ref, computed, onMounted } from 'vue';

const toast = useToast();

const transactions = ref ([ ]);

onMounted (() => {
  const savedTransactions = JSON.parse(localStorage.getItem('transactions'));
  if (savedTransactions) {
    transactions.value = savedTransactions;
  }
});


// Get total
const total = computed(() => {
  return transactions.value.reduce( (acc, transaction) => {
      return acc + transaction.amount;
  }, 0);
});

// Inkomen
const income = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount > 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
});

// Uitgaven
const expenses = computed(() => {
  return transactions.value
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => acc + transaction.amount, 0)
      .toFixed(2);
});

// Voeg transactie toe
const handleTransactionSubmitted = (transactionData) => {
  transactions.value.push({
    id: generateUniqueId(),
    text: transactionData.text,
    amount: transactionData.amount
  });

savedTransactionsToLocalStorage();

  toast.success('Transactie toegevoegd')
};

// Verwijder transactie
const handleTransactionDeleted = (id) => {
  transactions.value = transactions.value.filter((transaction) =>
  transaction.id !== id);

  savedTransactionsToLocalStorage();

  toast.success('Transactie verwijderd')
};

// Opslaan in local storage
 const savedTransactionsToLocalStorage = () => {
   localStorage.setItem('transactions', JSON.stringify(transactions.value));
 }

// Genereer unieke ID
const generateUniqueId = () => {
  return Math.floor(Math.random() * 1000000);
}
</script>
