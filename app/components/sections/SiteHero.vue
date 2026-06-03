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
  <section class="overflow-hidden pb-12 pt-8 lg:pb-20 lg:pt-12">
    <div class="section-container">
      <div class="flex items-center justify-start gap-2">
        <div class="w-full max-w-[712px]">
          <p
            class="mb-6 inline-flex rounded-full border border-[#BCC2CC] px-4 py-2 text-xs text-[#2C2C2C]"
          >
            WAEC • NECO • Cambridge • Edexcel - accredited pathways
          </p>

          <h1
            class="font-serif text-4xl font-normal leading-tight text-navy sm:text-5xl lg:text-[5rem] lg:leading-[1.15]"
          >
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
            <FeatureCard
              v-for="stat in heroStats"
              :key="stat.title"
              :title="stat.title"
              :description="stat.caption"
              compact
            >
              <template #icon>
                <component
                  :is="stat.icon"
                  class="size-5 text-green"
                  aria-hidden="true"
                />
              </template>
            </FeatureCard>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-[504px]">
          <div class="relative overflow-hidden rounded-3xl">
            <NuxtImg
              src="/images/hero-student.webp"
              alt="Fame College student in uniform with laptop"
              class="aspect-4/5 w-full object-cover"
              width="770"
              height="1024"
              loading="eager"
            />
          </div>

          <div
            class="absolute left-2 top-6 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-lg sm:left-4"
          >
            <span
              class="flex size-8 items-center justify-center rounded-full bg-green text-white"
            >
              <Check class="size-4" aria-hidden="true" />
            </span>
            <span class="text-xs font-medium text-navy sm:text-sm">
              Accredited WAEC & NECO
            </span>
          </div>

          <div
            class="absolute bottom-24 right-2 flex items-center gap-2 rounded-full bg-white px-4 py-2.5 shadow-lg sm:right-4"
          >
            <span
              class="flex size-8 items-center justify-center rounded-full bg-navy-bg text-white"
            >
              <Globe class="size-4" aria-hidden="true" />
            </span>
            <span class="text-xs font-medium text-navy sm:text-sm">
              Pathways IGCSE • A-Level
            </span>
          </div>

          <div
            class="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-baseline gap-2 rounded-2xl bg-white px-6 py-4 shadow-xl"
          >
            <span class="font-serif text-4xl font-normal text-navy">95%</span>
            <span class="text-sm text-gray-body">Exam Pass Rate</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
