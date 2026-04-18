<script setup lang="ts">
import {useViewStore} from "@/assets/store.ts";
import {menu} from "@/assets/data.ts";
import TerminalHome from "@components/TerminalHome.vue";
import TerminalProjects from "@components/TerminalProjects.vue";
import TerminalUser from "@components/TerminalUser.vue";
import {computed} from "vue";

const { currentView } = useViewStore()

const componentMap = {
  [menu.home]: TerminalHome,
  [menu.user]: TerminalUser,
  [menu.projects]: TerminalProjects,
}

const activeComponent = computed(() => componentMap[currentView.value])
</script>

<template>
  <div class="terminal-container">
    <component :is="activeComponent" />
  </div>
</template>