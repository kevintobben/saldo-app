/*
// store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        transactions: [
            { id: 1, text: 'Kapsalon', amount: -400 },
            { id: 2, text: 'Red Bull', amount: 400 },
            { id: 3, text: 'Koekjes', amount: -100 },
            { id: 4, text: 'patat', amount: 200 },
        ],
    }),

    actions: {
        deleteTransaction(id) {
            this.transactions = this.transactions.filter((transaction) => transaction.id !== id);
        },
    },
});
*/
