<script setup lang="ts">
defineProps<{ view: string }>()

const skills = ['Vue.js', 'TypeScript', 'Tailwind', 'Node.js', 'C++', 'ASM']
</script>

<template>
  <div v-if="view === 'cv'" class="portfolio-container">
    
    <section>
      <h2>> INITIALIZING_IDENTITY...</h2>
      <div class="identity-container">
        <div class="mini-container">
        <h3>// USER_INFORMATION</h3>
          <p>NAME: [CLASSIFIED]</p>
          <p>ROLE: FULLSTACK_DEVELOPER</p>
          <p>LOCATION: CYBER_SPACE</p>
        </div>
        <div class="mini-container">
          <h3>// TECHNICAL_STACK</h3>
          <div class="tech-stack-container">
            <span v-for="skill in skills" :key="skill"
                  class="skill-tag">
              {{ skill }}
            </span>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2>> EXPERIENCE_LOG</h2>
      <div class="experience-container">
        <div class="experience-item">
          <div class="pink-li"></div>
          <h3>Lead Architect @ GridRunner Inc.</h3>
          <p>2024 - PRESENT</p>
          <p>Developing high-performance UI systems for neural link interfaces.</p>
        </div>
        <div class="experience-item">
          <div class="pink-li"></div>
          <h3>Junior Dev @ ByteCorp</h3>
          <p>2022 - 2024</p>
        </div>
      </div>
    </section>
  </div>

  <div v-else class="portfolio-container">
    <h2 class="animate-bounce">LOADING...</h2>
    <p>Sector 7 projects are currently encrypted.</p>
  </div>
</template>