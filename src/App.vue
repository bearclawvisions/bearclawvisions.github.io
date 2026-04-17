<script setup lang="ts">
import { ref } from 'vue';
import PortfolioSection from "@components/PortfolioSection.vue";

const thisYear = new Date().getFullYear();
const currentView = ref('cv')
</script>

<template>
  <div class="min-h-screen relative flex flex-col items-center justify-center p-4 crt">
    <div class="scanlines"></div>

    <!-- Retro Grid Background -->
    <div class="absolute inset-0 z-0 opacity-20 pointer-events-none"
         style="background: linear-gradient(transparent 70%, #ff00ff 100%), 
                linear-gradient(90deg, transparent 70%, #ff00ff 100%);
                background-size: 50px 50px;
                transform: perspective(500px) rotateX(60deg);
                transform-origin: center bottom;">
    </div>

    <!-- Header / Navigation -->
    <header class="z-10 w-full max-w-4xl mb-8 flex justify-between items-end border-b-2 border-neon-pink pb-2">
      <div>
        <h1 class="text-4xl font-bold neon-text text-neon-pink tracking-tighter italic">
          BearclawVisions
        </h1>
        <p class="text-xs uppercase tracking-widest text-neon-cyan">System Status: ONLINE | Kernel: 0.1.0</p>
      </div>
      <nav class="flex gap-4">
        <button @click="currentView = 'cv'"
                :class="currentView === 'cv' ? 'bg-neon-cyan text-retro-bg' : 'text-neon-cyan border border-neon-cyan'"
                class="px-4 py-1 uppercase text-sm font-bold hover:scale-105 transition-transform">
          [CV]
        </button>
        <button @click="currentView = 'projects'"
                :class="currentView === 'projects' ? 'bg-neon-cyan text-retro-bg' : 'text-neon-cyan border border-neon-cyan'"
                class="px-4 py-1 uppercase text-sm font-bold hover:scale-105 transition-transform">
          [PROJECTS]
        </button>
      </nav>
    </header>

    <!-- Main Terminal Area -->
    <main class="z-10 w-full max-w-4xl bg-black/80 neon-border p-6 min-h-125 relative overflow-hidden">
      <div class="absolute top-0 left-0 w-full h-1 bg-neon-cyan/30 animate-pulse"></div>
      <PortfolioSection :view="currentView" />
    </main>

    <footer class="z-10 mt-8 text-[10px] text-neon-cyan/50 uppercase tracking-[0.5em]">
      © {{thisYear}} BearclawVisions - ALL RIGHTS RESERVED
    </footer>
  </div>
</template>