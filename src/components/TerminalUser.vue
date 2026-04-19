<script setup lang="ts">
import {terminal, admin, skills} from "@/assets/data.ts";

const adminGeneric = Object.entries(admin).slice(0, 4);
const certificates = admin.certificates;
const frontendSkills = skills.frontend;
const backendSkills = skills.backend;
const tools = skills.tools;
const other = skills.softSkills;
</script>

<template>
    <h2 class="blinking-cursor">{{terminal}} INITIALIZING_IDENTITY</h2>
    
    <div class="identity-container">
      
      <div class="mini-container">
        <h3>// ADMIN_INFORMATION</h3>
        <template v-for="([key, value], index) in adminGeneric" :key="key">
          <div class="admin-info">
            <p>{{ key }}:</p>
            <p v-if="index !== adminGeneric.length - 1">[{{ value }}]</p>
            <p v-else><a :href="`https://${value}`" target="_blank">[{{ value }}]</a></p>
          </div>
        </template>
      </div>

      <div class="mini-container">
        <h3>// CERTIFICATIONS</h3>
        <div class="tag-container">
          <span v-for="certificate in certificates" :key="certificate" class="tag-item">
            {{ certificate }}
          </span>
        </div>
      </div>

      <div class="mini-container">
        <h3>// FRONTEND_STACK</h3>
        <div class="tag-container">
          <span v-for="frontSkill in frontendSkills" :key="frontSkill" class="tag-item">
            {{ frontSkill }}
          </span>
        </div>
      </div>

      <div class="mini-container">
        <h3>// BACKEND_STACK</h3>
        <div class="tag-container">
          <span v-for="backendSkill in backendSkills" :key="backendSkill" class="tag-item">
            {{ backendSkill }}
          </span>
        </div>
      </div>

      <div class="mini-container">
        <h3>// TOOL_STACK</h3>
        <div class="tag-container">
          <span v-for="tool in tools" :key="tool" class="tag-item">
            {{ tool }}
          </span>
        </div>
      </div>

      <div class="mini-container">
        <h3>// OTHER_STACK</h3>
        <div class="tag-container">
          <span v-for="item in other" :key="item" class="tag-item">
            {{ item }}
          </span>
        </div>
      </div>
      
    </div>
</template>