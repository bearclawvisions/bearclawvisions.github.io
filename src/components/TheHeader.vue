<script setup lang="ts">
import { useViewStore } from '@/assets/store.ts';
import { menu, general } from '@/assets/data.ts';
import type {Menu} from "@/assets/types.ts";

const { setView, currentView } = useViewStore();
const generalEntries = Object.entries(general).slice(1);
const menuKeys = Object.keys(menu) as Array<keyof Menu>;
</script>

<template>
  <header>
    
    <div>
      <h1 class="neon-text">
        {{general.app}}
      </h1>
      
      <p class="sub-header">
      <template v-for="([key, label], index) in generalEntries" :key="key">
        <span>
          {{ key }} = {{ label }}
        </span>
        <span v-if="index !== generalEntries.length - 1"> | </span>
      </template>
      </p>
      
    </div>

    <nav>
      <template v-for="item in menuKeys" :key="item">
        <button @click="setView(item)" :class="currentView === item ? 'active' : 'inactive'">
          [{{ item }}]
        </button>
      </template>
    </nav>
    
  </header>
</template>