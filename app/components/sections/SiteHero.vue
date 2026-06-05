<script setup lang="ts">
import { Check, Clock, Globe, Sparkles } from 'lucide-vue-next'

const heroStats = [
  { icon: Clock, title: '24/7', caption: 'Online Learning' },
  { icon: Globe, title: 'Global', caption: 'Curriculum' },
  { icon: Sparkles, title: 'Expert', caption: 'Teachers' },
  { icon: Check, title: 'Exam', caption: 'Ready' },
] as const
</script>

<template>
  <section class="pb-12 pt-8 lg:pb-20 lg:pt-12">
    <div class="section-container">
      <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
        <div class="w-full min-w-0 max-w-[712px] lg:flex-1">
          <p class="mb-6 inline-flex max-w-full rounded-full border border-[#BCC2CC] px-4 py-2 text-xs text-[#2C2C2C]">
            WAEC • NECO • Cambridge • Edexcel - accredited pathways
          </p>

          <h1
            class="font-serif text-4xl font-normal leading-tight text-navy sm:text-5xl lg:text-[5rem] lg:leading-[1.15]">
            Where Academic
            <span class="block">

              <em class="font-serif font-normal italic text-green">Excellence</em>
              Meets
            </span>
            <span class="block">Global Opportunities.</span>
          </h1>

          <p class="mt-6 max-w-xl text-base leading-relaxed text-gray-body">
            From Primary through Secondary to A-Level, IGCSE, IELTS and Online
            Tutorials — Fame College International School prepares students to
            succeed in Nigeria and around the world.
          </p>

          <div class="mt-8 flex flex-wrap gap-4">
            <AppButton href="#contact" variant="primary" icon="arrow">
              Apply Now
            </AppButton>
            <AppButton href="#contact" variant="secondary" icon="phone">
              Speak to an Advisor
            </AppButton>
          </div>

          <div class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <FeatureCard v-for="stat in heroStats" :key="stat.title" :title="stat.title" :description="stat.caption"
              compact>
              <template #icon>
                <component :is="stat.icon" class="size-5 text-green" aria-hidden="true" />
              </template>
            </FeatureCard>
          </div>
        </div>

        <div class="relative w-full min-w-0 max-w-[504px] shrink-0 lg:mx-0">
          <div class="relative overflow-hidden rounded-3xl">
            <NuxtImg src="/images/hero-student.webp" alt="Fame College student in uniform with laptop"
              class="aspect-4/5 w-full object-cover" width="770" height="1024" loading="eager" />
          </div>

          <div
            class="hero-badge-float absolute -left-2 top-12 flex items-center gap-3 rounded-xl bg-white px-4 py-3 shadow-lg sm:-left-12">
            <span
              class="flex size-8 shrink-0 items-center justify-center rounded-full bg-green sm:size-10"
            >
              <img
                src="/icons/seal-check.png"
                alt=""
                class="size-3.5 sm:size-5"
                width="20"
                height="20"
                aria-hidden="true"
              >
            </span>
            <span class="flex flex-col">
              <span class="text-xs text-gray-body">Accredited</span>
              <span class="font-serif text-base font-semibold text-navy sm:text-lg">
                WAEC & NECO
              </span>
            </span>
          </div>

          <div
            class="hero-badge-float hero-badge-float--delayed absolute bottom-24 right-2 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 shadow-lg sm:-right-20">
            <span class="flex size-8 items-center justify-center rounded-full bg-navy-bg text-white">
              <Globe class="size-4" aria-hidden="true" />
            </span>
            <span class="flex flex-col">
              <span class="text-xs text-gray-body">Pathways</span>
              <span class="font-serif text-base font-semibold text-navy sm:text-lg">
                IGCSE • A-Level
              </span>
            </span>
          </div>

          <div
            class="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-start gap-2 rounded-xl bg-white px-6 py-4 shadow-xl">
            <span class="font-serif text-2xl md:text-4xl font-semibold text-navy">95%</span>
            <span class="text-sm text-gray-body">Exam<br /> Pass Rate</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes hero-badge-float-y {
  0%,
  100% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
}

.hero-badge-float {
  animation: hero-badge-float-y 4s ease-in-out infinite;
  will-change: transform;
}

.hero-badge-float--delayed {
  animation-delay: 2s;
}
</style>
