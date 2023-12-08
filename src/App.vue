<template>
  <Navbar />

  <main class="container">
    <RouterView />
  </main>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>
