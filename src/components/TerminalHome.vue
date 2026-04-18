<script setup lang="ts">
import {terminal} from "@/assets/data.ts";
</script>

<template>
  <h2 class="blinking-cursor">{{terminal}} WELCOME //GUEST_USER</h2>
  <div class="typing-text">Use the top-right navigation to view information about the system admin.</div>
  <div class="bearclaw-logo">
    <img src="@/assets/neon-retro-logo.png" alt="logo" class="" />
  </div>
</template>