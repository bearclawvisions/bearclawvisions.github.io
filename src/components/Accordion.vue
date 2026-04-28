<script setup lang="ts">
import type {ProjectInfo} from "@/assets/types.ts";

interface Props {
  id: number;
  title: string;
  projects: ProjectInfo[];
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
      <template v-for="(project, index) in projects" :key="id + index">
        <div class="project-item">
          <div class="pink-li"></div>
          <h3>{{ project.sourceType }} SOURCE</h3>
          <p>{{ project.name }}</p>
<!--          <button class="pink-button">[MORE INFO]</button>-->
        </div>
      </template>
    </div>
    
  </div>
</template>