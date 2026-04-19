<script setup lang="ts">
import { ref, onMounted } from 'vue';
import {useViewStore} from "@/assets/store.ts";
const { showLoading, hideLoading } = useViewStore();

const progress = ref<number>(0);
const loadingText = ref<string>('');
const segments: number = 20;
const loadingTexts: string[] = [
    'PROCESSING REQUEST',
    'AUTHENTICATING USER',
    'AUTHORIZING ACCESS',
    'LOADING DATA',
    'POLISHING LIGHTSABER',
    'COMPLETED',
];

onMounted(() => {
  const duration: number = 3000; // 3 second fill
  const startTime: number = Date.now();

  const interval: number = setInterval(() => {
    const elapsed: number = Date.now() - startTime;
    progress.value = Math.min((elapsed / duration) * 100, 100);
    loadingText.value = loadingTexts[Math.floor(progress.value / 20)] as string;

    if (progress.value >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        hideLoading();
      }, 300);
    }
  }, 30);
});

const filledSegments = (percent: number): number => {
  return Math.ceil((percent / 100) * segments);
};
</script>

<template>
  <div class="loading-wrapper">
    <div v-if="showLoading" class="loading-container">
      <div class="loading-text">{{ loadingText }}...</div>
      <div class="progress-bar">
        <div class="bar-border">
          <div class="segments">
            <div v-for="i in segments" :key="i"
                :class="['segment', { filled: i <= filledSegments(progress) }]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>