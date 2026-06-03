<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next'

const steps = [
  {
    num: '01',
    title: 'Register',
    body: 'Begin your application in minutes — choose a campus or online pathway that fits your goals, schedule, and learning style, and take the first step toward your future today.',
    bg: 'bg-step-lavender',
  },
  {
    num: '02',
    title: 'Get Access',
    body: 'Receive your student portal credentials, timetable and onboarding resources so your family knows exactly what happens next.',
    bg: 'bg-step-cream',
  },
  {
    num: '03',
    title: 'Start Learning',
    body: 'Join on-campus classes or live online tutorials with structured lessons, revision materials and mentor check-ins.',
    bg: 'bg-step-cyan',
  },
  {
    num: '04',
    title: 'Mentorship & Support',
    body: 'Ongoing academic mentoring, progress updates for parents, and exam-focused coaching through every term.',
    bg: 'bg-step-peach',
  },
] as const

/** Rightmost expanded card index (0–3). */
const activeIndex = ref(0)

const canGoPrev = computed(() => activeIndex.value > 0)
const canGoNext = computed(() => activeIndex.value < steps.length - 1)
const allExpanded = computed(() => activeIndex.value === steps.length - 1)

const STACK_PEEK_REM = 10.5
const STACK_OFFSET_REM = 1.25

const stackCount = computed(() => steps.length - activeIndex.value - 1)

const stackContainerStyle = computed(() => {
  const count = stackCount.value
  if (count <= 0) return {}
  const width =
    STACK_PEEK_REM + Math.max(0, count - 1) * STACK_OFFSET_REM
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
  return (index - activeIndex.value - 1) * STACK_OFFSET_REM
}

function stackZIndex(index: number) {
  return steps.length - index
}

function expandedShapeClass(index: number) {
  if (activeIndex.value === 0) return 'rounded-3xl'

  const isFirst = index === 0
  const isLastExpanded = index === activeIndex.value

  if (isFirst) return 'rounded-l-3xl'
  if (isLastExpanded && allExpanded.value) return 'rounded-r-3xl'
  return 'rounded-none'
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
        <div class="flex gap-2">
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
        <div
          v-if="allExpanded"
          class="step-track flex w-full items-stretch"
          role="list"
          aria-label="Application steps"
        >
          <article
            v-for="(step, index) in steps"
            :key="step.num"
            role="listitem"
            class="step-card shrink-0 origin-left overflow-hidden p-6 text-navy transition-[width,border-radius] duration-500 ease-out"
            :class="[
              step.bg,
              expandedShapeClass(index),
              cardWidthClass(),
            ]"
            :style="{ zIndex: index + 1 }"
          >
            <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
            <h3 class="mt-4 font-serif text-xl font-normal">
              {{ step.title }}
            </h3>
            <p class="mt-3 text-sm leading-relaxed text-navy/80">
              {{ step.body }}
            </p>
          </article>
        </div>

        <div
          v-else
          class="step-track flex w-full items-stretch justify-between"
          role="list"
          aria-label="Application steps"
        >
          <div class="flex shrink-0 items-stretch">
            <article
              v-for="(step, index) in steps"
              v-show="isExpanded(index)"
              :key="step.num"
              role="listitem"
              class="step-card shrink-0 origin-left overflow-hidden p-6 text-navy transition-[width,border-radius] duration-500 ease-out"
              :class="[
                step.bg,
                expandedShapeClass(index),
                cardWidthClass(),
              ]"
              :style="{ zIndex: index + 1 }"
            >
              <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
              <h3 class="mt-4 font-serif text-xl font-normal">
                {{ step.title }}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-navy/80">
                {{ step.body }}
              </p>
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
                zIndex: stackZIndex(index),
              }"
            >
              <p class="font-serif text-2xl font-normal">{{ step.num }}</p>
              <h3 class="mt-4 truncate font-serif text-xl font-normal">
                {{ step.title }}
              </h3>
            </article>
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
  min-height: 18rem;
}

.step-card--expanded {
  flex: 0 0 auto;
  width: min(22.5rem, calc(100vw - 3rem));
}

.step-card--stacked {
  width: 10.5rem;
  padding-left: 1.5rem;
  padding-right: 1.25rem;
}

.step-card--expanded-fill {
  flex: 1 1 0;
  min-width: 0;
  max-width: 22.5rem;
}

@media (min-width: 640px) {
  .step-card--expanded {
    width: min(22.5rem, 42vw);
  }

  .step-card--stacked {
    width: 11.5rem;
  }
}

@media (min-width: 1024px) {
  .step-card--stacked {
    width: 12.5rem;
  }
}
</style>
