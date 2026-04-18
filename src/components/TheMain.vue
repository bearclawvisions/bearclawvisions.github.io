<script setup lang="ts">
import Terminal from "@components/Terminal.vue";
import { ref } from 'vue';
const currentView = ref('cv')
</script>

<template>
  <main class="neon-border">
    <Terminal :view="currentView" />
  </main>
</template>
