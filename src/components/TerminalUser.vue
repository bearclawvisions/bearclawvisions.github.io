<script setup lang="ts">
import {terminal, admin} from "@/assets/data.ts";

const adminGeneric = Object.entries(admin).slice(0, 4);
// const adminSupplemental = Object.entries(admin).slice(3, 4);
const hobbies = admin.hobbies;
</script>

<template>
  <section>
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
        <h3>// HOBBIES</h3>
        <div class="tag-container">
          <span v-for="hobby in hobbies" :key="hobby" class="tag-item">
            {{ hobby }}
          </span>
        </div>
      </div>

<!--      <div class="mini-container">-->
<!--        <h3>// TECHNICAL_STACK</h3>-->
<!--        <div class="tag-container">-->
<!--            <span v-for="skill in skills" :key="skill"-->
<!--                  class="tag-item">-->
<!--              {{ skill }}-->
<!--            </span>-->
<!--        </div>-->
<!--      </div>-->
<!--      -->
<!--      <div class="mini-container">-->
<!--        <h3>// TECHNICAL_STACK</h3>-->
<!--        <div class="tag-container">-->
<!--            <span v-for="skill in skills" :key="skill"-->
<!--                  class="tag-item">-->
<!--              {{ skill }}-->
<!--            </span>-->
<!--        </div>-->
<!--      </div>-->
      
    </div>
  </section>

  <!--  <section>-->
  <!--    <h2>> EXPERIENCE_LOG</h2>-->
  <!--    <div class="experience-container">-->
  <!--      <div class="experience-item">-->
  <!--        <div class="pink-li"></div>-->
  <!--        <h3>Lead Architect @ GridRunner Inc.</h3>-->
  <!--        <p>2024 - PRESENT</p>-->
  <!--        <p>Developing high-performance UI systems for neural link interfaces.</p>-->
  <!--      </div>-->
  <!--      <div class="experience-item">-->
  <!--        <div class="pink-li"></div>-->
  <!--        <h3>Junior Dev @ ByteCorp</h3>-->
  <!--        <p>2022 - 2024</p>-->
  <!--      </div>-->
  <!--    </div>-->
  <!--  </section>-->
</template>