<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    title: 'Register',
    body: 'Begin your application in minutes — choose a campus or online pathway that fits your goals, schedule, and learning style, and take the first step toward your future today.',
    bg: 'bg-step-lavender',
    icon: '/images/how-it-works/register.png',
    iconAlt: 'Secure registration on mobile',
  },
  {
    num: '02',
    title: 'Get Access',
    body: 'Receive your student portal credentials, timetable and onboarding resources so your family knows exactly what happens next.',
    bg: 'bg-step-cream',
    icon: '/images/how-it-works/get-access.png',
    iconAlt: 'Student portal and onboarding',
  },
  {
    num: '03',
    title: 'Start Learning',
    body: 'Join on-campus classes or live online tutorials with structured lessons, revision materials and mentor check-ins.',
    bg: 'bg-step-cyan',
    icon: '/images/how-it-works/start-learning.png',
    iconAlt: 'Global learning resources',
  },
  {
    num: '04',
    title: 'Mentorship & Support',
    body: 'Ongoing academic mentoring, progress updates for parents, and exam-focused coaching through every term.',
    bg: 'bg-step-peach',
    icon: '/images/how-it-works/mentorship.png',
    iconAlt: 'Online mentorship and support',
  },
] as const

/** Rightmost expanded card index (0–3). Desktop carousel only. */
const activeIndex = ref(0)

const canGoPrev = computed(() => activeIndex.value > 0)
const canGoNext = computed(() => activeIndex.value < steps.length - 1)
const allExpanded = computed(() => activeIndex.value === steps.length - 1)

const stackCardWidthRem = 22.5
const stackOffsetRem = 12.5

const stackCount = computed(() => steps.length - activeIndex.value - 1)

const stackContainerStyle = computed(() => {
  const count = stackCount.value
  if (count <= 0) return {}
  const width = stackCardWidthRem + Math.max(0, count - 1) * stackOffsetRem
  return { width: `${width}rem` }
})

const navButtonBase =
  'flex size-11 items-center justify-center rounded-full transition'

function navButtonClass(active: boolean) {
  return active
    ? 'bg-white text-navy hover:bg-white/90'
    : 'border border-white/25 bg-transparent text-white/40'
}

function isExpanded(index: number) {
  return index <= activeIndex.value
}

function isInStack(index: number) {
  return index > activeIndex.value
}

function stackOffset(index: number) {
  return (index - activeIndex.value - 1) * stackOffsetRem
}

function stackZIndex(index: number) {
  return index + 1
}

function cardWidthClass() {
  return allExpanded.value ? 'step-card--expanded-fill' : 'step-card--expanded'
}

function prev() {
  if (canGoPrev.value) activeIndex.value -= 1
}

function next() {
  if (canGoNext.value) activeIndex.value += 1
}
</script>

