<script setup lang="ts">
import { BookOpen, Compass, Users } from 'lucide-vue-next'

const features = [
  {
    icon: BookOpen,
    title: 'Seamless K-12+',
    text: 'Primary to A level under one roof',
  },
  {
    icon: Compass,
    title: 'Global Curriculum',
    text: 'Cambridge, Edexcel & Nigerian boards.',
  },
  {
    icon: Users,
    title: 'Small Cohorts',
    text: 'Mentor-led classes for every learner',
  },
] as const
</script>

<template>
  <section id="about" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="relative">
          <div class="overflow-hidden rounded-3xl">
            <NuxtImg
              src="/images/about-classroom.webp"
              alt="Students in classroom"
              class="aspect-4/5 w-full object-cover"
              width="823"
              height="1024"
              loading="lazy"
            />
          </div>
          <div
            class="absolute -left-4 -top-6 rounded-2xl border border-[#DBDDE2] bg-white px-5 py-4 shadow-[0_4px_24px_rgba(14,30,62,0.24)]"
          >
            <p class="text-xs text-gray-body">Class size</p>
            <p class="mt-1 font-serif text-xl font-normal text-navy">
              ≤ 18 students
            </p>
          </div>
          <div
            class="absolute -bottom-6 -right-12 rounded-2xl bg-navy-bg px-5 py-4 shadow-lg max-w-[259px]"
          >
            <p class="font-serif text-3xl font-normal text-white">15+</p>
            <p class="mt-1 font-medium uppercase tracking-wider text-white/70">
              Years shaping futures in Eket
            </p>
          </div>
        </div>

        <div>
          <SectionEyebrow label="ABOUT FAME COLLEGE" />
          <h2
            class="mt-4 font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
          >
            Preparing Students For Life Beyond The Classroom.
          </h2>
          <p class="mt-5 text-base leading-relaxed text-gray-body">
            Fame College International School offers a complete pathway from
            Primary through Secondary to A-Level, IGCSE, IELTS and online
            tutorials — nurturing academic excellence, character and global
            readiness in Eket, Akwa Ibom.
          </p>
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              v-for="feat in features"
              :key="feat.title"
              :title="feat.title"
              :description="feat.text"
              compact
            >
              <template #icon>
                <span
                  class="flex size-10 items-center justify-center rounded-full bg-[#EBF4EF]"
                >
                  <component
                    :is="feat.icon"
                    class="size-5 text-navy"
                    aria-hidden="true"
                  />
                </span>
              </template>
            </FeatureCard>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
