<script setup lang="ts">
import { Check, GraduationCap, Users } from 'lucide-vue-next'

const studentBenefits = [
  'Internationally recognised qualifications',
  'Critical thinking skills',
  'Digital literacy',
  '24/7 tutorial access',
] as const

const parentBenefits = [
  'Transparent progress updates',
  'One trusted school for all levels',
  'Real exam focused results',
] as const
</script>

<template>
  <section class="py-16 lg:py-24">
    <div class="section-container">
      <div class="text-center">
        <SectionEyebrow label="STUDENT & PARENT VALUE" centered />
        <h2
          class="mt-4 font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
        >
          What Students And Parents Gain.
        </h2>
      </div>

      <div class="mt-12 grid gap-6 lg:grid-cols-2">
        <article
          class="rounded-3xl border border-border bg-[#FBFCFC] p-8 lg:p-10"
        >
          <div class="flex items-center gap-4">
            <span
              class="flex size-12 items-center justify-center rounded-full bg-navy-bg text-white"
            >
              <GraduationCap class="size-6" aria-hidden="true" />
            </span>
            <h3 class="font-serif text-2xl font-normal text-navy">
              For Students
            </h3>
          </div>
          <ul class="mt-8 space-y-4">
            <li
              v-for="item in studentBenefits"
              :key="item"
              class="flex items-start gap-3 text-gray-body"
            >
              <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-navy-bg text-white"
              >
                <Check class="size-3" aria-hidden="true" />
              </span>
              {{ item }}
            </li>
          </ul>
        </article>

        <article class="rounded-3xl bg-navy-bg p-8 lg:p-10">
          <div class="flex items-center gap-4">
            <span
              class="flex size-12 items-center justify-center rounded-full bg-green text-white"
            >
              <Users class="size-6" aria-hidden="true" />
            </span>
            <h3 class="font-serif text-2xl font-normal text-white">
              For Parents
            </h3>
          </div>
          <ul class="mt-8 space-y-4">
            <li
              v-for="item in parentBenefits"
              :key="item"
              class="flex items-start gap-3 text-white/80"
            >
              <span
                class="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-green text-navy-bg"
              >
                <Check class="size-3" aria-hidden="true" />
              </span>
              {{ item }}
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
