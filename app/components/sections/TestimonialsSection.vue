<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'
import { testimonials } from '~/data/testimonials'

const index = ref(0)

const current = computed(() => testimonials[index.value]!)
const canGoPrev = computed(() => index.value > 0)
const canGoNext = computed(() => index.value < testimonials.length - 1)

const navButtonBase =
  'flex size-11 shrink-0 items-center justify-center rounded-full transition'

function navButtonClass(active: boolean) {
  return active
    ? 'bg-green text-white shadow-lg'
    : 'border border-border bg-white text-gray-body'
}

function prev() {
  if (canGoPrev.value) index.value -= 1
}

function next() {
  if (canGoNext.value) index.value += 1
}
</script>

<template>
  <section id="stories" class="py-16 lg:py-24">
    <div class="section-container">
      <div class="text-center">
        <SectionEyebrow label="STORIES" centered />
        <h2
          class="mt-4 font-serif text-3xl font-normal leading-[120%] text-navy sm:text-5xl"
        >
          Trusted by Parents. Loved by Students.
        </h2>
      </div>

      <!-- Mobile / tablet -->
      <div class="relative mt-12 px-12 sm:px-14 lg:hidden">
        <div class="grid items-center gap-10">
          <div class="relative mx-auto w-fit">
            <span
              class="absolute -left-4 -top-4 size-24 rounded-full bg-green/30"
              aria-hidden="true"
            />
            <div
              class="relative overflow-hidden rounded-full ring-4 ring-green"
            >
              <NuxtImg
                :src="current.image"
                :alt="current.name"
                class="size-40 object-cover sm:size-48"
                width="192"
                height="192"
              />
            </div>
          </div>

          <div class="relative px-4">
            <span
              class="absolute left-0 top-0 font-serif text-6xl leading-none text-mint"
              aria-hidden="true"
            >
              &ldquo;
            </span>
            <blockquote class="relative z-10 pt-8">
              <p class="text-lg leading-relaxed text-gray-body">
                {{ current.quote }}
              </p>
              <footer class="mt-6">
                <p class="font-serif text-xl font-normal text-navy">
                  {{ current.name }}
                </p>
                <p class="mt-1 text-sm text-gray-body">{{ current.role }}</p>
              </footer>
            </blockquote>
            <span
              class="absolute bottom-0 right-0 font-serif text-6xl leading-none text-mint"
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </div>
        </div>

        <button
          type="button"
          :class="[navButtonBase, navButtonClass(canGoPrev), 'absolute left-0 top-1/2 -translate-y-1/2']"
          :disabled="!canGoPrev"
          aria-label="Previous testimonial"
          @click="prev"
        >
          <ChevronLeft class="size-5" />
        </button>
        <button
          type="button"
          :class="[navButtonBase, navButtonClass(canGoNext), 'absolute right-0 top-1/2 -translate-y-1/2']"
          :disabled="!canGoNext"
          aria-label="Next testimonial"
          @click="next"
        >
          <ChevronRight class="size-5" />
        </button>
      </div>

      <!-- Desktop: 1217px — btn | 124px | image | 147px | text 469px | 124px | btn -->
      <div
        class="relative mx-auto mt-12 hidden w-full max-w-[1217px] items-center lg:flex"
      >
        <button
          type="button"
          :class="[navButtonBase, navButtonClass(canGoPrev)]"
          :disabled="!canGoPrev"
          aria-label="Previous testimonial"
          @click="prev"
        >
          <ChevronLeft class="size-5" />
        </button>

        <div
          class="flex min-w-0 flex-1 items-center justify-center gap-8 px-4 lg:gap-12 xl:gap-[147px] xl:px-[124px]"
        >
          <div class="relative shrink-0">
            <span
              class="absolute -left-4 -top-4 size-24 rounded-full bg-green/30"
              aria-hidden="true"
            />
            <div
              class="relative overflow-hidden rounded-full ring-4 ring-green"
            >
              <NuxtImg
                :src="current.image"
                :alt="current.name"
                class="size-48 object-cover"
                width="192"
                height="192"
              />
            </div>
          </div>

          <div class="relative min-w-0 flex-1 max-w-[469px]">
            <span
              class="absolute left-0 top-0 font-serif text-6xl leading-none text-mint"
              aria-hidden="true"
            >
              "
            </span>
            <blockquote class="relative z-10 pt-8">
              <p class="text-lg leading-relaxed text-gray-body">
                {{ current.quote }}
              </p>
              <footer class="mt-6">
                <p class="font-serif text-xl font-normal text-navy">
                  {{ current.name }}
                </p>
                <p class="mt-1 text-sm text-gray-body">{{ current.role }}</p>
              </footer>
            </blockquote>
            <span
              class="absolute bottom-0 right-0 font-serif text-6xl leading-none text-mint"
              aria-hidden="true"
            >
              "
            </span>
          </div>
        </div>

        <button
          type="button"
          :class="[navButtonBase, navButtonClass(canGoNext)]"
          :disabled="!canGoNext"
          aria-label="Next testimonial"
          @click="next"
        >
          <ChevronRight class="size-5" />
        </button>
      </div>

      <div class="mt-10 flex justify-center gap-2">
        <button
          v-for="(_, i) in testimonials"
          :key="i"
          type="button"
          class="h-2 rounded-full transition-all"
          :class="
            i === index
              ? 'w-8 bg-green'
              : 'w-2 bg-mint hover:bg-green/50'
          "
          :aria-label="`Go to testimonial ${i + 1}`"
          @click="index = i"
        />
      </div>
    </div>
  </section>
</template>
