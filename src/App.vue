<script setup lang="ts">
import { ref } from 'vue';
import PortfolioSection from "@components/PortfolioSection.vue";

const thisYear = new Date().getFullYear();
const currentView = ref('cv')
</script>

<template>
  <div class="scanlines"></div>

  <!-- Header / Navigation -->
  <header>
    <div>
      <h1 class="neon-text">
        BearClawVisions
      </h1>
      <p class="sub-header">
        <span>System Status: ONLINE</span>
        <span> | </span>
        <span>Kernel: 0.1.0</span>
      </p>
    </div>
    
    <img src="@/assets/neon-retro-logo.png" alt="logo" class="bearclaw-logo" />
    
    <nav>
      <button @click="currentView = 'cv'" :class="currentView === 'cv' ? 'active' : 'inactive'">
        [CV]
      </button>
      <button @click="currentView = 'projects'" :class="currentView === 'projects' ? 'active' : 'inactive'">
        [PROJECTS]
      </button>
    </nav>
  </header>

  <!-- Main Terminal Area -->
  <main class="neon-border">
    <PortfolioSection :view="currentView" />
  </main>

  <footer>
    © {{thisYear}} BearClawVisions - ALL RIGHTS RESERVED
  </footer>
</template>