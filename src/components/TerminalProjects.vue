<script setup lang="ts">
import {projects, terminal} from "@/assets/data.ts";
import {reactive} from "vue";
import Accordion from "@/components/Accordion.vue";

const workProjects = projects.work;
const personalProjects = projects.personal;

const isOpen = reactive<Record<number, boolean>>({});
</script>

<template>
  <h2 class="blinking-cursor">{{terminal}} TRANSACTION_LOG</h2>

  <Accordion
      :id="1"
      title="WORK"
      :projects="workProjects"
      source-type="CLOSED SOURCE"
      :is-open="isOpen"
  />

  <Accordion
      :id="2"
      title="PERSONAL"
      :projects="personalProjects"
      source-type="GITHUB SOURCE"
      :is-open="isOpen"
  />
</template>