<script setup lang="ts">
import PortfolioSection from "@components/PortfolioSection.vue";
import { ref } from 'vue';
const currentView = ref('cv')
</script>

<template>
  <main class="neon-border">
    <PortfolioSection :view="currentView" />
  </main>
</template>
