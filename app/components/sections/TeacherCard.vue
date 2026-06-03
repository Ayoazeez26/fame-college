<script setup lang="ts">
import type { Teacher } from '~/data/teachers'

defineProps<{
  teacher: Teacher
}>()
</script>

<template>
  <article class="flex flex-col items-center text-center">
    <div class="teacher-photo">
      <img
        :src="teacher.image"
        :alt="teacher.name"
        class="size-full object-cover"
        width="160"
        height="160"
        loading="lazy"
      >
    </div>
    <h3 class="font-serif text-base font-normal text-navy">
      {{ teacher.name }}
    </h3>
    <p class="mt-1 text-sm font-medium text-green">
      {{ teacher.subject }}
    </p>
  </article>
</template>

<style scoped>
.teacher-photo {
  width: 10rem;
  height: 10rem;
  overflow: hidden;
  border-radius: 50%;
  border: 4px solid #fff;
}

@media (min-width: 640px) {
  .teacher-photo {
    width: 11.5rem;
    height: 11.5rem;
  }
}
</style>
