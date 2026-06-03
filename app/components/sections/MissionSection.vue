<script setup lang="ts">
import { Target } from 'lucide-vue-next'
</script>

<template>
  <section class="py-8 lg:py-12">
    <div class="section-container">
      <div
        class="mx-auto flex w-full max-w-[1024px] flex-col gap-10 rounded-3xl bg-navy-bg p-8 lg:flex-row lg:items-center lg:gap-16 lg:p-16"
      >
        <div class="shrink-0 lg:w-48">
          <SectionEyebrow label="OUR MISSION" />
          <div
            class="mt-6 flex size-14 items-center justify-center rounded-xl border border-green/50 bg-navy-bg"
          >
            <Target class="size-7 text-green" aria-hidden="true" />
          </div>
        </div>
        <p
          class="font-serif text-2xl leading-relaxed text-white sm:text-3xl lg:text-[1.75rem] lg:leading-snug"
        >
          To deliver
          <span class="text-green">inclusive, high-quality education</span>
          that develops academic excellence, critical thinking, and strong
          character - equipping every learner with the knowledge, skills and
          confidence to excel in local and international examinations and thrive
          in a rapidly changing world.
        </p>
      </div>
    </div>
  </section>
</template>
