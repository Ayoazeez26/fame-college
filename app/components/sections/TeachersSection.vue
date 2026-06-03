<script setup lang="ts">
import { teachers } from '~/data/teachers'
</script>

<template>
  <section id="faculty" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-[1fr_384px] lg:items-end">
        <div>
          <SectionEyebrow label="FACULTY" />
          <h2
            class="mt-4 w-full max-w-2xl font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
          >
            Teachers Who Turn Curriculum Into Curiosity.
          </h2>
        </div>
        <p class="leading-relaxed text-gray-body">
          Subject specialists, examiners and mentors committed to every
          learner's growth.
        </p>
      </div>

      <div
        class="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8 lg:grid-cols-4"
      >
        <TeacherCard
          v-for="teacher in teachers"
          :key="teacher.name"
          :teacher="teacher"
        />
      </div>
    </div>
  </section>
</template>
