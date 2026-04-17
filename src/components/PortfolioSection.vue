<script setup lang="ts">
defineProps<{ view: string }>()

const skills = ['Vue.js', 'TypeScript', 'Tailwind', 'Node.js', 'C++', 'ASM']
</script>

<template>
  <div v-if="view === 'cv'" class="space-y-8">
    <section>
      <h2 class="text-2xl mb-4 text-neon-green">> INITIALIZING_IDENTITY...</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border border-neon-cyan/30 p-4">
          <p class="text-neon-cyan">NAME: [USER_NAME]</p>
          <p class="text-neon-cyan">ROLE: FULLSTACK_DEVELOPER</p>
          <p class="text-neon-cyan">LOCATION: CYBER_SPACE</p>
        </div>
        <div class="border border-neon-cyan/30 p-4">
          <p class="text-neon-green mb-2">// TECHNICAL_STACK</p>
          <div class="flex flex-wrap gap-2">
            <span v-for="skill in skills" :key="skill"
                  class="text-[10px] border border-neon-green px-2 py-0.5">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="text-2xl mb-4 text-neon-green">> EXPERIENCE_LOG</h2>
      <div class="space-y-4">
        <div class="relative pl-6 border-l border-neon-pink/50">
          <div class="absolute -left-[5px] top-2 w-2 h-2 bg-neon-pink"></div>
          <h3 class="text-neon-pink uppercase font-bold text-lg">Lead Architect @ GridRunner Inc.</h3>
          <p class="text-xs text-neon-cyan/70">2024 - PRESENT</p>
          <p class="mt-2 text-sm">Developing high-performance UI systems for neural link interfaces.</p>
        </div>
        <div class="relative pl-6 border-l border-neon-pink/50 opacity-70">
          <div class="absolute -left-[5px] top-2 w-2 h-2 bg-neon-pink"></div>
          <h3 class="text-neon-pink uppercase font-bold text-lg">Junior Dev @ ByteCorp</h3>
          <p class="text-xs text-neon-cyan/70">2022 - 2024</p>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="flex flex-col items-center justify-center h-full py-20">
    <div class="text-4xl animate-bounce text-neon-pink">LOADING...</div>
    <p class="mt-4 text-neon-cyan italic">Sector 7 projects are currently encrypted.</p>
  </div>
</template>