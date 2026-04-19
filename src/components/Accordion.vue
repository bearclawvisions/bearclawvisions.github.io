<script setup lang="ts">
interface Props {
  id: number;
  title: string;
  projects: string[];
  sourceType: 'CLOSED SOURCE' | 'GITHUB SOURCE';
  isOpen: Record<number, boolean>;
}

defineProps<Props>();
</script>

<template>
  <div>
    <button class="accordion-button" @click="isOpen[id] = !isOpen[id]">
      
      <template v-if="!isOpen[id]">
        <!--plus icon-->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </template>
      
      <template v-else>
        <!--minus icon-->
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
      </template>
      
      // {{ title }} PROJECTS
      
    </button>
    
    <div :class="isOpen[id] ? 'accordion-content-visible' : 'accordion-content-hidden'">
      <template v-for="project in projects" :key="project">
        <div class="project-item">
          <div class="pink-li"></div>
          <h3>{{ sourceType }}</h3>
          <p>{{ project }}</p>
        </div>
      </template>
    </div>
    
  </div>
</template>