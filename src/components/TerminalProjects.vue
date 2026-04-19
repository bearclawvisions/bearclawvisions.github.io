<script setup lang="ts">
import {projects, terminal} from "@/assets/data.ts";
import {reactive} from "vue";

const workProjects = projects.work;
const personalProjects = projects.personal;

const isOpen = reactive<Record<number, boolean>>({});
</script>

<template>
<!--  <h2 class="animate-bounce">LOADING...</h2>-->
<!--  <p>Sector 7 projects are currently encrypted.</p>-->

  <h2 class="blinking-cursor">{{terminal}} TRANSACTION_LOG</h2>
  
  <div>
    <button class="accordion-button" @click="isOpen[1] = !isOpen[1]">
      <template v-if="!isOpen[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
      </template>
      // Work Projects
    </button>
    <div :class="isOpen[1] ? 'max-h-96' : 'hidden'">
      <template v-for="project in workProjects">
        <div class="project-item">
          <div class="pink-li"></div>
          <h3>CLOSED SOURCE</h3>
          <p>{{project}}</p>
        </div>
      </template>
    </div>
  </div>

  <div>
    <button class="accordion-button" @click="isOpen[2] = !isOpen[2]">
      <template v-if="!isOpen[1]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M8.75 3.75a.75.75 0 0 0-1.5 0v3.5h-3.5a.75.75 0 0 0 0 1.5h3.5v3.5a.75.75 0 0 0 1.5 0v-3.5h3.5a.75.75 0 0 0 0-1.5h-3.5v-3.5Z" />
        </svg>
      </template>
      <template v-else>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="svg-icon">
          <path d="M3.75 7.25a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5h-8.5Z" />
        </svg>
      </template>
      // Personal Projects
    </button>
    <div :class="isOpen[2] ? 'max-h-96' : 'hidden'">
      <template v-for="project in personalProjects">
        <div class="project-item">
          <div class="pink-li"></div>
          <h3>GITHUB SOURCE</h3>
          <p>{{project}}</p>
        </div>
      </template>
    </div>
  </div>
    
</template>