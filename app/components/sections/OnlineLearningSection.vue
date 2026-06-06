<script setup lang="ts">
import { Compass } from 'lucide-vue-next'

const features = [
  '24 hour learning access',
  'Video based tutorials',
  'Live online classes',
  'Flexible study support',
] as const
</script>

<template>
  <section id="online-learning" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionEyebrow label="ONLINE LEARNING" />
          <h2
            class="mt-4 w-full max-w-2xl font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
          >
            A Campus That Never Closes.
          </h2>
          <p class="mt-5 text-base leading-relaxed text-gray-body">
            Our student portal extends the classroom to wherever your child is —
            live tutorials, on-demand video lessons, structured revision and
            direct mentor chat.
          </p>
          <div class="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div
              v-for="label in features"
              :key="label"
              class="flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-4"
            >
              <span
                class="flex size-10 shrink-0 items-center justify-center rounded-full bg-green text-white"
              >
                <Compass class="size-5" aria-hidden="true" />
              </span>
              <span class="text-sm font-medium text-navy">{{ label }}</span>
            </div>
          </div>
        </div>
        <div class="overflow-hidden rounded-3xl">
          <video
            class="aspect-4/3 w-full object-cover"
            autoplay
            muted
            loop
            playsinline
            preload="auto"
            poster="/images/online-learning-poster.webp"
            aria-label="Fame College online learning platform demo"
          >
            <source src="/videos/online-learning.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  </section>
</template>
