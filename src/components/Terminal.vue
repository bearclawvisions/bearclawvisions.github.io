<script setup lang="ts">
import {useViewStore} from "@/assets/store.ts";
import {menu} from "@/assets/data.ts";
import {computed} from "vue";

import TerminalHome from "@components/TerminalHome.vue";
import TerminalProjects from "@components/TerminalProjects.vue";
import TerminalAdmin from "@components/TerminalAdmin.vue";
import TerminalLoading from "@components/TerminalLoading.vue";

const { currentView, showLoading } = useViewStore()

const componentMap = {
  [menu.home]: TerminalHome,
  [menu.admin]: TerminalAdmin,
  [menu.projects]: TerminalProjects,
}

const activeComponent = computed(() => componentMap[currentView.value])
</script>

<template>
  <div class="terminal-container">
    <TerminalLoading v-if="showLoading" />
    <component v-else :is="activeComponent" />
  </div>
</template>