<template>
  <section id="how-it-works" class="bg-navy-bg py-16 lg:py-24">
    <div class="section-container">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <SectionEyebrow label="HOW IT WORKS" />
          <h2
            class="mt-4 max-w-xl font-serif text-3xl font-normal leading-tight text-white sm:text-4xl"
          >
            From Application to Mentorship, in Four Clear Steps.
          </h2>
        </div>
        <div class="hidden gap-2 lg:flex">
          <button
            type="button"
            :class="[navButtonBase, navButtonClass(canGoPrev)]"
            :disabled="!canGoPrev"
            aria-label="Previous step"
            @click="prev"
          >
            <ChevronLeft class="size-5" />
          </button>
          <button
            type="button"
            :class="[navButtonBase, navButtonClass(canGoNext)]"
            :disabled="!canGoNext"
            aria-label="Next step"
            @click="next"
          >
            <ChevronRight class="size-5" />
          </button>
        </div>
      </div>

      <div class="mt-10">
        <!-- Mobile / tablet: all cards full width, no carousel -->
        <div
          class="flex flex-col gap-4 lg:hidden"
          role="list"
          aria-label="Application steps"
        >
          <article
            v-for="step in steps"
            :key="step.num"
            role="listitem"
            class="step-card relative w-full overflow-hidden rounded-3xl p-6 text-navy"
            :class="step.bg"
          >
            <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
            <h3 class="mt-4 font-serif text-xl font-normal">
              {{ step.title }}
            </h3>
            <p class="step-card__text mt-3 text-sm leading-relaxed text-navy/80">
              {{ step.body }}
            </p>
            <img
              :src="step.icon"
              :alt="step.iconAlt"
              class="step-card__icon pointer-events-none absolute bottom-4 right-4 h-20 w-auto sm:h-24"
              width="96"
              height="96"
              loading="lazy"
            >
          </article>
        </div>

        <!-- Desktop: animated stack / expand -->
        <div class="hidden lg:block">
          <div
            v-if="allExpanded"
            class="step-track grid w-full grid-cols-4 gap-4"
            role="list"
            aria-label="Application steps"
          >
            <article
              v-for="(step, index) in steps"
              :key="step.num"
              role="listitem"
              class="step-card step-card--grid relative w-full overflow-hidden rounded-3xl p-6 text-navy"
              :class="[step.bg]"
              :style="{ zIndex: index + 1 }"
            >
              <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
              <h3 class="mt-4 font-serif text-xl font-normal">
                {{ step.title }}
              </h3>
              <p class="step-card__text mt-3 text-sm leading-relaxed text-navy/80">
                {{ step.body }}
              </p>
              <img
                :src="step.icon"
                :alt="step.iconAlt"
                class="step-card__icon pointer-events-none absolute bottom-4 right-4 h-24 w-auto"
                width="96"
                height="96"
                loading="lazy"
              >
            </article>
          </div>

          <div
            v-else
            class="step-track flex w-full min-w-0 items-stretch justify-between"
            role="list"
            aria-label="Application steps"
          >
            <div class="flex min-w-0 items-stretch">
              <article
                v-for="(step, index) in steps"
                v-show="isExpanded(index)"
                :key="step.num"
                role="listitem"
                class="step-card relative shrink-0 origin-left overflow-hidden rounded-3xl p-6 text-navy transition-[width] duration-500 ease-out"
                :class="[step.bg, cardWidthClass()]"
                :style="{ zIndex: index + 1 }"
              >
                <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
                <h3 class="mt-4 font-serif text-xl font-normal">
                  {{ step.title }}
                </h3>
                <p class="step-card__text mt-3 text-sm leading-relaxed text-navy/80">
                  {{ step.body }}
                </p>
                <img
                  :src="step.icon"
                  :alt="step.iconAlt"
                  class="step-card__icon pointer-events-none absolute bottom-4 right-4 h-24 w-auto"
                  width="96"
                  height="96"
                  loading="lazy"
                >
              </article>
            </div>

            <div
              class="step-stack relative shrink-0"
              :style="stackContainerStyle"
              aria-hidden="true"
            >
              <article
                v-for="(step, index) in steps"
                v-show="isInStack(index)"
                :key="`stack-${step.num}`"
                class="step-card step-card--stacked absolute top-0 h-full overflow-hidden rounded-3xl p-6 text-navy transition-[left] duration-500 ease-out"
                :class="step.bg"
                :style="{
                  left: `${stackOffset(index)}rem`,
                  width: `${stackCardWidthRem}rem`,
                  zIndex: stackZIndex(index),
                }"
              >
                <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
                <h3 class="mt-4 font-serif text-xl font-normal">
                  {{ step.title }}
                </h3>
                <p class="step-card__text mt-3 text-sm leading-relaxed text-navy/80">
                  {{ step.body }}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10">
        <AppButton href="#contact" variant="green">
          Start your Application →
        </AppButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.step-track,
.step-stack {
  min-height: 20rem;
}

.step-card__text {
  padding-right: 6.5rem;
}

@media (min-width: 640px) {
  .step-card__text {
    padding-right: 7.5rem;
  }
}

.step-card--grid .step-card__text {
  /* max-width: 11rem; */
  padding-right: 0;
}

/* @media (min-width: 1280px) {
  .step-card--grid .step-card__text {
    max-width: 12rem;
  }
} */

.step-card--stacked .step-card__text {
  max-width: none;
  padding-right: 0;
}

.step-card--expanded .step-card__text {
  /* max-width: 14rem; */
  padding-right: 0;
}

.step-card--grid {
  max-width: none;
}

.step-card--expanded {
  flex: 0 0 auto;
  width: min(22.5rem, 42vw);
}

.step-card--expanded-fill {
  flex: 1 1 0;
  min-width: 0;
  max-width: 22.5rem;
}
</style>
